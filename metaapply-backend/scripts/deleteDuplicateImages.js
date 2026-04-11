const axios = require("axios");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const FILES_API = `${BASE_URL}/api/upload/files`;

const TOKEN = "ce0b4cdd9d97cb43f99921b15d85733bfcdf2e82c1aa25753e8522a2e71c226c875d4849c82d11a6ce6046e90e708a247cbb41bab8771c5e2816a45d6258ba1f65161e79931a9dedf98f1d7736172dae384ff3f87b50c4fc642b81ac60eb7148296800f6a7ef7c98be816fee62d7fad71a7fa470f74a1e25f03921b8082ea035";

// -------------------------
// FETCH ALL FILES
// -------------------------
const getAllFiles = async () => {
  let allFiles = [];
  let page = 1;
  const pageSize = 100;

  while (true) {
    const res = await axios.get(
      `${FILES_API}?pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const data = res.data;

    if (!data || data.length === 0) break;

    allFiles = [...allFiles, ...data];
    page++;
  }

  return allFiles;
};

// -------------------------
// DELETE FILE
// -------------------------
const deleteFile = async (id) => {
  try {
    await axios.delete(`${FILES_API}/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    console.log("🗑 Deleted:", id);
  } catch (err) {
    console.log("❌ Delete failed:", id);
  }
};

// -------------------------
// REMOVE DUPLICATES
// -------------------------
const removeDuplicates = async () => {
  const files = await getAllFiles();

  console.log(`📊 Total files: ${files.length}`);

  const seen = new Map();
  const duplicates = [];

  for (const file of files) {
    const name = file.name;

    if (seen.has(name)) {
      duplicates.push(file);
    } else {
      seen.set(name, file.id);
    }
  }

  console.log(`🧹 Duplicates found: ${duplicates.length}`);

  for (const file of duplicates) {
    await deleteFile(file.id);
  }

  console.log("🎉 Cleanup completed!");
};

removeDuplicates();