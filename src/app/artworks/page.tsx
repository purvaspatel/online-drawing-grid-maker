import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Artworks submitted by community | Drawing Grid Generator Tool | Scale & Proportion Guide",
    description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately. No signup required.",
    keywords: "grid maker, drawing grid, art grid tool, artist grid generator, free grid maker, proportion grid, scale drawing grid, gridding technique, art transfer method, gridded paper generator, art grid pattern, square grid for drawing, reference grid, grid drawing method, art proportion tool",
    openGraph: {
      title: "Artworks submitted by community  | Drawing Grid Generator Tool",
      description: "Create professional drawing grids for art projects with our free online grid maker. Perfect for artists, students & teachers. Customize grid lines, scale artwork, improve proportions & transfer images accurately.",
      type: "website",
      images: [{ url: "/gridmakerlogo.png" }],
    }
  };
interface Artwork {
    id: string;
    imageUrl: string;
    title?: string;
    submittedBy: string;
    submittedAt: string;
}

const mockArtworks: Artwork[] = [
    {
        id: "1",
        imageUrl: "https://purvaspatel24.vercel.app/static/media/ganesha.b17d94fa418cc41d79a7.jpeg",
        submittedBy: "Purva Patel",
        submittedAt: "2025-03-15",
    },
    {
        id: "2",
        imageUrl: "https://purvaspatel24.vercel.app/static/media/2.44d5c940c2f1678d1b6e.jpg",
        submittedBy: "Purva Patel",
        submittedAt: "2025-04-02",
    },
    {
        id: "3",
        imageUrl: "https://purvaspatel24.vercel.app/static/media/spiderman.3e1acd5908185b308eae.jpeg",
        submittedBy: "Purva Patel",
        submittedAt: "2025-04-02",
    },
    {
        id: "4",
        imageUrl: "https://purvaspatel24.vercel.app/static/media/maam.d9e90e1600b115d44c4a.jpeg",
        submittedBy: "Purva Patel",
        submittedAt: "2025-04-02",
    },


    // Add more artworks as needed
];

export default function ArtworksGallery() {
    return (
        <section id="my-works-section" className="py-16 ">
            <h2 className="text-4xl font-bold text-center mb-12">Community Artworks</h2>

            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4 lg:px-20">
                {mockArtworks.map((artwork) => (
                    <div key={artwork.id} className="mb-4 break-inside-avoid relative">
                        {/* Badge for Submitted By */}
                        <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md">
                            Submitted by @{artwork.submittedBy}
                        </span>

                        <Image
                            src={artwork.imageUrl}
                            alt={artwork.title || `Artwork by ${artwork.submittedBy}`}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <section className="mt-16 max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100   p-8 rounded-[2] text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Created artworks using Grid Maker!</h2>
                    <Link href="mailto:purvaspatel1241@gmail.com" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors">
                        Email us your artworks we will share it here!!
                    </Link>
                </div>

            </section>

        </section>
    );
}
