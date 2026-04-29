import { getServices } from "./httpServices";

/* ---------------------------------------
   Fetch all destination slugs
--------------------------------------- */
export const fetchDestinations = async () => {
  const response = await getServices("/destinations", {
    "fields[0]": "slug",
  });

  if (response?.isSuccess) {
    return response.data?.data || [];
  }

  return [];
};

/* ---------------------------------------
   Fetch single destination by slug
--------------------------------------- */
export const fetchDestinationBySlug = async (slug: string) => {
  const response = await getServices(
    "/destinations?populate[hero][populate]=*&populate[benefits]=*&populate[topUniversities][populate]=*"
  );

  if (response?.isSuccess) {
    const destinations = response.data?.data || [];

    console.log("destinations:", destinations);
    console.log("slug:", slug);

    return destinations.find((item: any) => item.slug === slug) || null;
  }

  return null;
};