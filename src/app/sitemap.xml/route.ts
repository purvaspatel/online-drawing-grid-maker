import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/api"; // Adjust path if needed

export async function GET() {
  const siteUrl = "https://gridmaker.vercel.app";

  // Static Pages
  const staticPaths = ["/", "/artworks", "/blog", "/contact"];

  // Fetch dynamic blog posts
  const blogPosts = getAllPosts(["slug"]); // Fetch blog slugs
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  [...staticPaths, ...blogPaths].forEach((path) => {
    sitemap += `<url><loc>${siteUrl}${path}</loc></url>`;
  });

  sitemap += `</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
