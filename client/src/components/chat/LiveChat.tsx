import { useState, useEffect } from "react";
import { MessageSquare, X, Send, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface LiveChatProps {
  forceOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function LiveChat({ forceOpen, onOpenChange }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: initial, 1: options

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      setStep(0);
    }
  }, [forceOpen]);

  const toggleChat = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) onOpenChange(open);
    if (open) setStep(0);
  };

  const messages = [
    "Welcome to Legacy Gadget'x! 🖐️",
    "Are you looking to secure our latest premium inventory or perhaps trade in your current device for a high-performance upgrade?",
  ];

  useEffect(() => {
    if (isOpen && step === 0) {
      const timer = setTimeout(() => setStep(1), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, step]);

  const handleOpen = () => {
    setIsOpen(true);
    setStep(0);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleChat(true)}
          className="fixed bottom-6 right-6 z-[120] bg-red-600 text-white p-4 rounded-full shadow-2xl shadow-red-600/40 border border-white/20"
        >
          <MessageSquare className="h-6 w-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[130] w-[350px] max-w-[calc(100vw-48px)] bg-black border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-red-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white border border-white/40">
                  VG
                </div>
                <div>
                  <h3 className="text-white font-bold leading-none mb-1">Victor O.</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/80 uppercase tracking-widest font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => toggleChat(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 h-[300px] overflow-y-auto flex flex-col gap-4 bg-gradient-to-b from-black to-[#0a0a0a]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.5 }}
                  className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none text-gray-200 text-sm max-w-[85%]"
                >
                  {msg}
                </motion.div>
              ))}

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 space-y-3"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold px-2">Choose your preference</p>
                  
                  <a 
                    href="https://wa.me/2347032220586" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 p-4 rounded-2xl transition-all group"
                  >
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    <div className="text-left">
                      <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp Chat</div>
                      <div className="text-[10px] text-gray-400">Instant response & repair bookings</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:victorodigha@gmail.com"
                    className="flex items-center gap-3 w-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 p-4 rounded-2xl transition-all group"
                  >
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div className="text-left">
                      <div className="text-sm font-bold text-white group-hover:text-blue-500 transition-colors">Email Support</div>
                      <div className="text-[10px] text-gray-400">Formal inquiries & business quotes</div>
                    </div>
                  </a>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-black/50 text-center">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Typical reply time: 5 minutes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
