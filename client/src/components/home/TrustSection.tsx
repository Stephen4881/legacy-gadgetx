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
    <section className="py-16 md:py-24 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left group">
              <div className="mb-4 p-3 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
