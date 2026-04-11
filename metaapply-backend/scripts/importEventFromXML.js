const fs = require("fs");
const xml2js = require("xml2js");
const axios = require("axios");
const path = require("path");

const BASE_URL = "https://strapi-backend.azurewebsites.net";
const API_URL = `${BASE_URL}/api/events`;

const TOKEN = "92826d26f093e602ba5c7405325e27bd013cef3fcf598e0b126eb5bde11313b051d31e19ab0ce9b0a57933dc562e9609cf36feb31e404d3e51234592035cf96a5330793c0928398b5ed43a5659ce8966c546bc9e1221c557caa3107e5a28f29df2ef11ef13f4adf16ff339bd7620ed3e27fba7d96b3a395cdc3d7f86cf921e50";

// -------------------------
// SAFE META GETTER
// -------------------------
const getMeta = (metaArray, key) => {
  if (!metaArray) return null;

  const found = metaArray.find(
    (m) => m["wp:meta_key"]?.[0] === key
  );

  return found ? found["wp:meta_value"]?.[0] : null;
};

// -------------------------
// DATE FORMAT
// -------------------------
const formatDate = (dateStr) => {
  if (!dateStr) return null;

  // 20240707 → 2024-07-07
  if (/^\d{8}$/.test(dateStr)) {
    return `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
  }

  const parsed = new Date(dateStr);
  return isNaN(parsed) ? null : parsed.toISOString().split("T")[0];
};

// -------------------------
// CATEGORY ENUM
// -------------------------
const getCategory = (categories = []) => {
  const list = categories
    .map((c) => c?._?.toLowerCase())
    .filter(Boolean);

  if (list.some((c) => c.includes("past"))) return "past";
  if (list.some((c) => c.includes("upcoming"))) return "upcoming";

  return null;
};

// -------------------------
// FIND EXISTING BY SLUG
// -------------------------
const findExistingEvent = async (slug) => {
  try {
    const res = await axios.get(
      `${API_URL}?filters[slug][$eq]=${slug}`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    return res.data.data.length ? res.data.data[0] : null;
  } catch {
    return null;
  }
};

// -------------------------
// MAIN IMPORT
// -------------------------
const importXML = async () => {
  const xmlPath = path.join(__dirname, "../events.xml");

  if (!fs.existsSync(xmlPath)) {
    console.error("❌ events.xml not found at:", xmlPath);
    return;
  }

  const xml = fs.readFileSync(xmlPath, "utf-8");

  xml2js.parseString(xml, async (err, result) => {
    if (err) throw err;

    const items = result.rss.channel[0].item;

    console.log(`📊 Total items: ${items.length}`);

    for (const item of items) {
      try {
        // ❌ SKIP ATTACHMENTS (VERY IMPORTANT)
        if (item["wp:post_type"]?.[0] === "attachment") continue;

        const meta = item["wp:postmeta"] || [];

        const slug = item["wp:post_name"]?.[0];

        if (!slug) {
          console.log("⚠️ Skipping item without slug");
          continue;
        }

        const pageTitle = item.title?.[0] || null;
        const description = item["content:encoded"]?.[0] || null;

        const eventTitle = getMeta(meta, "events_event_title");
        const eventDate = formatDate(getMeta(meta, "events_event_date"));
        const eventDuration = getMeta(meta, "events_duration");
        const eventLocation = getMeta(meta, "events_event_location");
        const eventRegistrationDetails = getMeta(
          meta,
          "events_event_registration_details"
        );
       const email = getMeta(meta, "events_email") || null;
        const rawPhone = getMeta(meta, "events_phone");

        const phone =
        rawPhone && !isNaN(rawPhone)
            ? Number(rawPhone)
            : null;
        const webinarAgenda = getMeta(meta, "events_webinar_agenda");
       const registerToday = getMeta(meta, "events_register_today") || null;

        const category = getCategory(item.category);

        const payload = {
          data: {
            slug,
            pageTitle,
            description,
            eventTitle,
            eventDate,
            eventDuration,
            eventLocation,
            eventRegistrationDetails,
            email,
           phone: phone,
            webinarAgenda,
            registerToday,
            category,
          },
        };

        const existing = await findExistingEvent(slug);

        if (existing) {
          await axios.put(`${API_URL}/${existing.id}`, payload, {
            headers: { Authorization: `Bearer ${TOKEN}` },
          });

          console.log("🔄 Updated:", slug);
        } else {
          await axios.post(API_URL, payload, {
            headers: { Authorization: `Bearer ${TOKEN}` },
          });

          console.log("✅ Created:", slug);
        }
      } catch (err) {
        console.error("❌ Error:", item.title?.[0]);
        console.error(err.response?.data || err.message);
      }
    }

    console.log("🎉 Import completed!");
  });
};

importXML();