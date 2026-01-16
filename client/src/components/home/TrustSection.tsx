import { ShieldCheck, Truck, RefreshCw, MessageCircle } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    description: "Every item is tested for durability and performance."
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Fast, tracked shipping on all orders worldwide."
  },
  {
    icon: RefreshCw,
    title: "Secure Payments",
    description: "Encrypted transactions for complete peace of mind."
  },
  {
    icon: MessageCircle,
    title: "Expert Support",
    description: "Real humans ready to help with any product question."
  }
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 border-y border-white/5 bg-gradient-to-b from-card/50 to-background/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left group animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-6 p-4 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
