const fs = require("fs");
const xml2js = require("xml2js");
const axios = require("axios");
const path = require("path");
const FormData = require("form-data");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const MEDIA_URL = `${BASE_URL}/api/upload/files`;

const TOKEN = "92826d26f093e602ba5c7405325e27bd013cef3fcf598e0b126eb5bde11313b051d31e19ab0ce9b0a57933dc562e9609cf36feb31e404d3e51234592035cf96a5330793c0928398b5ed43a5659ce8966c546bc9e1221c557caa3107e5a28f29df2ef11ef13f4adf16ff339bd7620ed3e27fba7d96b3a395cdc3d7f86cf921e50";

// -------------------------
// BUILD IMAGE MAP (WP ID → FILE NAME)
// -------------------------
const buildImageMap = (items) => {
  const map = {};

  items.forEach((item) => {
    if (item["wp:post_type"]?.[0] === "attachment") {
      const id = item["wp:post_id"]?.[0];
      const url = item["wp:attachment_url"]?.[0];

      if (id && url) {
        const fileName = url.split("/").pop();
        map[id] = fileName;
      }
    }
  });

  console.log("🗺️ Image map:", Object.keys(map).length);
  return map;
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
// FIND IMAGE BY NAME
// -------------------------
const normalize = (str) =>
  str?.toLowerCase().replace(/[^a-z0-9]/g, "");

const findImageByName = (fileName) => {
  if (!fileName) return null;

  const cleanFile = normalize(fileName);

  const file = MEDIA_CACHE.find((item) => {
    const cleanMedia = normalize(item.name);
    return cleanMedia.includes(cleanFile.slice(0, 10)); // partial match
  });

  if (!file) {
    console.log("⚠️ No match for:", fileName);
  } else {
    console.log("✅ Matched:", fileName, "→", file.name);
  }

  return file || null;
};

// -------------------------
// UPDATE ALT TEXT
// -------------------------
const updateAlt = async (file, altText) => {
  try {
    await axios.post(
      `${BASE_URL}/api/upload?id=${file.id}`,
      {
        fileInfo: {
          alternativeText: altText,
          caption: altText,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("🖼️ ALT updated:", file.name);
  } catch (err) {
    console.log("❌ ALT update failed:", file.name);
    console.log(err.response?.data || err.message);
  }
};

// -------------------------
// MAIN
// -------------------------
const updateAltFromXML = async () => {
  const xmlPath = path.join(__dirname, "../events.xml");
  const xml = fs.readFileSync(xmlPath, "utf-8");

  xml2js.parseString(xml, async (err, result) => {
    if (err) throw err;

    const items = result.rss.channel[0].item;

    const imageMap = buildImageMap(items);
    await loadMedia();

    for (const item of items) {
      try {
        if (item["wp:post_type"]?.[0] === "attachment") continue;

        const meta = item["wp:postmeta"] || [];

        const pageTitle = item.title?.[0];

        const featuredWpId = meta.find(
          (m) => m["wp:meta_key"][0] === "_thumbnail_id"
        )?.["wp:meta_value"]?.[0];

        const logoWpId = meta.find(
          (m) => m["wp:meta_key"][0] === "events_event_logo"
        )?.["wp:meta_value"]?.[0];

        const featuredFile = imageMap[featuredWpId];
        const logoFile = imageMap[logoWpId];

        const featuredImage = findImageByName(featuredFile);
        const eventLogo = findImageByName(logoFile);
        console.log({
  xmlFile: featuredFile,
  matched: featuredImage?.name,
});

        if (featuredImage?.id) {
          await updateAlt(featuredImage, pageTitle);
        }

        if (eventLogo?.id) {
  await updateAlt(eventLogo, pageTitle + " logo");
}
      } catch (err) {
        console.log("❌ Error:", item.title?.[0]);
      }
    }

    console.log("🎉 Alt text update completed!");
  });
};

updateAltFromXML();