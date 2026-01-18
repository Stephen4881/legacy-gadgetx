import { useRoute } from "wouter";
import { products, categories } from "@/lib/data";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import NotFound from "./not-found";
import { useState } from "react";

export default function Category() {
  const [match, params] = useRoute("/category/:id");
  const categoryId = params?.id;
  const [displayCount, setDisplayCount] = useState(8);
  
  const category = categories.find(c => c.id === categoryId);
  if (!category && categoryId !== "iphone" && categoryId !== "audio" && categoryId !== "speakers" && categoryId !== "gaming" && categoryId !== "power") {
     return <NotFound />;
  }

  const categoryName = category?.name || categoryId?.charAt(0).toUpperCase() + categoryId?.slice(1) + " Accessories";
  
  const filteredProducts = products.filter(p => 
    p.category.toLowerCase().includes(categoryId?.toLowerCase() || "")
  );

  const visibleProducts = filteredProducts.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 border-l-4 border-red-600 pl-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-tighter">
              {categoryName}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Experience the pinnacle of {categoryName.toLowerCase()} with our premium, hand-selected collection.
            </p>
          </div>
          
          {visibleProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {visibleProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/30 transition-all duration-300">
                    <Link href={`/product/${product.id}`}>
                      <a className="block relative aspect-square overflow-hidden bg-[#1a1a1a]">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          loading="lazy"
                          width="500"
                          height="500"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </Link>
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      <Link href={`/product/${product.id}`}>
                        <a className="font-heading font-bold text-base md:text-lg mb-2 hover:text-red-500 transition-colors line-clamp-1 uppercase tracking-tight">
                          {product.name}
                        </a>
                      </Link>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="font-bold text-red-500 text-lg">
                          ₦{product.price.toLocaleString()}
                        </span>
                        <Link href={`/product/${product.id}`}>
                          <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest font-bold hover:bg-red-600 hover:text-white transition-all rounded-full px-4">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {displayCount < filteredProducts.length && (
                <div className="mt-16 flex justify-center">
                  <Button 
                    onClick={() => setDisplayCount(prev => prev + 8)}
                    variant="outline"
                    className="rounded-full px-12 py-6 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all font-bold uppercase tracking-widest"
                  >
                    Load More
                  </Button>
                </div>
              )}

              <div className="mt-24 pt-12 border-t border-white/5 text-center">
                <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed italic">
                  Legacy Gadgets offers the finest selection of {categoryName.toLowerCase()}. 
                  Our Port Harcourt showroom features authentic UK used and brand new premium tech 
                  with guaranteed quality and professional after-sales support.
                </p>
              </div>
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-gray-500">No premium items found in this collection.</p>
              <Link href="/shop">
                <Button className="mt-8 rounded-full bg-red-600 hover:bg-red-700 px-8 py-6 uppercase tracking-widest font-bold">
                  Explore All Tech
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
