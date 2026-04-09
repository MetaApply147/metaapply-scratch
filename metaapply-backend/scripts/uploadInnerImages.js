const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const axios = require("axios");
const FormData = require("form-data");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const UPLOAD_URL = `${BASE_URL}/api/upload`;
const TOKEN = "4c0b810bda1208d575232acea0d911a02ff4b8ebf59694aff66b834754b139013a61b20dc5ffc9df870a92f30e471bdf0940aaa856de2d8469b4380b08a70c7e24d465b5bd34cab89725dc2ed0774acb7cbb241dca2b06920033b1bb3825e02ced28de71b3582abe18bfd761c4806f70f9a768d277d765c53379f07808058c2f"; // 🔴 replace this
const FOLDER_ID = 2;

// ✅ Decode escaped HTML (important for WP exports)
const decodeHtml = (html = "") => {
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");
};

// ✅ Extract images from BOTH markdown + HTML
const extractImages = (content) => {
  const urls = [];
  let match;

  // Markdown images ![alt](url)
  const mdRegex = /!\[.*?\]\((.*?)\)/g;
  while ((match = mdRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  // HTML images <img src="...">
  const htmlRegex = /<img[^>]+src="([^">]+)"/g;
  while ((match = htmlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  return urls;
};

const uploadInnerImages = async () => {
  const rows = [];

  // ✅ Load CSV
  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, "post.csv"))
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", () => {
        console.log("✅ Columns:", Object.keys(rows[0]));
        resolve();
      });
  });

  console.log("✅ Rows loaded:", rows.length);

  const uploadedSet = new Set();

  for (const [index, row] of rows.entries()) {
    try {
      // ✅ Get content safely
      let content =
        row.post_content ||
        row.content ||
        row.description ||
        row.body ||
        "";

      if (!content) continue;

      // ✅ Decode HTML if escaped
      content = decodeHtml(content);

      // 🧪 Debug (only first few rows)
      if (index < 2) {
        console.log("\n🔍 Sample Content:\n", content.slice(0, 500));
      }

      const imageUrls = extractImages(content);

      console.log(`📸 Row ${index + 1}: Found ${imageUrls.length} images`);

      for (const imageUrl of imageUrls) {
        try {
          if (!imageUrl.startsWith("http")) continue;

          const fileName = imageUrl.split("/").pop().split("?")[0];

          if (!fileName) continue;

          if (uploadedSet.has(fileName)) {
            console.log("♻️ Already processed:", fileName);
            continue;
          }

          // ✅ Check if already exists in Strapi
          const existingRes = await axios.get(
            `${BASE_URL}/api/upload/files?filters[name][$eq]=${fileName}`,
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          );

          if (existingRes.data.length > 0) {
            console.log("♻️ Already exists in Strapi:", fileName);
            uploadedSet.add(fileName);
            continue;
          }

          console.log("⬇️ Downloading:", imageUrl);

          const imageRes = await axios.get(imageUrl, {
            responseType: "stream",
          });

          const formData = new FormData();
          formData.append("files", imageRes.data, {
            filename: fileName,
          });

          formData.append("folder", FOLDER_ID);

          const uploadRes = await axios.post(UPLOAD_URL, formData, {
            headers: {
              ...formData.getHeaders(),
              Authorization: `Bearer ${TOKEN}`,
            },
          });

          console.log("✅ Uploaded:", uploadRes.data[0].url);

          uploadedSet.add(fileName);
        } catch (err) {
          console.log("❌ Error uploading:", imageUrl);
          console.log(err.response?.data || err.message);
        }
      }
    } catch (err) {
      console.log("❌ Row error:", err.message);
    }
  }

  console.log("\n🚀 DONE uploading inner images");
};

uploadInnerImages();