import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs | Learn how to sketch | Drawing Grid Generator Tool | Scale & Proportion Guide",
  description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately. No signup required.",
  keywords: "grid maker, drawing grid, art grid tool, artist grid generator, free grid maker, proportion grid, scale drawing grid, gridding technique, art transfer method, gridded paper generator, art grid pattern, square grid for drawing, reference grid, grid drawing method, art proportion tool",
  openGraph: {
    title: "BLogs | Free Online Grid Maker for Artists | Drawing Grid Generator Tool",
    description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately.",
    type: "website",
    images: [{ url: "/gridmakerlogo.png" }],
  }
};

export default function BlogIndex() {
  const posts = getAllPosts(["title", "date", "slug", "coverImage", "excerpt", "category"]);

  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">Art Blog Section</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white border shadow-md overflow-hidden">
            <Image src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" width={500} 
  height={500}  />
            <div className="p-6">
              <span className="text-blue-600 text-sm font-medium flex items-center">
                <Tag className="w-3 h-3 mr-1" /> {post.category}
              </span>
              <h2 className="text-xl font-bold mt-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mt-3">
                <Calendar className="w-4 h-4 mr-1" /> {formatDate(post.date)}
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 font-medium mt-4">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
