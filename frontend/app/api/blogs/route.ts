import { NextRequest, NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "14";
  const tag = searchParams.get("tag") || "";
  const search = searchParams.get("search") || "";

  const filters: string[] = [
    `filters[category][slug][$eq]=blogs`,
    `filters[publishedAt][$notNull]=true`,
  ];

  if (tag) {
    filters.push(`filters[tags][name][$containsi]=${encodeURIComponent(tag)}`);
  }

  if (search) {
    filters.push(`filters[$or][0][title][$containsi]=${encodeURIComponent(search)}`);
    filters.push(`filters[$or][1][content][$containsi]=${encodeURIComponent(search)}`);
  }

  const query = [
    ...filters,
    `sort=publishedAt:desc`,
    `populate[featuredImage]=true`,
    `populate[category]=true`,
    `populate[tags]=true`,
    `populate[author][populate][image]=true`,
    `pagination[page]=${page}`,
    `pagination[pageSize]=${pageSize}`,
  ].join("&");

  const res = await fetch(`${API}/api/posts?${query}`, {
    next: { revalidate: 300 },
  });

  const data = await res.json();

  return NextResponse.json({
    blogs: data?.data || [],
    pageCount: data?.meta?.pagination?.pageCount || 1,
    total: data?.meta?.pagination?.total || 0,
  });
}