import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <a className="font-heading font-bold text-xl tracking-tighter block mb-4">
                Legacy Gadgets
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Curated tech accessories chosen for quality, performance, and everyday reliability. Built to last.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/category/iphone"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">iPhone Accessories</a></Link></li>
              <li><Link href="/category/audio"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Audio & Sound</a></Link></li>
              <li><Link href="/category/gaming"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gaming</a></Link></li>
              <li><Link href="/category/power"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Power & Charging</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/contact"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></Link></li>
              <li><Link href="/faq"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</a></Link></li>
              <li><Link href="/shipping"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</a></Link></li>
              <li><Link href="/care"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product Care</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Story</a></Link></li>
              <li><Link href="/privacy"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Legacy Gadgets. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground">Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
