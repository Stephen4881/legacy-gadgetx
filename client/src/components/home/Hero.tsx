import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImg from '@assets/stock_images/premium_wireless_hea_761fb19d.jpg'; // Using headphones as hero

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroImg} 
          alt="Premium Headphones" 
          className="w-full h-full object-cover opacity-60 md:object-[center_right] object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Accessories <br />
              <span className="text-muted-foreground">Built to Last.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Curated tech accessories for iPhone, gaming, and sound — chosen for quality, performance, and everyday reliability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/shop">
              <Button size="lg" className="rounded-full px-8 py-6 text-base h-auto">
                Shop Collection
              </Button>
            </Link>
            <Link href="/category/iphone">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base h-auto bg-transparent border-foreground/20 hover:bg-foreground/5">
                Explore iPhone Accessories
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
