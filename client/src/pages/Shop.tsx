import { products } from "@/lib/data";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function Shop() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12">All Accessories</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link href={`/product/${product.id}`}>
                  <a className="block relative aspect-square overflow-hidden rounded-xl bg-white mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </Link>
                <div className="flex-1 flex flex-col">
                  <Link href={`/product/${product.id}`}>
                    <a className="font-heading font-medium text-lg mb-1 hover:text-primary transition-colors">
                      {product.name}
                    </a>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
