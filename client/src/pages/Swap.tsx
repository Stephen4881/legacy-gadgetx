import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Repeat, ArrowRight, CheckCircle2, Smartphone, ShieldCheck, Sparkles } from "lucide-react";

export default function Swap() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    currentDevice: "",
    newDevice: "",
    condition: "",
    userEmail: "",
    additionalNotes: ""
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a mockup, we simulate the submission
    setStep(4);
  };

  const conditions = [
    { id: "perfect", label: "Perfect (Like New)", desc: "No scratches or dents" },
    { id: "good", label: "Good", desc: "Minor scratches, fully functional" },
    { id: "fair", label: "Fair", desc: "Noticeable wear, functional" },
    { id: "broken", label: "Damaged", desc: "Cracked screen or major issues" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-red-600/10 text-red-600 mb-6">
              <Repeat className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 uppercase tracking-tighter">
              Premium Swap <span className="text-red-600">Upgrade</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trade in your current device for the latest tech. Experience the elite Legacy upgrade process.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <motion.div 
                className="h-full bg-red-600"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 4) * 100}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center font-bold text-red-600 border border-red-600/40">1</div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight">The Device Details</h2>
                  </div>

                  <div className="grid gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="currentDevice" className="text-sm uppercase tracking-widest text-gray-500 font-bold">What are you using now?</Label>
                      <Input 
                        id="currentDevice"
                        placeholder="e.g. iPhone 13 Pro Max (128GB)"
                        className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-red-600/50"
                        value={formData.currentDevice}
                        onChange={(e) => setFormData({...formData, currentDevice: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="newDevice" className="text-sm uppercase tracking-widest text-gray-500 font-bold">What's your dream upgrade?</Label>
                      <Input 
                        id="newDevice"
                        placeholder="e.g. iPhone 15 Pro Max (Space Black)"
                        className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-red-600/50"
                        value={formData.newDevice}
                        onChange={(e) => setFormData({...formData, newDevice: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleNext} 
                    disabled={!formData.currentDevice || !formData.newDevice}
                    className="w-full h-16 rounded-2xl bg-red-600 hover:bg-red-700 text-lg font-bold uppercase tracking-widest transition-all group"
                  >
                    Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center font-bold text-red-600 border border-red-600/40">2</div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight">Current Condition</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conditions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setFormData({...formData, condition: c.id})}
                        className={`p-6 rounded-2xl border text-left transition-all ${
                          formData.condition === c.id 
                          ? "bg-red-600/10 border-red-600 ring-1 ring-red-600" 
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="font-bold text-lg mb-1">{c.label}</div>
                        <div className="text-sm text-gray-500">{c.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={handleBack} className="flex-1 h-14 rounded-xl border-white/10">Back</Button>
                    <Button 
                      onClick={handleNext} 
                      disabled={!formData.condition}
                      className="flex-[2] h-14 rounded-xl bg-red-600 hover:bg-red-700 font-bold uppercase tracking-widest"
                    >
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center font-bold text-red-600 border border-red-600/40">3</div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight">Final Details</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="userEmail" className="text-sm uppercase tracking-widest text-gray-500 font-bold">Your Email Address</Label>
                      <Input 
                        id="userEmail"
                        type="email"
                        placeholder="How can we reach you?"
                        className="bg-white/5 border-white/10 h-14 rounded-xl focus:border-red-600/50"
                        required
                        value={formData.userEmail}
                        onChange={(e) => setFormData({...formData, userEmail: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="notes" className="text-sm uppercase tracking-widest text-gray-500 font-bold">Additional Notes (Optional)</Label>
                      <Textarea 
                        id="notes"
                        placeholder="Anything else we should know?"
                        className="bg-white/5 border-white/10 min-h-[120px] rounded-xl focus:border-red-600/50"
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" type="button" onClick={handleBack} className="flex-1 h-14 rounded-xl border-white/10">Back</Button>
                      <Button 
                        type="submit"
                        className="flex-[2] h-14 rounded-xl bg-red-600 hover:bg-red-700 font-bold uppercase tracking-widest"
                      >
                        Submit Request
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 text-green-500 mb-8 border border-green-500/40">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="text-4xl font-heading font-bold mb-4 uppercase tracking-tighter">Request Received!</h2>
                  <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Thank you for choosing Legacy Gadget'x. Your swap request has been sent to our admin team. 
                    <br /><br />
                    We'll analyze your device details and get back to you at <span className="text-white font-bold">{formData.userEmail}</span> within 24 hours.
                  </p>
                  <Button 
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        currentDevice: "",
                        newDevice: "",
                        condition: "",
                        userEmail: "",
                        additionalNotes: ""
                      });
                    }}
                    variant="outline"
                    className="rounded-full px-8 py-4 border-white/10 hover:bg-white/5"
                  >
                    Start Another Request
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center">
              <ShieldCheck className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase tracking-tight text-sm">Verified Valuation</h3>
              <p className="text-xs text-gray-500">Fair market prices based on real-time data and device condition.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center">
              <Smartphone className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase tracking-tight text-sm">Instant Upgrades</h3>
              <p className="text-xs text-gray-500">Fast physical inspection at our Port Harcourt showroom.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center">
              <Sparkles className="h-10 w-10 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2 uppercase tracking-tight text-sm">Expert Restoration</h3>
              <p className="text-xs text-gray-500">All trade-ins are handled by our Legacy iRepairs specialists.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
