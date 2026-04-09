const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

// -------------------------
// HELPER: Process CSV
// -------------------------
const processCSV = (filePath, handler) => {
  return new Promise((resolve) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", async function (row) {
        this.pause();
        await handler(row);
        this.resume();
      })
      .on("end", resolve);
  });
};

// -------------------------
// HELPER: Replace ALT in Markdown
// -------------------------
const updateMarkdownAltText = (content, altText) => {
  if (!content) return "";

  return content.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (match, existingAlt, url) => {
      return `![${altText || existingAlt || "image"}](${url})`;
    }
  );
};

// -------------------------
// MAIN
// -------------------------
module.exports = async () => {
  const strapi = global.strapi;

  console.log("🚀 ALT TEXT UPDATE STARTED");

  await processCSV(
    path.join(__dirname, "post.csv"),
    async (row) => {
      try {
        // 🔍 Find existing post by slug
        const existing = await strapi.entityService.findMany(
          "api::post.post",
          {
            filters: { slug: row.post_name },
            limit: 1,
          }
        );

        if (!existing.length) {
          console.log("❌ Post not found:", row.post_name);
          return;
        }

        const post = existing[0];

        // 🧠 Get current content from DB (IMPORTANT)
        const currentContent = post.content;

        // 🏷️ Get ALT text from CSV
        const altText = row.featured_image_alt_text;

        if (!altText) {
          console.log("⚠️ No ALT text, skipping:", row.post_name);
          return;
        }

        // 🔄 Replace ALT text in markdown
        const updatedContent = updateMarkdownAltText(
          currentContent,
          altText
        );

        // 🚀 Update post
        await strapi.entityService.update(
          "api::post.post",
          post.id,
          {
            data: {
              content: updatedContent,
            },
          }
        );

        console.log("✅ Updated ALT:", row.post_name);
      } catch (err) {
        console.error("❌ ERROR:", row.post_name, err.message);
      }
    }
  );

  console.log("🎉 ALT TEXT UPDATE COMPLETED");
};