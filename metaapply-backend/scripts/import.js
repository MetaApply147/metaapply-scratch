// const fs = require('fs');
// const csv = require('csv-parser');
// const path = require('path');

// // -------------------------
// // HELPER
// // -------------------------
// const processCSV = (filePath, handler) => {
//   return new Promise((resolve) => {
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', async function (row) {
//         this.pause();
//         await handler(row);
//         this.resume();
//       })
//       .on('end', resolve);
//   });
// };

// module.exports = async () => {
//   const strapi = global.strapi;

//   console.log('🚀 Import started');

//   // -------------------------
//   // STEP 1: IMPORT CATEGORIES
//   // -------------------------
//   await processCSV(
//     path.join(__dirname, 'category.csv'),
//     async (row) => {
//       try {
//         await strapi.entityService.create('api::category.category', {
//           data: {
//             name: row.name,
//             slug: row.slug,
//           },
//         });
//         console.log('✅ Category:', row.name);
//       } catch {
//         console.log('⚠️ Category skipped:', row.name);
//       }
//     }
//   );

//   // -------------------------
//   // STEP 2: LOAD CATEGORY MAP
//   // -------------------------
//   const categories = await strapi.entityService.findMany(
//     'api::category.category',
//     { fields: ['id', 'slug'] }
//   );

//   const categoryMap = {};
//   categories.forEach((c) => {
//     categoryMap[c.slug] = c.id;
//   });

//   console.log('🧠 Category Map:', categoryMap);

//   // -------------------------
//   // STEP 3: AUTHOR HELPER
//   // -------------------------
//   const authorMap = {};

//   const getOrCreateAuthor = async (name) => {
//     if (!name) return null;

//     const key = name.trim().toLowerCase();

//     if (authorMap[key]) return authorMap[key];

//     const existing = await strapi.entityService.findMany(
//       'api::author.author',
//       {
//         filters: { name },
//         limit: 1,
//       }
//     );

//     if (existing.length) {
//       authorMap[key] = existing[0].id;
//       return existing[0].id;
//     }

//     const created = await strapi.entityService.create(
//       'api::author.author',
//       {
//         data: { name },
//       }
//     );

//     authorMap[key] = created.id;
//     console.log('✅ Author created:', name);

//     return created.id;
//   };

//   // -------------------------
//   // STEP 4: IMPORT POSTS (UPSERT)
//   // -------------------------
//   await processCSV(
//     path.join(__dirname, 'post.csv'),
//     async (row) => {
//       try {
//         // -------------------------
//         // CATEGORY LOGIC
//         // -------------------------
//         let rawCategory = row.post_category || '';

//         if (rawCategory.includes(',')) {
//           rawCategory = rawCategory.split(',')[0];
//         }

//         if (rawCategory.includes('>')) {
//           rawCategory = rawCategory.split('>').pop();
//         }

//         const categorySlug = rawCategory
//           .trim()
//           .toLowerCase()
//           .replace(/\s+/g, '-');

//         const categoryId = categoryMap[categorySlug];

//         if (!categoryId) {
//           console.log('❌ Category NOT FOUND:', row.post_category);
//         }

//         // -------------------------
//         // AUTHOR
//         // -------------------------
//         const authorId = await getOrCreateAuthor(row.post_author);

//         // -------------------------
//         // SLUG NORMALIZATION
//         // -------------------------
//         const slug = row.post_name
//           ?.trim()
//           .toLowerCase()
//           .replace(/\s+/g, '-');

//         // -------------------------
//         // CHECK EXISTING POST
//         // -------------------------
//         const existing = await strapi.entityService.findMany(
//           'api::post.post',
//           {
//             filters: { slug },
//             limit: 1,
//           }
//         );

//         // -------------------------
//         // DATA OBJECT
//         // -------------------------
//         const data = {
//           title: row.post_title || '',
//           content: row.post_content || '',
//           excerpt: row.post_excerpt || '',
//           slug,

//           category: categoryId || null,
//           author: authorId || null,

//           publishedAt:
//             row.post_status === 'publish'
//               ? row.post_date
//               : null,
//         };

//         // -------------------------
//         // UPSERT LOGIC
//         // -------------------------
//         if (existing.length) {
//           await strapi.entityService.update(
//             'api::post.post',
//             existing[0].id,
//             { data }
//           );

//           console.log('🔄 Updated:', row.post_title);
//         } else {
//           await strapi.entityService.create('api::post.post', {
//             data,
//           });

//           console.log('✅ Created:', row.post_title);
//         }
//       } catch (err) {
//         console.error('❌ FULL ERROR:', err);
//       }
//     }
//   );

//   console.log('🎉 CATEGORY + POSTS + AUTHORS IMPORTED');
// };

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

  console.log('🚀 Content Update Started');

  // -------------------------
  // UPDATE ONLY CONTENT
  // -------------------------
  await processCSV(
    path.join(__dirname, 'post.csv'),
    async (row) => {
      try {
        // -------------------------
        // NORMALIZE SLUG
        // -------------------------
        const slug = row.post_name
          ?.trim()
          .toLowerCase()
          .replace(/\s+/g, '-');

        if (!slug) {
          console.log('⚠️ Missing slug, skipped:', row.post_title);
          return;
        }

        // -------------------------
        // FIND EXISTING POST
        // -------------------------
        const existing = await strapi.entityService.findMany(
          'api::post.post',
          {
            filters: { slug },
            limit: 1,
          }
        );

        if (!existing.length) {
          console.log('⚠️ Post not found (skipped):', row.post_title);
          return;
        }

        // -------------------------
        // UPDATE CONTENT ONLY
        // -------------------------
        await strapi.entityService.update(
          'api::post.post',
          existing[0].id,
  {
    data: {
      content: row.post_content
        ? [
            {
              type: 'paragraph',
              children: [
                {
                  text: row.post_content,
                },
              ],
            },
          ]
        : [],
    },
  }
        );

        console.log('🔄 Content updated:', row.post_title);
      } catch (err) {
        console.error('❌ ERROR:', row.post_title, err);
      }
    }
  );

  console.log('🎉 CONTENT UPDATE COMPLETED');
};