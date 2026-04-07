export default {
  async bootstrap({ strapi }) {
    const importer = require('../../scripts/import');
    await importer();
  },
};