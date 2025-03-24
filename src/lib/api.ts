import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
    console.log("📄 Looking for post:", fullPath);
  
    if (!fs.existsSync(fullPath)) {
      console.error("❌ Post not found:", fullPath);
      return null;
    }
  
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    const items: { [key: string]: string } = {};
    fields.forEach((field) => {
      if (field === "content") {
        items[field] = content;
      } else if (data[field]) {
        items[field] = data[field];
      }
    });
  
    return items;
  }
  
export function getAllPosts(fields: string[] = []) {
    if (!fs.existsSync(postsDirectory)) {
      console.error("❌ Blog directory does not exist:", postsDirectory);
      return [];
    }
  
    const slugs = fs.readdirSync(postsDirectory);
    
    return slugs
      .filter((slug) => slug.endsWith(".md")) // Ensure only Markdown files
      .map((slug) => getPostBySlug(slug.replace(/\.md$/, ""), fields))
      .filter((post) => post !== null); // Remove null values
  }
  