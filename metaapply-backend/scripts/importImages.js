const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const axios = require("axios");
const FormData = require("form-data");

const STRAPI_URL = "https://strapi-backend.azurewebsites.net/api/upload";
const TOKEN = "4c0b810bda1208d575232acea0d911a02ff4b8ebf59694aff66b834754b139013a61b20dc5ffc9df870a92f30e471bdf0940aaa856de2d8469b4380b08a70c7e24d465b5bd34cab89725dc2ed0774acb7cbb241dca2b06920033b1bb3825e02ced28de71b3582abe18bfd761c4806f70f9a768d277d765c53379f07808058c2f"; // 🔥 replace this

const importImages = async () => {
  const imageUrls = [];

  // 1. Read CSV
  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, "post.csv")) // 👈 your CSV file name
      .pipe(csv())
      .on("data", (row) => {
        if (row.featured_image) {
          imageUrls.push(row.featured_image.trim());
        }
      })
      .on("end", resolve);
  });

  console.log("✅ Total images found:", imageUrls.length);

  // 2. Upload images one by one
  for (const imageUrl of imageUrls) {
    try {
      console.log("⬇️ Downloading:", imageUrl);

      const response = await axios.get(imageUrl, {
        responseType: "stream",
      });

      const formData = new FormData();
      formData.append("files", response.data, {
        filename: imageUrl.split("/").pop(),
      });

      const uploadRes = await axios.post(STRAPI_URL, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      console.log("✅ Uploaded:", uploadRes.data[0].url);
    } catch (err) {
      console.log("❌ Upload error:", imageUrl);
      console.log("STATUS:", err.response?.status);
      console.log("DATA:", err.response?.data || err.message);
    }
  }
};

importImages();