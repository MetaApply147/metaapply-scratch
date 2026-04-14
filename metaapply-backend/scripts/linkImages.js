const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");
const path = require("path");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const API_URL = `${BASE_URL}/api/events`;
const MEDIA_URL = `${BASE_URL}/api/upload/files`;

const TOKEN = "92826d26f093e602ba5c7405325e27bd013cef3fcf598e0b126eb5bde11313b051d31e19ab0ce9b0a57933dc562e9609cf36feb31e404d3e51234592035cf96a5330793c0928398b5ed43a5659ce8966c546bc9e1221c557caa3107e5a28f29df2ef11ef13f4adf16ff339bd7620ed3e27fba7d96b3a395cdc3d7f86cf921e50";

// -------------------------
// NORMALIZE
// -------------------------
const normalize = (str) =>
  str?.toLowerCase().replace(/[^a-z0-9]/g, "");

const getFileName = (url) => {
  if (!url) return null;
  return url.split("/").pop().split("?")[0];
};
// -------------------------
// LOAD MEDIA
// -------------------------
let MEDIA_CACHE = [];

const loadMedia = async () => {
  const res = await axios.get(MEDIA_URL, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  MEDIA_CACHE = res.data;
  console.log("📸 Media loaded:", MEDIA_CACHE.length);
};

// -------------------------
// FIND IMAGE
// -------------------------
const findImage = (name) => {
  if (!name) return null;

  const clean = normalize(name);

  return MEDIA_CACHE.find((m) =>
    normalize(m.name).includes(clean.slice(0, 15))
  );
};

// -------------------------
// FIND EVENT BY SLUG
// -------------------------
const findEvent = async (slug, title) => {
  try {
    // 1️⃣ Try slug match
    let res = await axios.get(
      `${API_URL}?filters[slug][$containsi]=${slug}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (res.data.data.length) {
      return {
        id: res.data.data[0].id,
        documentId: res.data.data[0].documentId,
      };
    }

    // 2️⃣ Fallback → match by pageTitle
    res = await axios.get(
      `${API_URL}?filters[pageTitle][$containsi]=${title}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    if (res.data.data.length) {
      console.log("🔁 Fallback match by title:", title);
      return {
        id: res.data.data[0].id,
        documentId: res.data.data[0].documentId,
      };
    }

    return null;
  } catch {
    return null;
  }
};

// -------------------------
// MAIN
// -------------------------
const linkImagesOnly = async () => {
  const filePath = path.join(__dirname, "events-updated-list.csv");

  const rows = [];

  await loadMedia();

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => rows.push(row))
    .on("end", async () => {
      console.log("📊 Rows:", rows.length);

      for (const row of rows) {
        try {
          // -------------------------
          // GET SLUG
          // -------------------------
          const slug =
            row["slug"] ||
            row["Page Title"]
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

          if (!slug) {
            console.log("⚠️ No slug, skip");
            continue;
          }
const cleanSlug = (slug) =>
  slug?.replace(/-\d{4}$/, ""); 
          const searchSlug = cleanSlug(slug);
          const title = row["Page Title"];
const event = await findEvent(slug, title);

          // ❌ STRICT: NO CREATE
          if (!event) {
            console.log("⏭️ Not found:", slug);
            continue;
          }

          // -------------------------
          // IMAGE NAMES FROM CSV
          // -------------------------
          const featuredName = getFileName(row["Featured Image URL"]);
const logoName = getFileName(row["Event Logo URL"]);

          const featured = findImage(featuredName);
          const logo = findImage(logoName);

          console.log("👉", slug, {
            featured: featured?.name,
            logo: logo?.name,
          });

          // -------------------------
          // ONLY UPDATE THESE 2 FIELDS
          // -------------------------
          await axios.put(
            `${API_URL}/${event.documentId}`,
            {
              data: {
                featuredImage: featured?.id
                  ? [featured.id]
                  : [],
                eventLogo: logo?.id
                  ? [logo.id]
                  : [],
              },
            },
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
                "Content-Type": "application/json",
              },
            }
          );

          console.log("✅ Updated images:", slug);
        } catch (err) {
          console.error("❌ Error:", row["Page Title"]);
          console.error(err.response?.data || err.message);
        }
      }

      console.log("🎉 DONE (images only updated)");
    });
};

linkImagesOnly();