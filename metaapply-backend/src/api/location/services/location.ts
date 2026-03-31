export default {
  async getCountries() {
    try {
      const knexInstance = strapi.db.connection;

      const countries = await knexInstance
        .select(
          "id",
          "country_name",
          "sortname as iso_code",
          "phonecode as phone_code"
        )
        .from("wp_countries")
        .orderBy("country_name", "asc");

      return countries;
    } catch (err) {
      strapi.log.error("getCountries error:", err);
      throw err;
    }
  },

  async getStatesByCountry(countryId: number) {
    try {
      const knexInstance = strapi.db.connection;

      const states = await knexInstance
        .select("id", "state_name")
        .from("wp_states")
        .where("country_id", countryId)
        .orderBy("state_name", "asc");

      return states;
    } catch (err) {
      strapi.log.error("getStatesByCountry error:", err);
      throw err;
    }
  },
};