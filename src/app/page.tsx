import GridMaker from "@/components/grid-maker/grid-maker";
import { Metadata } from "next";
import { 
  Maximize, 
  Palette, 
  Download, 
  ArrowRight, 
  Image, 
  Zap, 
  Paintbrush, 
  Ruler, 
  Layers, 
  Users, 
  Star, 
  Clock
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Grid Maker for Artists | Drawing Grid Generator Tool | Scale & Proportion Guide",
  description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately. No signup required.",
  keywords: "grid maker, drawing grid, art grid tool, artist grid generator, free grid maker, proportion grid, scale drawing grid, gridding technique, art transfer method, gridded paper generator, art grid pattern, square grid for drawing, reference grid, grid drawing method, art proportion tool",
  openGraph: {
    title: "Free Online Grid Maker for Artists | Drawing Grid Generator Tool",
    description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately.",
    type: "website",
    images: [{ url: "/grid-maker-preview.jpg" }],
  }
};

export default function Home() {
  return (
    <main className="min-h-screen py-8 bg-white">
      <div className="container mx-auto px-4">
        <section className="text-center mb-5">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Ultimate Free Online Grid Maker for Artists
          </h1>
          
        </section>
        
        <div id="grid-maker" className="scroll-mt-8">
          <GridMaker />
        </div>
        <section className="text-center mb-12">
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Transform your artistic process with professional drawing grids that perfect proportions, 
            scale artwork, and help transfer complex images with pinpoint accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              No Registration
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Download className="w-4 h-4 mr-2 text-green-500" />
              Instant Downloads
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Palette className="w-4 h-4 mr-2 text-purple-500" />
              Fully Customizable
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              40,000+ Artists Use It
            </span>
          </div>
          <Link href="#grid-maker" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            Create Your Grid Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
        
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <Paintbrush className="w-8 h-8 inline-block mr-3 text-rose-500" />
            How Our Grid Maker Elevates Your Artistic Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Ruler className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Perfect Proportions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Divide your canvas into precise sections to capture accurate proportions in portraits, 
                landscapes, and complex compositions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Maximize className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Scale with Precision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easily transfer images from one size to another while maintaining perfect proportions, 
                ideal for murals or miniatures.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Palette className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customizable Grids</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adjust grid size, line thickness, colors, and opacity to match your artistic style 
                and medium, from pencil to digital.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Download className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Export Options</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Download your custom grid as PNG, JPG, or PDF - ready to print or use digitally 
                in any software or with traditional media.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Image className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reference Image Overlay</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload reference photos and overlay your grid directly on them for 
                the most accurate transfer to your canvas.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Layers className="w-10 h-10 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Multiple Grid Types</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from square, rectangular, triangular, or isometric grids to match your 
                specific artistic technique and subject matter.
              </p>
            </div>
          </div>
          
          <div className="prose max-w-none dark:prose-invert mb-16">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center">
              <Star className="w-8 h-8 mr-3 text-yellow-500" />
              Why Artists Throughout History Have Used Grid Drawing Techniques
            </h2>
            
            <p className="text-lg">
              The grid method has been a fundamental technique used by master artists for centuries, from Renaissance 
              painters like Albrecht Dürer to modern hyperrealists. This time-tested approach breaks complex images 
              into manageable sections, allowing artists to accurately capture proportions and spatial relationships.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-2">Did You Know?</h3>
              <p>
                Leonardo da Vinci used grid systems to create his anatomically accurate drawings. 
                Today, this same technique helps artists of all skill levels tackle challenging subjects with confidence.
              </p>
            </div>
            
            <p className="text-lg">
              Our free online grid maker tool transforms this traditional technique for the digital age, helping artists, 
              students, teachers, and hobbyists create custom grids without specialized software or technical knowledge. 
              Whether you're working on portraits, landscapes, still life compositions, or technical illustrations, 
              our grid maker streamlines your creative process.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-bold flex items-center mt-12">
              <Clock className="w-8 h-8 mr-3 text-green-500" />
              Perfect Your Artistic Skills in Minutes, Not Years
            </h2>
            
            <p className="text-lg">
              The grid method is more than just a drawing aid—it's a powerful learning tool that trains your eye to 
              recognize proportions and spatial relationships. Many art teachers recommend grid drawing as a fundamental 
              skill that improves overall artistic ability, even when not using grids in final pieces.
            </p>
            
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Beginners</strong>: Master proportions and gain confidence tackling complex subjects</li>
              <li><strong>Students</strong>: Practice accuracy and develop your observational skills</li>
              <li><strong>Teachers</strong>: Create custom worksheets and demonstrations for art classes</li>
              <li><strong>Professional Artists</strong>: Save time on preliminary layout work for commissioned pieces</li>
              <li><strong>Illustrators</strong>: Transfer and scale concepts precisely for client work</li>
              <li><strong>Muralists</strong>: Scale designs from small sketches to wall-sized masterpieces</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8">Popular Uses for Our Grid Maker Tool:</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <span className="font-medium">Portrait Drawing</span> - Capture facial proportions accurately
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <span className="font-medium">Landscape Art</span> - Maintain perspective and scale
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <span className="font-medium">Wildlife Illustration</span> - Detail complex animal features
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <span className="font-medium">Comic Book Creation</span> - Maintain character consistency
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <span className="font-medium">Architectural Drawing</span> - Scale buildings and structures
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <span className="font-medium">Pattern Design</span> - Create repeating elements with precision
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold flex items-center mt-12">
              <Zap className="w-8 h-8 mr-3 text-purple-500" />
              Get Started With Our Free Grid Maker In Seconds
            </h2>
            
            <p className="text-lg">
              No registration, download, or technical skills required. Simply adjust the settings in our intuitive 
              interface to create your perfect grid, then download or print for immediate use in your next art project. 
              Join over 1000+ artists who trust our grid maker for their creative work.
            </p>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Keywords and Search Terms:</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                grid drawing tool, artist grid generator, drawing grid maker, free grid generator for artists, 
                proportional grid maker, art scaling grid, square grid for drawing, grid method for art, 
                grid transfer technique, printable art grid, custom grid for drawing, image grid transfer tool, 
                perspective grid maker, drawing proportion guide, art reference grid, gridded paper generator, 
                grid drawing method, online grid maker, digital grid for art, grid drawing template
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-[2] text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Artistic Process?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Create your custom grid now and join thousands of artists who've elevated their work 
              with our professional grid making tool - 100% free, no signup required.
            </p>
            <Link href="#grid-maker" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors">
              Create Your Grid Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}