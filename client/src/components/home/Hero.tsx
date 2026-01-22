import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShoppingBag, Search, PiggyBank, Repeat, MessageCircle, Mail } from "lucide-react";
import heroImg from '@assets/IMG_0054_1768559077100.jpeg'; // Using the specified background image

export function Hero() {
  const quickLinks = [
    { name: "Shop", href: "/shop", icon: ShoppingBag, color: "bg-blue-500/10 text-blue-500" },
    { name: "Swap", href: "/swap", icon: Repeat, color: "bg-green-500/10 text-green-500" },
    { name: "Repair", href: "https://wa.me/message/2XW7D6B6B7B4B1", icon: MessageCircle, color: "bg-emerald-500/10 text-emerald-500", external: true },
    { name: "WhatsApp", href: "https://wa.me/message/2XW7D6B6B7B4B1", icon: MessageCircle, color: "bg-emerald-600/10 text-emerald-600", external: true },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroImg} 
          alt="Premium Selection" 
          className="w-full h-full object-cover opacity-60 md:object-[center_right] object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-32 md:pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-red-600">LEGACY</span> <br />
              <span className="text-white uppercase">GADGET’X</span> <br />
              <div className="text-left">
                <span className="text-muted-foreground normal-case text-2xl md:text-3xl">Built to Last.</span>
              </div>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            Dealers on UK used iPhones, brand new iPhones, Android phones, Samsung phones, Laptops, and games. Premium quality, guaranteed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/shop">
              <Button size="lg" className="rounded-full px-8 py-6 text-base h-auto shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500">
                Shop Collection
              </Button>
            </Link>
            <Link href="/category/iphone">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base h-auto bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500">
                Explore iPhone Accessories
              </Button>
            </Link>
          </motion.div>

          {/* Quick Action Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl"
          >
            <Link href="/shop">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 mb-3 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Shop</span>
              </div>
            </Link>
            <Link href="/swap">
              <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-500 mb-3 group-hover:scale-110 transition-transform">
                  <Repeat className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Swap</span>
              </div>
            </Link>
            <a href="https://wa.me/2347032220586?text=Hello%20Legacy%20Gadget%E2%80%99x%2C%20I%20am%20interested%20in%20purchasing%20a%20device%20from%20you.%20Kindly%20share%20your%20catalog." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center leading-tight">WhatsApp Business</span>
            </a>
            <a href="https://wa.me/2347032220586?text=Hello%20Legacy%20Gadget%E2%80%99x%2C%20I%20am%20interested%20in%20purchasing%20a%20device%20from%20you.%20Kindly%20share%20your%20catalog." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center leading-tight">WhatsApp Messenger</span>
            </a>
            <a href="mailto:victorodigha@gmail.com" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="p-3 rounded-xl bg-red-600/10 text-red-600 mb-3 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
