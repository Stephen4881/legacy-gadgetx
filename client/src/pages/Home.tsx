import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { BestSellers } from "@/components/home/BestSellers";
import { BrandValues } from "@/components/home/BrandValues";
import { AccessoryFinder } from "@/components/home/AccessoryFinder";
import { PersonalizedRecommendations } from "@/components/home/PersonalizedRecommendations";
import { galleryImages } from "@/lib/data";
import { IRepairs } from "@/components/home/IRepairs";

function Gallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">In-Store Collection</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="break-inside-avoid rounded-xl overflow-hidden">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <BestSellers />
        <CategoryGrid />
        <IRepairs />
        <TrustSection />
        <AccessoryFinder />
        <PersonalizedRecommendations />
        <BrandValues />
      </main>
      <Footer />
    </div>
  );
}
