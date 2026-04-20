"use client";

import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CustomSlider from "@/components/common/CustomSlider";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

type Props = {
    blogs: any[];
};

const getBlogDescription = (blog: any) => {
  if (blog.excerpt?.trim()) return blog.excerpt;

  if (blog.content) {
    const plainText = blog.content
      .replace(/<[^>]*>/g, " ") 
      .replace(/\s+/g, " ")  
      .trim();

    const words = plainText.split(" ").slice(0, 50);

    return words.join(" ") + "...";
  }

  return "Read full blog article now.";
};

const getImage = (url?: string) =>
    url?.startsWith("http")
        ? url
        : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url || ""}`;

export default function BlogsHero({ blogs }: Props) {
    if (!blogs?.length) return null;

    return (
        <Section spacing="lg" 
            sx={{
                background: 'url(/blogs/Hero-blog.webp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                {/* Heading */}
                <SectionHeader title="MetaApply" highlight="Blogs"/>

                <CustomSlider
                    data={blogs.slice(0, 5)}
                    slidesPerView={1}
                    spaceBetween={0}
                    showArrows={false}
                    showPagination={true}
                    paginationOnDesktop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                    }}
                    renderItem={(blog) => (
                        <SlideCard blog={blog} />
                    )}
                />
        </Section>
    );
}

/* ================= CARD ================= */

const SlideCard = ({
    blog,
}: {
    blog: any;
}) => (
    <Link
        href={`/blog/${blog.slug}`}
        style={{
            textDecoration: "none",
            color: "inherit",
        }}
    >
        <Grid
            container
            spacing={6.5}
            alignItems="center"
        >
            {/* IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Box
                    sx={{
                        height: {
                            xs: 280,
                            md: 320,
                        },
                        borderRadius: '24px',
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <Image
                        src={getImage(
                            blog.featuredImage?.url
                        )}
                        alt={blog.title}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Grid>

            {/* CONTENT */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                    variant="heading09"
                    component='h2'
                    sx={{
                        lineHeight: 'normal'
                    }}
                >
                    {blog.title}
                </Typography>

                <Typography
                variant="body05"
                component='p'
                mt={2}
                    sx={{
                       color: 'text.secondary',
                    }}
                >
                    {getBlogDescription(blog)}
                </Typography>

                <Box mt={7} sx={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <Box sx={{height: '40px', width: '40px', position: 'relative'}}>
                        <Image src={getImage(
                            blog.author.image?.url
                        )} alt={blog.author.name} fill style={{objectFit: 'contain'}}/>
                    </Box>
                    <Box>
                        <Typography variant="body05" component='p'>Author Name</Typography>
                        <Typography
                            variant="body06"
                            component='p'
                            sx={{
                                color: 'gray.700',
                            }}
                        >
                            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}{" "}
                            | 5 min read
                        </Typography>
                    </Box>
                </Box>
                
            </Grid>
        </Grid>
    </Link>
);