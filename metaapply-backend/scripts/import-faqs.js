const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");
const path = require("path");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const API_URL = `${BASE_URL}/api/posts`;

const TOKEN = "681371caa8423d8e140df6fc879937442da06ffe84a31cb99ed2c061e1ce67e66ad38ab1d3ba4e4f8088560268fab92d434596044043a1e906af19078f0ecf0ab5b1c53ed683089cd977235faf8cf9c386349b0729207251c06b4c021f57080927f0b72322bccb597fec58d2f4520202c3fa3d6d5865ea58e00fd7f67fa89a67";

const importCSV = async () => {
  const results = [];
  const filePath = path.join(__dirname, "Faqs_csv.csv");

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", async () => {
      try {
        console.log(`📊 Total CSV rows: ${results.length}`);

        // fetch all Strapi posts once
        const postsRes = await axios.get(
          `${API_URL}?pagination[pageSize]=1000`,
          {
            headers: { Authorization: `Bearer ${TOKEN}` },
          }
        );

        const posts = postsRes.data.data;
        console.log(`📦 Total Strapi posts: ${posts.length}`);

        for (const row of results) {
          try {
            const title = row[Object.keys(row)[0]]
              ?.replace(/\uFEFF/g, "") // remove BOM
              .replace(/\s+/g, " ")
              .trim();

            console.log("🔍 Searching:", title);

            const existing = posts.find(
              (p) =>
                p.title
                  ?.replace(/\s+/g, " ")
                  .trim()
                  .toLowerCase() === title.toLowerCase()
            );

            if (!existing) {
              console.log("❌ No match:", title);
              continue;
            }

            const faqs = [];
            let i = 0;

            while (row[`faq_${i}_question`]) {
              faqs.push({
                question: row[`faq_${i}_question`] || "",
                answer: row[`faq_${i}_answer`] || "",
                faq_id: `faq${i + 1}`,
              });
              i++;
            }

            if (!faqs.length) {
              console.log("⚠️ No FAQs found for:", title);
              continue;
            }

            await axios.put(
  `${API_URL}/${existing.documentId || existing.id}`,
  {
    data: { faqs },
  },
  {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }
);

            console.log(`✅ Updated FAQs for: ${title}`);
          } catch (err) {
            console.error(`❌ Error updating row`);
            console.error(err.response?.data || err.message);
          }
        }

        console.log("🎉 Import completed!");
      } catch (err) {
        console.error("❌ Fatal error:");
        console.error(err.response?.data || err.message);
      }
    });
};

importCSV();