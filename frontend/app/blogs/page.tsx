import { fetchBlogs } from "@/services/blogs";
import BlogsHero from "@/components/sections/Pages/blogs/BlogsHero"

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return <BlogsHero blogs={blogs} />;
}