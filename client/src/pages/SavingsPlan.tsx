import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PiggyBank, ArrowRight, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function SavingsPlan() {
  const steps = [
    {
      icon: Target,
      title: "Choose Your Goal",
      desc: "Select the accessory you want and set your target date."
    },
    {
      icon: PiggyBank,
      title: "Save Gradually",
      desc: "Deposit small amounts weekly or monthly at your own pace."
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      desc: "Watch your savings grow and get closer to your dream tech."
    },
    {
      icon: ShieldCheck,
      title: "Lock in Price",
      desc: "The current price is locked when you start your plan."
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
              <PiggyBank className="h-4 w-4" />
              Legacy Savings Plan
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Own what you love, <br /><span className="text-muted-foreground">one step at a time.</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our gradual savings plan helps you acquire premium accessories without the financial pressure. No interest, no debt, just smart saving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Ready to start your legacy?</h2>
            <p className="text-muted-foreground mb-8">Join 2,000+ customers who are saving for their next premium upgrade.</p>
            <Button size="lg" className="rounded-full px-8 gap-2">
              Start Saving Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
