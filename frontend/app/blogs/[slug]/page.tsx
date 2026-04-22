import {
  fetchBlogBySlug,
  fetchBlogs,
} from "@/services/blogs";

import { notFound } from "next/navigation";
import BlogDetailsContent from "@/components/sections/Pages/bloginner/BlogDetailsContainer";
import BlogSidebarForm from "@/components/sections/Pages/bloginner/BlogSidebarForm";
import RelatedBlogs from "@/components/sections/Pages/bloginner/RelatedBlogs";
import FAQSection from "@/components/sections/FAQSection";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogInnerPage({
  params,
}: Props) {
  const { blogs } = await fetchBlogs(1, 10);

  const { slug } = await params;

  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
  }


  return (
    <>
      {/* <BlogDetailsHero blog={blog} /> */}

      <BlogDetailsContent
        blog={blog}
        sidebar={<BlogSidebarForm />}
      />
      <FAQSection page="metafly"/>
      <RelatedBlogs blogs={blogs} />
    </>
  );
}