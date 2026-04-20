const API = process.env.NEXT_PUBLIC_STRAPI_URL;

export const fetchBlogs = async (page = 1, pageSize = 15) => {
  const res = await fetch(
    `${API}/api/posts?filters[category][slug][$eq]=blogs&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[featuredImage]=true&populate[category]=true&populate[tags]=true&populate[author][populate][image]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { next: { revalidate: 300 } }
  );

  const data = await res.json();

  return {
    blogs: data?.data || [],
    pagination: data?.meta?.pagination || {
      page: 1,
      pageSize: 15,
      pageCount: 1,
      total: 0,
    },
  };
};