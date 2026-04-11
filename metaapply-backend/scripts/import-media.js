const fs = require("fs");
const axios = require("axios");

const STRAPI_URL = "http://localhost:1337";
const API_TOKEN = "852633ece3e966d62714e0e30045ad71c9a8428c485f0b8c64168670a453a8288e4c387700ef6f027cc01797aac7838e6583012f7327eb16f39bdcead136b19dbadf943718aae0a6a5d06ec92555f60d281197512b306d5fce4307275be98b3dd4f67b7bcf9dace843356cdc90c8a3b13b639ae409ed6e8f8b32f55a20cf2f1e";

const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
};

// ✅ Date formatter (important)
function formatDate(dateStr) {
    if (!dateStr) return null;

    const d = new Date(dateStr);
    return d.toISOString().split("T")[0]; // YYYY-MM-DD
}

async function createMedia(item) {
    try {
        const payload = {
            data: {
                title: item["Media Title"],

                // ❌ NO SLUG HERE (Strapi will auto generate)

                published_date: formatDate(item["Date"]),
                channel: item["Media Channel"],
                media_url: item["Media url"],
            },
        };

        await axios.post(
            `${STRAPI_URL}/api/media-coverages`,
            payload,
            { headers }
        );

        console.log("✅ Created:", item["Media Title"]);
    } catch (err) {
        console.log("\n❌ Failed:", item["Media Title"]);

        if (err.response) {
            console.log("👉 STATUS:", err.response.status);
            console.log("👉 RESPONSE:", JSON.stringify(err.response.data, null, 2));
        } else {
            console.log("👉 ERROR:", err.message);
        }
    }
}

async function importData() {
    const data = JSON.parse(fs.readFileSync("media.json", "utf-8"));

    console.log(`🚀 Importing ${data.length} records...\n`);

    for (const item of data) {
        await createMedia(item);
    }

    console.log("\n🎉 Import Completed");
}

importData();