const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

module.exports = async () => {
  const strapi = global.strapi;

  console.log('🚀 Import started');

  // -------------------------
  // IMPORT CATEGORIES
  // -------------------------
  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, 'category.csv'))
      .pipe(csv())
      .on('data', async (row) => {
        await strapi.entityService.create('api::category.category', {
          data: {
            name: row.name,
            slug: row.slug,
          },
        });
      })
      .on('end', resolve);
  });

  console.log('✅ Categories imported');

  // -------------------------
  // IMPORT TAGS
  // -------------------------
  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, 'tag.csv'))
      .pipe(csv())
      .on('data', async (row) => {
        await strapi.entityService.create('api::tag.tag', {
          data: {
            name: row.name,
            slug: row.slug,
          },
        });
      })
      .on('end', resolve);
  });

  console.log('✅ Tags imported');

  // -------------------------
  // LOAD CATEGORY MAP
  // -------------------------
  const categories = await strapi.entityService.findMany(
    'api::category.category',
    { fields: ['id', 'slug'] }
  );

  const categoryMap = {};
  categories.forEach((c) => {
    categoryMap[c.slug] = c.id;
  });

  // -------------------------
  // LOAD TAG MAP
  // -------------------------
  const tags = await strapi.entityService.findMany(
    'api::tag.tag',
    { fields: ['id', 'name'] }
  );

  const tagMap = {};
  tags.forEach((t) => {
    tagMap[t.name.toLowerCase()] = t.id;
  });

  // -------------------------
  // IMPORT POSTS
  // -------------------------
  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, 'post.csv'))
      .pipe(csv())
      .on('data', async (row) => {
        try {
          const categoryId = categoryMap[row.post_category];

          const tagNames = row.post_tag?.split(',') || [];
          const tagIds = tagNames
            .map((tag) => tagMap[tag.trim().toLowerCase()])
            .filter(Boolean);

          await strapi.entityService.create('api::post.post', {
            data: {
              title: row.post_title,
              content: row.post_content,
              excerpt: row.post_excerpt,
              slug: row.post_name,

              category: categoryId,
              tags: tagIds,

              publishedAt:
                row.post_status === 'publish'
                  ? row.post_date
                  : null,
            },
          });

          console.log('✅', row.post_title);
        } catch (err) {
          console.error('❌ Error:', row.post_title);
        }
      })
      .on('end', resolve);
  });

  console.log('🎉 ALL DATA IMPORTED');
};