const fs = require("fs");
const axios = require("axios");
const path = require("path");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const POSTS_URL = `${BASE_URL}/api/posts`;
const TOKEN = "4c0b810bda1208d575232acea0d911a02ff4b8ebf59694aff66b834754b139013a61b20dc5ffc9df870a92f30e471bdf0940aaa856de2d8469b4380b08a70c7e24d465b5bd34cab89725dc2ed0774acb7cbb241dca2b06920033b1bb3825e02ced28de71b3582abe18bfd761c4806f70f9a768d277d765c53379f07808058c2f"; // keep your token here

// -------------------------
// LOAD IMAGE MAPPING
// -------------------------
const imageMapping = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "image-mapping.json"),
    "utf-8"
  )
);

console.log("📦 Total mappings loaded:", imageMapping.length);

// -------------------------
// MAIN FUNCTION
// -------------------------
const replaceImageUrls = async () => {
  console.log("🚀 Starting image URL replacement...");

  try {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      console.log(`📄 Fetching page ${page}...`);

      const res = await axios.get(POSTS_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        params: {
          "pagination[page]": page,
          "pagination[pageSize]": 50,
        },
      });

      const posts = res.data.data;

      console.log(`➡️ Posts fetched: ${posts.length}`);

      if (!posts.length) {
        hasMore = false;
        break;
      }

    for (const post of posts) {
      
  console.log("🔍 Checking post:", post.id);
// console.log("🧾 FULL POST:", post);
  const attributes = post.attributes || post;

  let content =
    attributes?.content ||
    attributes?.description ||
    attributes?.body ||
    attributes?.post_content ||
    "";

  if (!content) {
    console.log("⚠️ No content found");
    continue;
  }

  let updatedContent = content;
  let replaced = false;

  imageMapping.forEach(({ original, uploaded }) => {
  const filename = original.split("/").pop().split("?")[0];

  // Escape filename for regex safety
  const safeFilename = filename.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // ✅ Match ANY URL containing that filename (Markdown + HTML)
  const regex = new RegExp(
    `(https?:\\/\\/[^\\s)"']*${safeFilename}(\\?[^\\s)"']*)?)`,
    "g"
  );

  if (regex.test(updatedContent)) {
    console.log("🔁 Replacing file:", filename);

    updatedContent = updatedContent.replace(regex, uploaded);
    replaced = true;
  }
});;

  if (replaced && updatedContent !== content) {
  console.log(`✏️ Updating post ID: ${post.id}`);

  await axios.put(
    `${POSTS_URL}/${post.documentId}`, // ✅ FIXED
    {
      data: {
        content: updatedContent,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
}else {
    console.log("⏭️ No match found");
  }
}

      page++;
    }

    console.log("✅ All image URLs replaced successfully!");
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
  }
};

// -------------------------
// EXECUTE SCRIPT
// -------------------------
(async () => {
  console.log("🔥 Script started...");
  await replaceImageUrls();
})();