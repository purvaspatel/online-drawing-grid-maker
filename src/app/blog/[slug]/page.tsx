import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { markdownToHtml } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import { Calendar, User, ArrowLeft, Tag, Clock } from "lucide-react";
import Image from "next/image";

interface BlogPageProps {
    params: {
      slug: string;
    };
  }
export async function generateMetadata({ params }: { params: { slug?: string } }) {
    if (!params?.slug) {
        return notFound();
    }

    const post = await getPostBySlug(params.slug, ["title", "excerpt", "coverImage", "tags"]);

    if (!post) {
        return notFound();
    }

    return {
        title: `${post.title} | Art Grid Blog`,
        description: post.excerpt,
        keywords: Array.isArray(post.tags) ? post.tags.join(", ") : "grid drawing, art technique",
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.coverImage }],
        },
    };
}

export function generateStaticParams() {
    const posts = getAllPosts(["slug"]);

    return posts
        .filter((post) => typeof post.slug === "string" && post.slug.length > 0)
        .map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: BlogPageProps) {
    const post = getPostBySlug(params.slug, ["title", "date", "author", "content", "coverImage", "category", "tags", "readingTime", "excerpt"]);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back button */}
            <div className="mb-8">
                <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    <span>Back to articles</span>
                </Link>
            </div>

            {/* Article header */}
            <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                        <Tag className="w-4 h-4 mr-1.5" />
                        {post.category}
                    </span>
                    {Array.isArray(post.tags) && post.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            #{tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                    {post.title}
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{post.excerpt}</p>

                <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{post.readingTime} min read</span>
                    </div>
                </div>
            </header>

            {/* Featured image */}
            {post.coverImage && (
                <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        width={500}
                        height={500}
                    />
                </div>
            )}

            {/* Article content */}
            <article className="prose prose-lg max-w-none 
  dark:prose-invert 
  prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
  prose-p:my-4 prose-p:leading-relaxed
  prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
  prose-ul:list-disc prose-ol:list-decimal prose-li:my-2
  prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
  prose-strong:font-semibold prose-em:italic
  prose-pre:bg-gray-800 prose-pre:rounded-xl prose-pre:p-4
  prose-code:bg-gray-100 dark:prose-code:bg-gray-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
  prose-table:border-collapse prose-table:w-full
  prose-th:bg-gray-100 dark:prose-th:bg-gray-700 prose-th:p-3 prose-th:text-left
  prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-700 prose-td:p-3
  mb-16">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            {/* Article footer */}
            <footer className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    {/* Left Side: Create Grid Button */}
                    <div>
                        <Link href="/" className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                            Explore our free grid maker tool 
                        </Link>
                    </div>

                    
                </div>
            </footer>

        </div>
    );
}