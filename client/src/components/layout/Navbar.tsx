import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, MessageCircle, Search, PiggyBank, MessageSquare, Repeat, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "iPhone", href: "/category/iphone" },
    { name: "Swap", href: "/swap", icon: Repeat },
    { name: "Savings Plan", href: "/savings", icon: PiggyBank },
  ];

  return (
    <>
      <div className="bg-red-600 text-white py-2 px-4 text-center text-[10px] md:text-sm flex items-center justify-center gap-2 fixed top-0 left-0 right-0 z-[110]">
        <MapPin className="h-3 w-3 shrink-0" />
        <span className="truncate">No49b okporo road off artillery junction port harcourt Nigeria</span>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=No49b+okporo+road+off+artillery+junction+port+harcourt+Nigeria" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline ml-2 font-bold whitespace-nowrap"
        >
          View Map
        </a>
      </div>
      <nav
        className={`fixed top-[32px] md:top-[36px] left-0 right-0 z-[100] transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border/40 py-3 shadow-lg"
          : "bg-background py-5 border-border/20"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/">
          <a className="font-heading font-bold text-xl md:text-2xl tracking-tighter hover:opacity-90 transition-opacity shrink-0">
            <span className="text-red-600">LEGACY</span> <span className="text-white">GADGET’X</span>
          </a>
        </Link>

        {/* Search - Desktop */}
        <div className="hidden md:flex relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search accessories..." 
            className="pl-10 rounded-full bg-white/5 border-white/10 focus:bg-white/10 transition-all h-9"
          />
        </div>

        {/* Desktop Nav & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 mr-4 border-r border-border/40 pr-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1.5">
                  {link.icon && <link.icon className="h-3.5 w-3.5 text-primary/70" />}
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="relative group rounded-full border border-white/5 hover:bg-white/5">
              <MessageSquare className="h-5 w-5 text-foreground/90 group-hover:text-foreground" />
              <span className="sr-only">Chat</span>
            </Button>
            
            <a href="https://wa.me/2347032220586" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="rounded-full gap-2 border-[#25D366]/30 hover:bg-[#25D366]/10 hover:text-[#25D366]">
                <MessageCircle className="h-4 w-4" />
                Expert
              </Button>
            </a>
            
            <Button variant="ghost" size="icon" className="relative group rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex md:hidden items-center gap-2">
           <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                      {link.icon && <link.icon className="h-5 w-5" />}
                      {link.name}
                    </a>
                  </Link>
                ))}
                <div className="pt-6 border-t border-border space-y-4">
                  <a href="https://wa.me/2347032220586" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                    Contact Sales
                  </a>
                  <button className="flex items-center gap-3 text-lg font-medium">
                    <MessageSquare className="h-6 w-6" />
                    Live Chat
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
    </>
  );
}
