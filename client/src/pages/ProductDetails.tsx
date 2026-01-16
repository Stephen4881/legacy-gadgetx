import { useRoute } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Check, Shield, Truck } from "lucide-react";
import { useEffect } from "react";
import NotFound from "./not-found";

export default function ProductDetails() {
  const [match, params] = useRoute("/product/:id");
  const product = products.find(p => p.id === params?.id);

  useEffect(() => {
    if (product) {
      // Simulate interest tracking
      localStorage.setItem("last_category", product.category.split(' ')[0]);
    }
  }, [product]);

  if (!product) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
                 <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
              </div>
              <div className="grid grid-cols-4 gap-4">
                 {/* Thumbnails (placeholder for now) */}
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className={`aspect-square rounded-lg bg-muted overflow-hidden cursor-pointer ${i === 1 ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'}`}>
                      <img src={product.image} className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2 text-muted-foreground font-medium">{product.category}</div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">{product.name}</h1>
              <div className="text-2xl font-semibold mb-8">${product.price.toFixed(2)}</div>

              <div className="prose prose-neutral dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <h3 className="font-heading font-semibold text-lg">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <Button size="lg" className="w-full rounded-full h-14 text-lg">
                  Add to Cart - ${product.price.toFixed(2)}
                </Button>
                <p className="text-center text-xs text-muted-foreground">Free shipping on all US orders.</p>
              </div>

              <div className="border-t border-border pt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">2-Year Warranty</h4>
                    <p className="text-xs text-muted-foreground mt-1">We stand behind our quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Fast Delivery</h4>
                    <p className="text-xs text-muted-foreground mt-1">Ships within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
