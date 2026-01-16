import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight, RefreshCcw } from "lucide-react";
import { Link } from "wouter";
import { products } from "@/lib/data";

const questions = [
  {
    id: "device",
    question: "What's your primary device?",
    options: [
      { label: "iPhone", value: "iphone" },
      { label: "Gaming Console", value: "gaming" },
      { label: "Audio Setup", value: "audio" }
    ]
  },
  {
    id: "style",
    question: "What's your style preference?",
    options: [
      { label: "Minimalist", value: "minimal" },
      { label: "Rugged/Durable", value: "rugged" },
      { label: "Flashy/High-Tech", value: "tech" }
    ]
  }
];

export function AccessoryFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<typeof products[0] | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[step].id]: value };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Logic to "learn" and recommend
      const recommendation = products.find(p => 
        p.category.toLowerCase().includes(newAnswers.device.toLowerCase())
      ) || products[0];
      setResult(recommendation);
      setStep(questions.length);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section className="py-24 bg-card/20 border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <AnimatePresence mode="wait">
            {step < questions.length ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  <Sparkles className="h-3 w-3" />
                  Accessory Finder
                </div>
                <h2 className="text-3xl font-heading font-bold">{questions[step].question}</h2>
                <div className="grid grid-cols-1 gap-3">
                  {questions[step].options.map((opt) => (
                    <Button
                      key={opt.value}
                      variant="outline"
                      className="h-16 rounded-xl text-lg hover:border-primary transition-all group"
                      onClick={() => handleAnswer(opt.value)}
                    >
                      {opt.label}
                      <ChevronRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition-all" />
                    </Button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="p-8 rounded-3xl bg-background border border-border shadow-2xl">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">Our Recommendation</h3>
                  {result && (
                    <div className="flex flex-col items-center">
                      <img src={result.image} alt={result.name} className="w-48 h-48 object-cover rounded-xl mb-6 shadow-lg" />
                      <h4 className="text-2xl font-heading font-bold mb-2">{result.name}</h4>
                      <p className="text-muted-foreground mb-6 line-clamp-2">{result.description}</p>
                      <div className="flex gap-4">
                        <Link href={`/product/${result.id}`}>
                          <Button className="rounded-full px-8">View Details</Button>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={reset} className="rounded-full border">
                          <RefreshCcw className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
