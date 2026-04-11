const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");
const path = require("path");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const API_URL = `${BASE_URL}/api/events`;
const MEDIA_URL = `${BASE_URL}/api/upload/files`;

const TOKEN = "92826d26f093e602ba5c7405325e27bd013cef3fcf598e0b126eb5bde11313b051d31e19ab0ce9b0a57933dc562e9609cf36feb31e404d3e51234592035cf96a5330793c0928398b5ed43a5659ce8966c546bc9e1221c557caa3107e5a28f29df2ef11ef13f4adf16ff339bd7620ed3e27fba7d96b3a395cdc3d7f86cf921e50";

// -------------------------
// DATE FORMAT FIX
// -------------------------
const formatDate = (dateStr) => {
  if (!dateStr) return null;

  try {
    if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split("-");
      return `${year}-${month}-${day}`;
    }

    const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
    const parsed = new Date(cleaned);

    if (isNaN(parsed)) return null;

    return parsed.toISOString().split("T")[0];
  } catch {
    return null;
  }
};

// -------------------------
// CATEGORY MAPPING (IMPORTANT)
// -------------------------
const getCategory = (value = "") => {
  const val = value.toLowerCase();

  if (val.includes("past")) return "past";
  if (val.includes("upcoming")) return "upcoming";

  return null;
};

// -------------------------
// FIND IMAGE FROM MEDIA LIBRARY
// -------------------------
const findImageByWpId = async (wpId) => {
  try {
    if (!wpId) return null;

    // get all media
    const res = await axios.get(`${MEDIA_URL}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    // 🔥 IMPORTANT: match using name or url
    const file = res.data.find((item) =>
      item.name.includes(wpId) ||
      item.url.includes(wpId)
    );

    if (file) return file.id;

    console.log("⚠️ WP image not matched:", wpId);
    return null;
  } catch (err) {
    console.log("❌ Media error:", wpId);
    return null;
  }
};

// -------------------------
// UPDATE ALT TEXT (IMPORTANT)
// -------------------------
const updateImageAlt = async (imageId, altText) => {
  try {
    if (!imageId || !altText) return;

    await axios.post(
      `${BASE_URL}/api/upload?id=${imageId}`,
      {
        alternativeText: altText,
      },
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    console.log("🖼️ Alt updated:", altText);
  } catch (err) {
    console.log("❌ Alt update failed:", altText);
  }
};

// -------------------------
// FIND EXISTING ENTRY
// -------------------------
const findExistingEvent = async (slug) => {
  try {
    const res = await axios.get(
      `${API_URL}?filters[slug][$eq]=${slug}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    return res.data.data.length > 0 ? res.data.data[0] : null;
  } catch {
    return null;
  }
};

// -------------------------
// MAIN IMPORT
// -------------------------
const importCSV = async () => {
  const results = [];
  const filePath = path.join(__dirname, "events-updated-list.csv");

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => results.push(row))
    .on("end", async () => {
      console.log(`📊 Total rows: ${results.length}`);

      for (const row of results) {
        try {
          // ✅ USE CSV SLUG (VERY IMPORTANT FIX)
          const slug = row["slug"]?.trim();

          const formattedDate = formatDate(row["Event Date"]);

          // ✅ CATEGORY FIX
          const category = getCategory(row["Category"] || row["Catgrory"]);

          // ✅ FETCH IMAGES
          const eventLogoId = await findImageByWpId(row["Event Logo"]);
const featuredImageId = await findImageByWpId(row["Featured image"]);

          const payload = {
            data: {
              pageTitle: row["Page Title"],
              slug: slug,
              description: row["Description"],
              eventTitle: row["Event Title"],
              eventDate: formattedDate,
              eventDuration: row["Duration"],
              eventLocation: row["Event Location"],
              eventRegistrationDetails:
                row["Event Registration Details"],
              email: row["Email"],
              phone: row["Phone"] ? row["Phone"].toString() : null,
              webinarAgenda: row["Webinar Agenda"],
              registerToday: row["Register Today"],

              // ✅ ENUM FIELD
              category: category,

              // ✅ RELATIONS
              eventLogo: eventLogo?.id || null,
              featuredImage: featuredImage?.id || null,
            },
          };

          const existing = await findExistingEvent(slug);

          if (existing) {
            await axios.put(`${API_URL}/${existing.id}`, payload, {
              headers: { Authorization: `Bearer ${TOKEN}` },
            });

            console.log("🔄 Updated:", row["Event Title"]);
          } else {
            await axios.post(API_URL, payload, {
              headers: { Authorization: `Bearer ${TOKEN}` },
            });

            console.log("✅ Created:", row["Event Title"]);
          }

          // ✅ ALT TEXT FIX (AFTER SAVE)
          if (featuredImage?.id) {
            await updateImageAlt(
              featuredImage.id,
              row["Page Title"] || row["Event Title"]
            );
          }
        } catch (err) {
          console.error("❌ Error:", row["Event Title"]);
          console.error(err.response?.data || err.message);
        }
      }

      console.log("🎉 Import completed!");
    });
};

importCSV();