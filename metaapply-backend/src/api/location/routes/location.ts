export default {
  routes: [
    {
      method: "GET",
      path: "/locations/countries",
      handler: "location.getCountries",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/locations/states/:countryId",
      handler: "location.getStatesByCountry",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};