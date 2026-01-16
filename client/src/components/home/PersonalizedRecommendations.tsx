import { products } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function PersonalizedRecommendations() {
  const [interest, setInterest] = useState<string | null>(null);

  useEffect(() => {
    // Simulated behavior learning from localStorage
    const lastCategory = localStorage.getItem("last_category");
    if (lastCategory) setInterest(lastCategory);
  }, []);

  const recommended = interest 
    ? products.filter(p => p.category.toLowerCase().includes(interest.toLowerCase())).slice(0, 4)
    : products.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              {interest ? `Selected for you: ${interest}` : "Recommended for You"}
            </h2>
            <p className="text-muted-foreground mt-2 font-light">Based on your browsing preferences and interests.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommended.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={`/product/${product.id}`}>
                <a className="block relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Button variant="secondary" size="icon" className="rounded-full h-8 w-8 bg-background/80 backdrop-blur hover:bg-background">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </a>
              </Link>
              <div className="space-y-1">
                <Link href={`/product/${product.id}`}>
                  <a className="font-heading font-semibold hover:text-primary transition-colors line-clamp-1">{product.name}</a>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
