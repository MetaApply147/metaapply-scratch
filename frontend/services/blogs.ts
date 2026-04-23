// services/blogs.ts

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

/* ---------------------------------------
   Main Blogs Listing
--------------------------------------- */
export const fetchBlogs = async (
  page = 1,
  pageSize = 15
) => {
  const res = await fetch(
    `${API}/api/posts?filters[category][slug][$eq]=blogs&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[featuredImage]=true&populate[category]=true&populate[tags]=true&populate[author][populate][image]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

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

/* ---------------------------------------
   Single Blog by Slug
--------------------------------------- */
export const fetchBlogBySlug = async (
  slug: string
) => {
  const res = await fetch(
    `${API}/api/posts?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&filters[publishedAt][$notNull]=true&populate[featuredImage]=true&populate[category]=true&populate[tags]=true&populate[faqs]=true&populate[author][populate][image]=true`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const data = await res.json();

  return data?.data?.[0] || null;
};

/* ---------------------------------------
   Related Blogs
--------------------------------------- */
export const fetchRelatedBlogs = async (
  slug: string,
  limit = 3
) => {
  const res = await fetch(
    `${API}/api/posts?filters[category][slug][$eq]=blogs&filters[slug][$ne]=${encodeURIComponent(
      slug
    )}&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[featuredImage]=true&populate[category]=true&populate[author][populate][image]=true&pagination[page]=1&pagination[pageSize]=${limit}`,
    {
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch related blogs");
  }

  const data = await res.json();

  return data?.data || [];
};

/* ---------------------------------------
   Search Blogs
--------------------------------------- */
export const searchBlogs = async (
  query: string,
  page = 1,
  pageSize = 15
) => {
  const res = await fetch(
    `${API}/api/posts?filters[category][slug][$eq]=blogs&filters[title][$containsi]=${encodeURIComponent(
      query
    )}&filters[publishedAt][$notNull]=true&sort=publishedAt:desc&populate[featuredImage]=true&populate[category]=true&populate[author][populate][image]=true&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to search blogs");
  }

  const data = await res.json();

  return {
    blogs: data?.data || [],
    pagination: data?.meta?.pagination || {},
  };
};