const API = process.env.NEXT_PUBLIC_STRAPI_URL;

export const fetchBlogs = async () => {
  const res = await fetch(
    `${API}/api/posts?filters[category][slug][$eq]=blogs&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[featuredImage]=true&populate[category]=true&populate[tags]=true&populate[author][populate][image]=true`,
    {
      next: { revalidate: 300 },
    }
  );

  const data = await res.json();

  return data?.data || [];
};