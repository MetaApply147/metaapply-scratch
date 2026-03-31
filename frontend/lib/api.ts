const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const locationAPI = {
  getCountries: async () => {
    const res = await fetch(`${STRAPI_URL}/api/locations/countries`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error("Failed to fetch countries");
    return res.json();
  },

  getStates: async (countryId: number) => {
    const res = await fetch(`${STRAPI_URL}/api/locations/states/${countryId}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error("Failed to fetch states");
    return res.json();
  },
};