import logoImg from "@/assets/logo.jpeg";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity cursor-pointer">
                <img src={logoImg} alt="Legacy Gadget'x" className="h-10 w-10 rounded-full border border-white/10" />
                <div className="flex flex-col -space-y-1">
                  <span className="font-heading font-bold text-lg tracking-tighter text-red-600">LEGACY</span>
                  <span className="font-heading font-bold text-sm tracking-tighter text-white">GADGET’X</span>
                </div>
              </div>
            </Link>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
              <p>
                Dealers on UK used iPhones, brand new iPhones, Android phones, Samsung phones, Laptops, and games.
              </p>
              <div className="space-y-2 pt-4 border-t border-border/50">
                <p className="font-medium text-foreground">Find Us</p>
                <p>No49b okporo road off artillery junction port harcourt Nigeria</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Contact</p>
                <p>07032220586</p>
                <p>victorodigha@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/shop"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Phones & Laptops</span></Link></li>
              <li><Link href="/repairs"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">iRepairs</span></span/></Link></li>
              <li><Link href="/swap"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Swap Program</span></Link></li>
              <li><Link href="/savings"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Savings Plan</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Contact Us</span></Link></li>
              <li><Link href="/faq"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">FAQs</span></Link></li>
              <li><Link href="/shipping"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Shipping & Returns</span></Link></li>
              <li><Link href="/care"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Product Care</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Our Story</span></Link></li>
              <li><Link href="/admin"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Admin Dashboard</span></Link></li>
              <li><Link href="/privacy"><span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Legacy Gadget’x. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground">Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
