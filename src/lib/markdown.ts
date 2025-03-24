import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import rehypePrettyCode from 'rehype-pretty-code'

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm) // GitHub Flavored Markdown
    .use(remarkToc, { heading: 'contents' })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: { className: ['anchor'] }
    })
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      keepBackground: true
    })
    .use(rehypeStringify)
    .process(markdown)
    
  return result.toString()
}