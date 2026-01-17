import { motion } from "framer-motion";
import { CheckCircle2, Wrench, Zap, Thermometer, Droplets, Wifi } from "lucide-react";

export function IRepairs() {
  const services = [
    { 
      title: "Screen & Battery", 
      desc: "Original quality screen, battery, camera & back glass replacement.",
      icon: Wrench 
    },
    { 
      title: "Charging IC", 
      desc: "Expert repair for iPhones that won't charge or have power issues.",
      icon: Zap 
    },
    { 
      title: "Boot Issues", 
      desc: "Stuck on Apple logo or dead device recovery services.",
      icon: CheckCircle2 
    },
    { 
      title: "Overheating", 
      desc: "Diagnosis and fix for devices running unusually hot.",
      icon: Thermometer 
    },
    { 
      title: "Water Damage", 
      desc: "Advanced cleaning and component repair for liquid exposure.",
      icon: Droplets 
    },
    { 
      title: "Connectivity", 
      desc: "Repair for No Network, Wi-Fi, or Bluetooth connectivity problems.",
      icon: Wifi 
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-4">Legacy iRepairs</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Expert Device Restoration</h3>
          <p className="text-zinc-400 text-lg">
            Don't let a broken device slow you down. Our certified technicians handle everything from simple screen swaps to complex motherboard repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://wa.me/1234567890" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity">
            Book a Repair Now
          </a>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
