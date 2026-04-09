const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

// ------------------------- // HELPER // ------------------------- 
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

const convertHtmlToMarkdownImages = (content) => {
  if (!content) return '';

  return content.replace(
    /<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/gi,
    (match, src, alt) => {
      return `![${alt || 'image'}](${src})`;
    }
  );
};

module.exports = async () => {
    const strapi = global.strapi; 
    
    console.log('🚀 Import started');
    
    // ------------------------- // STEP 1: IMPORT CATEGORIES // ------------------------- 
    await processCSV(
        path.join(__dirname, 'category.csv'), 
        async (row) => { 
            try { 
                await strapi.entityService.create('api::category.category', { 
                    data: { 
                        name: row.name, 
                        slug: row.slug, 
                    }, 
                }); 
                console.log('✅ Category:', row.name); 
            } catch { 
                console.log('⚠️ Category skipped:', row.name); 
            } 
        }
    );

    // ------------------------- // STEP 2: LOAD CATEGORY MAP (IMPORTANT) // ------------------------- 
    const categories = await strapi.entityService.findMany(
        'api::category.category', 
        { fields: ['id', 'slug'] }
    ); 
    
    const categoryMap = {}; 
    categories.forEach((c) => { 
        categoryMap[c.slug] = c.id; 
    }); 
    console.log('🧠 Category Map:', categoryMap); 
    
    // ------------------------- // STEP 3: IMPORT POSTS (ONLY CATEGORY) // ------------------------- 
    await processCSV( 
        path.join(__dirname, 'post.csv'), 
        async (row) => { 
            try { 
                let rawCategory = row.post_category; 

                // Step 1: take first category if multiple
                if (rawCategory.includes(',')) { 
                    rawCategory = rawCategory.split(',')[0];
                } 

                // Step 2: handle hierarchy (Event>Past Event → Past Event) 
                if (rawCategory.includes('>')) { 
                    rawCategory = rawCategory.split('>').pop(); 
                } 
                
                // Step 3: normalize to slug 
                const categorySlug = rawCategory 
                ?.trim() 
                .toLowerCase() 
                .replace(/\s+/g, '-'); 
                const categoryId = categoryMap[categorySlug]; 

                // DEBUG 
                if (!categoryId) { 
                    console.log('❌ Category NOT FOUND:', row.post_category); 
                } 
                
                // 🔍 Check if post already exists by slug 
                const existing = await strapi.entityService.findMany( 
                    'api::post.post', 
                    { 
                        filters: { slug: row.post_name }, 
                        limit: 1, 
                    } 
                ); 
                
                const data = { 
                    title: row.post_title || '', 
                    content: row.post_content || '', 
                    excerpt: row.post_excerpt || '', 
                    slug: row.post_name, 
                    
                    category: categoryId || null, 
                    
                    publishedAt: 
                    row.post_status === 'publish' 
                    ? row.post_date 
                    : null, 
                }; 
                
                if (existing.length) { 
                    const formattedContent = convertHtmlToMarkdownImages(
  row.post_content
);

await strapi.entityService.update(
  'api::post.post',
  existing[0].id,
  {
    data: {
      content: formattedContent || '',
    },
  }
);
                    
                    console.log('🔄 Updated:', row.post_title); 
                } else {
                    await strapi.entityService.create('api::post.post', { 
                        data, 
                    }
                ); 
                
                console.log('✅ Created:', row.post_title); 
            } 
            console.log('✅ Post:', row.post_title); 
        } catch (err) { 
            console.error('❌ FULL ERROR:', err); 
        } 
    } 
); 

console.log('🎉 CATEGORY + POSTS IMPORTED'); };
