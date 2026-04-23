import { fetchBlogs } from "@/services/blogs";
import BlogsHero from "@/components/sections/Pages/blogs/BlogsHero";
import BlogsDiscover from "@/components/sections/Pages/blogs/BlogsDiscover";
import BlogsPodcast from "@/components/sections/Pages/blogs/BlogsPodcast";
import BlogsCTA from "@/components/sections/CTASection";

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
      <BlogsPodcast card={blogs}/>
      <BlogsCTA/>
    </>
  );
}