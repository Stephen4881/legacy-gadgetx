import { categories } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Curated Categories</h2>
            <p className="text-muted-foreground max-w-md">Browse our selection of premium accessories by category.</p>
          </div>
          <Link href="/shop">
            <a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category, index) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <a className="group block relative aspect-[4/5] md:aspect-square overflow-hidden rounded-xl bg-muted">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        
        {/* Secondary Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           {categories.slice(3, 5).map((category, index) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <a className="group block relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">{category.name}</h3>
                  <div className="px-6 py-2 border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                    Explore
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
