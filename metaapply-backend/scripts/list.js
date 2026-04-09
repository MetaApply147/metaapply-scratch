const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const axios = require("axios");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const TOKEN = "4c0b810bda1208d575232acea0d911a02ff4b8ebf59694aff66b834754b139013a61b20dc5ffc9df870a92f30e471bdf0940aaa856de2d8469b4380b08a70c7e24d465b5bd34cab89725dc2ed0774acb7cbb241dca2b06920033b1bb3825e02ced28de71b3582abe18bfd761c4806f70f9a768d277d765c53379f07808058c2f";

// Extract images (markdown + html)
const extractImages = (content) => {
  const urls = [];
  let match;

  const mdRegex = /!\[.*?\]\((.*?)\)/g;
  while ((match = mdRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  const htmlRegex = /<img[^>]+src="([^">]+)"/g;
  while ((match = htmlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  return urls;
};

// Load CSV
const loadCSV = async () => {
  const rows = [];

  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, "post.csv"))
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", resolve);
  });

  return rows;
};

// Fetch uploads
const getUploads = async () => {
  const res = await axios.get(`${BASE_URL}/api/upload/files`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    params: { pagination: { pageSize: 1000 } },
  });

  return res.data;
};

const run = async () => {
  console.log("📄 Reading CSV...");
  const rows = await loadCSV();

  console.log("📦 Fetching uploads...");
  const uploads = await getUploads();

  // Map filename → uploaded URL
  const uploadMap = {};
  uploads.forEach((file) => {
    uploadMap[file.name] = file.url;
  });

  const mappings = [];
  const seen = new Set();

  for (const row of rows) {
    const content = row.post_content || "";

    const imageUrls = extractImages(content);

    for (const originalUrl of imageUrls) {
      const fileName = originalUrl.split("/").pop().split("?")[0];

      if (!fileName || seen.has(fileName)) continue;

      if (uploadMap[fileName]) {
        mappings.push({
          original: originalUrl,
          uploaded: uploadMap[fileName],
        });

        seen.add(fileName);
      }
    }
  }

  // Save file
  fs.writeFileSync(
    path.join(__dirname, "image-mapping.json"),
    JSON.stringify(mappings, null, 2)
  );

  console.log("✅ Mapping created:", mappings.length);
};

run();