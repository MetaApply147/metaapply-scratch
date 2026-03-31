export default {
  async getCountries(ctx) {
    try {
      const countries = await strapi
        .service("api::location.location")
        .getCountries();

      ctx.body = countries;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: "Failed to fetch countries" };
    }
  },

  async getStatesByCountry(ctx) {
    try {
      const { countryId } = ctx.params;

      if (!countryId) {
        ctx.status = 400;
        ctx.body = { error: "countryId is required" };
        return;
      }

      const states = await strapi
        .service("api::location.location")
        .getStatesByCountry(Number(countryId));

      ctx.body = states;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { error: "Failed to fetch states" };
    }
  },
};