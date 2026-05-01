import { getServices } from "./httpServices";

/* ---------------------------------------
   Fetch all TestPrep slugs
--------------------------------------- */
export const fetchExam = async () => {
  const response = await getServices("/test-preps", {
    "fields[0]": "slug",
  });

  if (response?.isSuccess) {
    return response.data?.data || [];
  }

  return [];
};

/* ---------------------------------------
   Fetch single TestPrep by slug
--------------------------------------- */
export const fetchExamBySlug = async (slug: string) => {
  const response = await getServices(
    `/test-preps?filters[slug][$eq]=${slug}&populate[heroSection][populate][rightImage]=true&populate[highlight][populate][icon]=true&populate[testprepSlides][populate][image]=true&populate[faculty][populate][icon]=true`
  );

  if (response?.isSuccess) {
    return response.data?.data?.[0] || null;
  }

  return null;
};