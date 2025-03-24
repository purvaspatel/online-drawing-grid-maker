// src/app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { Paintbrush, Calendar, ArrowRight, Tag, Grid } from "lucide-react";

export const metadata = {
  title: "Art Grid Techniques Blog | Tips & Tutorials for Artists",
  description: "Discover expert tips, tutorials, and techniques for using grid drawing methods to improve your artwork. Learn from professional artists about proportion, scaling, and transfer methods.",
  keywords: "grid drawing blog, artist techniques, drawing grid tutorials, art grid methods, proportion drawing tips",
};

export default function BlogIndex() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "category",
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <span className="inline-block mb-4">
          <Paintbrush className="w-12 h-12 text-blue-600 mx-auto" />
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Art Grid Techniques Blog
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Expert tips, tutorials, and inspiration for artists using grid techniques to perfect their artwork
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              
              <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
              
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 font-medium group">
                Read Article
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}