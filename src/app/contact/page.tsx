// app/contact/page.tsx
import Image from "next/image"
import { Metadata } from "next";
import { Mail, Github, Instagram } from "lucide-react"
export const metadata: Metadata = {
  title: "Contact | Drawing Grid Generator Tool | Scale & Proportion Guide",
  description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately. No signup required.",
  keywords: "grid maker, drawing grid, art grid tool, artist grid generator, free grid maker, proportion grid, scale drawing grid, gridding technique, art transfer method, gridded paper generator, art grid pattern, square grid for drawing, reference grid, grid drawing method, art proportion tool",
  openGraph: {
    title: "Contact | Drawing Grid Generator Tool",
    description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately.",
    type: "website",
    images: [{ url: "/gridmakerlogo.png" }],
  }
};
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900  mb-4">
          Hey, I am glad that you made it here!!
        </h1>
      </div>

      <div className="flex flex-col items-center mb-16">
        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-gray-200 ">
          <Image
            src="/purvaprofilepic.jpg" // Your photo
            alt="Purva Patel"
            fill
            className="object-cover"
            
          />
        </div>
        
        <h2 className="text-xl font-medium text-gray-900 mb-3">Purva Patel</h2>
        
        
        <div className="flex gap-4">
          <a 
            href="mailto:purvaspatel1241@gmail.com" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200  transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/purvaspatel" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200  transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com/purvvvva" 
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200  transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="prose  text-center mx-auto">
        <p>
          I made this grid tool because I personally use this technique to create my own artworks,
          sketches to get perfect proportions. If you find this tool helpful, that's awesome! If you have ideas to make it better, even better.
        </p>
        <p className="mt-4">
          Not much for formal emails? Me neither. Just say "hey" and we'll go from there.
        </p>
        <p className="mt-6 text-sm text-gray-500 ">
          PS: If you send me art you made using these tools, I'll add it on this site, probably print it 
          and put it on my fridge as well.
        </p>
      </div>
    </div>
  )
}