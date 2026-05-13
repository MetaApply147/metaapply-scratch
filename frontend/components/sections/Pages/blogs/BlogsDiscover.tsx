"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  Box,
  Grid,
  Pagination,
  TextField,
  Typography,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Section from "@/components/common/Section";
import BlogCard from "./BlogCard";
import SectionHeader from "@/components/common/SectionHeader";

type Props = {
  initialBlogs: any[];
  totalPages: number;
  totalCount: number;
};

const ITEMS_PER_PAGE = 14;

const TAGS = [
  "Latest Blogs",
  "Study Abroad",
  "Scholarships",
  "MBBS",
  "Universities",
  "Indian Students",
  "Academic Writing",
  "Courses",
  "Test Prep",
  "Exams",
  "Education Tips",
  "Visa",
  "Lifestyle",
  "Others",
];

export default function BlogsDiscover({ initialBlogs, totalPages }: Props) {
  const [activeTag, setActiveTag] = useState("Latest Blogs");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [pageCount, setPageCount] = useState(totalPages);
  const [loading, setLoading] = useState(false);

  const isFirstRender = useRef(true);

  const discoverRef = useRef<HTMLDivElement>(null);

  /* DEBOUNCE SEARCH — wait 400ms after user stops typing */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  /* FETCH FROM ROUTE HANDLER */
  const fetchPage = useCallback(
    async (pageNum: number, tag: string, query: string) => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: String(pageNum),
          pageSize: String(ITEMS_PER_PAGE),
          ...(tag !== "Latest Blogs" && { tag }),
          ...(query.trim() && { search: query.trim() }),
        });

        const res = await fetch(`/api/blogs?${params}`);
        const data = await res.json();

        setBlogs(data.blogs);
        setPageCount(data.pageCount);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  /* RESET page to 1 when tag or search changes */
  useEffect(() => {
    setPage(1);
  }, [activeTag, debouncedSearch]);

  /* FETCH — skip first render (SSR data already loaded) */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchPage(page, activeTag, debouncedSearch); 
  }, [page, activeTag, debouncedSearch]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    discoverRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={discoverRef} style={{ scrollMarginTop: "80px" }}>
    <Section spacing="lg">
        <Box mb={6.5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <SectionHeader title="Discover Blogs" highlight="by Categories" mb="0"/>
            {/* SEARCH */}
          <Box>
            <TextField
              size="small"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{marginRight: 0}}>
                    <SearchIcon sx={{ fontSize: 24.8, color: "gray.500" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                minWidth: 460,
                "& fieldset": {
                    borderColor: "#052F5F29",
                },
                "&:hover fieldset": {
                    borderColor: "#052F5F29",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "gray.300",
                    borderWidth: "1.5px",
                    color: "gray.500",
                },
                },
                "& .MuiInputBase-input": {
                    fontSize: "14px",
                    fontFamily: "var(--font-heading)",
                    color: 'gray.600',
                    padding: '12.5px 16px 12.5px 12px',
                    fontWeight: 500,
                     "&::placeholder": {
                        color: 'gray.500',
                        opacity: 0.9
                     }
                },
              }}
            />
          </Box>
        </Box>
      <Grid container spacing={0}>
        {/* LEFT — CATEGORIES */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{width: {lg: 340}}}>
            {TAGS.map((tag) => {
              const active = activeTag === tag;
              return (
                <Box
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2.8,
                    py: 2,
                    mb: 2,
                    border: '1px solid',
                    borderColor:  active ? "#FCF0F1" : 'gray.100',
                    borderRadius: "12px",
                    cursor: "pointer",
                    background: active ? "#FCF0F1" : "common.white",
                    color: active ? "primary.main" : "#031621",
                    position: 'relative',
                    zIndex: 0,
                    ...(active && {
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            height: "100%",
                            width: "100%",              
                            borderLeft: "2px solid #FF3185", 
                            borderTopLeftRadius: "12px",
                            borderBottomLeftRadius: "12px",
                            zIndex: -1
                        },
                    }),
                  }}
                >
                  <Typography variant="heading13" component='h6' fontWeight={500}>
                    {tag}
                  </Typography>
                  <ChevronRightIcon
                    sx={{ fontSize: 25, color: active ? "primary.main" : "#999999" }}
                  />
                </Box>
              );
            })}
          </Box>
        </Grid>

        {/* RIGHT — BLOGS */}
        <Grid size={{ xs: 12, md: 8 }}>

          {/* LOADING */}
          {loading ? (
            <Box display="flex" justifyContent="center" py={10}>
              <CircularProgress sx={{ color: "#ff2d8d" }} />
            </Box>
          ) : (
            <>
              {/* BLOG GRID */}
              <Grid container spacing={4.5}>
                {blogs.map((blog: any) => (
                  <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 6 }}>
                    <BlogCard blog={blog} />
                  </Grid>
                ))}
              </Grid>

              {/* EMPTY STATE */}
              {blogs.length === 0 && (
                <Box py={10} textAlign="center" width="100%">
                  <Typography color="text.secondary">
                    No blogs found.
                  </Typography>
                </Box>
              )}

              {/* PAGINATION */}
              {pageCount > 1 && (
                <Box mt={5} display="flex" justifyContent="center">
                  <Pagination 
                    count={pageCount}
                    page={page}
                    color="primary"
                    siblingCount={0}
                    boundaryCount={1}
                    onChange={handlePageChange}
                   sx={{

                        "& .MuiTouchRipple-root": {
                            display: "none",
                        },

                        "& .MuiPaginationItem-root": {
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "text.primary",
                            border: "1px solid #F1F0F4",
                            height: 32,
                            width: 32,
                            minWidth: 32,
                            display: 'flex',
                            justifyContent:'center',
                            alignItems: 'center',

                            "&:hover": {
                                backgroundColor: "transparent",
                                border: "1px solid #FF3185",
                            },
                        },

                        "& .MuiPaginationItem-root.Mui-selected": {
                            backgroundColor: "primary.main",
                            color: "common.white",
                        },
                    }}
                  />
                </Box>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Section>
    </div>
  );
}
