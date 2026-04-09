module.exports = async () => {
  const strapi = global.strapi;

  console.log('🧹 Cleaning database...');

  const deleteAll = async (uid) => {
    const entries = await strapi.entityService.findMany(uid, {
      fields: ['id'],
      limit: 10000,
    });

    for (const entry of entries) {
      await strapi.entityService.delete(uid, entry.id);
    }
  };

  await deleteAll('api::post.post');
  console.log('✅ Posts deleted');

  await deleteAll('api::tag.tag');
  console.log('✅ Tags deleted');

  await deleteAll('api::category.category');
  console.log('✅ Categories deleted');

  console.log('🎉 Database cleaned');
};