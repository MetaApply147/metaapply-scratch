import { fetchBlogs } from "@/services/blogs";
import BlogsHero from "@/components/sections/Pages/blogs/BlogsHero";
import BlogsDiscover from "@/components/sections/Pages/blogs/BlogsDiscover";

export default async function BlogsPage() {
  const { blogs, pagination } = await fetchBlogs(1, 14);

  return (
    <>
      <BlogsHero blogs={blogs} />
      <BlogsDiscover
        initialBlogs={blogs}
        totalPages={pagination.pageCount}
        totalCount={pagination.total}
      />
    </>
  );
}