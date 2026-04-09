const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const axios = require("axios");
const FormData = require("form-data");

const STRAPI_URL = "https://strapi-backend.azurewebsites.net/api/upload";
const TOKEN = "0737862a10d456de1ecec48d74c43579498ddf132da3755a917256fb1e5ff1e67de6780303fa8b32f1ab82a99d9562251df208e092627d00623dd4380096d75bf354345532d2ce367beb6a01045c143839194127447ba0d1d3451cba267dd688bf17726638eb7347e3cccb749d0b269023154f35aef5c2589f38ba4257096d34"; // 🔥 replace this

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