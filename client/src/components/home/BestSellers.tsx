import { products } from "@/lib/data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function BestSellers() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-12 text-center">Featured Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link href={`/product/${product.id}`}>
                <a className="block relative aspect-square overflow-hidden rounded-xl bg-white mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Quick Add overlay could go here */}
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
                  <span className="font-semibold text-lg text-red-600">₦{product.price.toLocaleString()}</span>
                  <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full border-red-600/30 text-red-600">
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/shop">
            <Button size="lg" variant="secondary" className="px-8 rounded-full">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
