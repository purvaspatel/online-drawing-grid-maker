// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import { Calendar, User, ArrowLeft,ArrowRight, Tag, Clock, ChevronRight, Grid } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "excerpt",
    "coverImage",
    "category",
    "tags",
  ]);

  if (!post) {
    return notFound();
  }

  return {
    title: `${post.title} | Art Grid Techniques Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(", ") || "grid drawing, art technique, drawing guide",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage }],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "category",
    "tags",
    "readingTime",
  ]);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
        </nav>
        
        {/* Back button */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to all articles
        </Link>
        
        {/* Article header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center mr-6">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        </header>
        
        {/* Article content */}
        <article className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-8 border-b">
            <span className="font-medium">Tags:</span>
            {post.tags.map((tag) => (
              <Link 
                key={tag} 
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-2xl text-center">
          <div className="inline-block mb-4">
            <Grid className="w-12 h-12 text-blue-600 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Create Your Own Art Grid Now</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Try our free online grid maker to improve your proportions and accuracy in your next art project.
          </p>
          <Link href="/#grid-maker" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Get Started for Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}