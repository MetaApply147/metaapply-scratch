const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// -------------------------
// HELPER
// -------------------------
const processCSV = (filePath, handler) => {
  return new Promise((resolve) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', async function (row) {
        this.pause();
        await handler(row);
        this.resume();
      })
      .on('end', resolve);
  });
};

module.exports = async () => {
  const strapi = global.strapi;

  console.log('🚀 Tag Update Started');

  // -------------------------
  // TAG HELPER
  // -------------------------
  const tagMap = {};

  const getOrCreateTag = async (name) => {
    if (!name) return null;

    const key = name.trim().toLowerCase();

    if (tagMap[key]) return tagMap[key];

    const existing = await strapi.entityService.findMany(
      'api::tag.tag',
      {
        filters: { name },
        limit: 1,
      }
    );

    if (existing.length) {
      tagMap[key] = existing[0].id;
      return existing[0].id;
    }

    const created = await strapi.entityService.create(
      'api::tag.tag',
      {
        data: {
          name,
          slug: key.replace(/\s+/g, '-'),
        },
      }
    );

    tagMap[key] = created.id;

    console.log('✅ Tag created:', name);

    return created.id;
  };

  // -------------------------
  // PROCESS POSTS
  // -------------------------
  await processCSV(
    path.join(__dirname, 'post.csv'),
    async (row) => {
      try {
        // -------------------------
        // SLUG
        // -------------------------
        const slug = row.post_name
          ?.trim()
          .toLowerCase()
          .replace(/\s+/g, '-');

        if (!slug) return;

        // -------------------------
        // FIND POST
        // -------------------------
        const existing = await strapi.entityService.findMany(
          'api::post.post',
          {
            filters: { slug },
            limit: 1,
          }
        );

        if (!existing.length) {
          console.log('⚠️ Post not found:', row.post_title);
          return;
        }

        // -------------------------
        // TAGS PARSE
        // -------------------------
        const tagNames = row.post_tag
          ? [...new Set(
              row.post_tag
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean)
            )]
          : [];

        const tagIds = [];

        for (const tagName of tagNames) {
          const tagId = await getOrCreateTag(tagName);
          if (tagId) tagIds.push(tagId);
        }

        // -------------------------
        // UPDATE TAGS ONLY
        // -------------------------
        await strapi.entityService.update(
          'api::post.post',
          existing[0].id,
          {
            data: {
              tags: tagIds,
            },
          }
        );

        console.log('🔄 Tags updated:', row.post_title);
      } catch (err) {
        console.error('❌ ERROR:', row.post_title, err);
      }
    }
  );

  console.log('🎉 TAG UPDATE COMPLETED');
};