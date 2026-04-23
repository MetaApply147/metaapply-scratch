"use client";

import CustomSlider from "@/components/common/CustomSlider";
import BlogCard from "../blogs/BlogCard";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

type Props = {
    blogs: any[];
};

export default function RelatedBlogs({ blogs }: Props) {
  if (!blogs?.length) return null;

  console.log("Related Blogs:", blogs);

  return (
    <Section spacing="lg" sx={{pt: '0 !important'}}>
      <SectionHeader title="Related" highlight="Blogs" />

      <CustomSlider
        data={blogs}
        slidesPerView={3}
        spaceBetween={16}
        showArrows={true}
        showPagination={true}
        renderItem={(blog: any) => <BlogCard blog={blog} />}
      />
    </Section>
  );
}