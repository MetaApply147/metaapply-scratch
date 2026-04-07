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
        try {
          // prevent duplicate categories
          const existing = await strapi.db
            .query('api::category.category')
            .findOne({ where: { slug: row.slug } });

          if (existing) return;

          await strapi.entityService.create('api::category.category', {
            data: {
              name: row.name,
              slug: row.slug,
            },
          });
        } catch (err) {
          console.log('Category error:', row.name);
        }
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
        try {
          // prevent duplicate tags
          const existing = await strapi.db
            .query('api::tag.tag')
            .findOne({ where: { slug: row.slug } });

          if (existing) return;

          await strapi.entityService.create('api::tag.tag', {
            data: {
              name: row.name,
              slug: row.slug,
            },
          });
        } catch (err) {
          console.log('Tag error:', row.name);
        }
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
  // IMPORT POSTS (SAFE WAY)
  // -------------------------
  const results = [];

  await new Promise((resolve) => {
    fs.createReadStream(path.join(__dirname, 'post.csv'))
      .pipe(csv())
      .on('data', (row) => results.push(row))
      .on('end', resolve);
  });

  for (const row of results) {
    try {
      // ✅ UNIQUE SLUG LOGIC
      let slug = row.post_name;
      let counter = 1;

      while (true) {
        const existing = await strapi.db
          .query('api::post.post')
          .findOne({ where: { slug } });

        if (!existing) break;

        slug = `${row.post_name}-${counter}`;
        counter++;
      }

      // CATEGORY
      const categoryId = categoryMap[row.post_category];

      // TAGS
      const tagNames = row.post_tag?.split(',') || [];
      const tagIds = tagNames
        .map((tag) => tagMap[tag.trim().toLowerCase()])
        .filter(Boolean);

      // CREATE POST
      await strapi.entityService.create('api::post.post', {
        data: {
          title: row.post_title,
          content: row.post_content,
          excerpt: row.post_excerpt,
          slug: slug,

          category: categoryId,
          tags: tagIds,

          publishedAt:
            row.post_status === 'publish'
              ? row.post_date
              : null,
        },
      });

      console.log('✅', slug);
    } catch (err) {
      console.error('❌ Error:', row.post_title);
    }
  }

  console.log('🎉 ALL DATA IMPORTED');
};