import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Repeat, ArrowRight, ShieldCheck, Zap, Coins } from "lucide-react";
import { motion } from "framer-motion";

export default function Swap() {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Valuation",
      desc: "Get an immediate trade-in value for your old device."
    },
    {
      icon: ShieldCheck,
      title: "Secure Transfer",
      desc: "We ensure all your data is safely moved and wiped from the old device."
    },
    {
      icon: Coins,
      title: "Fair Credit",
      desc: "Receive the best market rate to put towards your new upgrade."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Repeat className="h-4 w-4" />
              Legacy Swap Program
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Upgrade effortlessly. <br /><span className="text-muted-foreground">Trade in, trade up.</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Give your old tech a second life and get credit towards the latest accessories. Our swap program is fast, fair, and eco-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl shadow-primary/20">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">Ready to swap?</h2>
            <p className="text-primary-foreground/80 mb-8">Bring your device to our store or start an online valuation today.</p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2 bg-white text-primary hover:bg-white/90">
              Get Valuation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
