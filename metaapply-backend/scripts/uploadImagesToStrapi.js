const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");
const FormData = require("form-data");
const path = require("path");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const UPLOAD_URL = `${BASE_URL}/api/upload`;

const TOKEN = "ce0b4cdd9d97cb43f99921b15d85733bfcdf2e82c1aa25753e8522a2e71c226c875d4849c82d11a6ce6046e90e708a247cbb41bab8771c5e2816a45d6258ba1f65161e79931a9dedf98f1d7736172dae384ff3f87b50c4fc642b81ac60eb7148296800f6a7ef7c98be816fee62d7fad71a7fa470f74a1e25f03921b8082ea035";
const FOLDER_ID = 2; // ✅ your events folder

// -------------------------
// UPLOAD IMAGE
// -------------------------
const uploadImageToStrapi = async (imageUrl) => {
  try {
    const response = await axios({
      url: imageUrl,
      method: "GET",
      responseType: "stream",
    });

    const fileName = imageUrl.split("/").pop();

    const form = new FormData();

    // file
    form.append("files", response.data, fileName);

    // 🔥 IMPORTANT: fileInfo with folder
    form.append(
      "fileInfo",
      JSON.stringify({
        folder: FOLDER_ID,
      })
    );

    const uploadRes = await axios.post(UPLOAD_URL, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("✅ Uploaded:", fileName);
    console.log("Folder ID used:", FOLDER_ID);

    return uploadRes.data[0]?.id;
  } catch (err) {
    console.log("❌ Upload failed:", imageUrl);
    console.log(err.response?.data || err.message);
    return null;
  }
};

// -------------------------
// MAIN FUNCTION
// -------------------------
const uploadImages = async () => {
  const filePath = path.join(__dirname, "events-updated-list.csv");
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => results.push(row))
    .on("end", async () => {
      console.log(`📊 Total rows: ${results.length}`);

      for (const row of results) {
  const logo = row["Event Logo URL"]?.trim();
  const featured = row["Featured Image URL"]?.trim();

  console.log("Row:", row["Event Title"]);
  console.log("Logo:", logo);
  console.log("Featured:", featured);

  if (logo) {
    console.log("⬆️ Uploading logo...");
    await uploadImageToStrapi(logo);
  }

  if (featured) {
    console.log("⬆️ Uploading featured...");
    await uploadImageToStrapi(featured);
  }
}

      console.log("🎉 All images uploaded to events folder!");
    });
};

uploadImages();