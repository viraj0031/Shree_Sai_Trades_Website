import React from "react";
import { Shield, Hammer, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const aboutImage = "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  const stats = [
    { value: "5.0★", label: "11 Google Reviews", icon: Shield },
    { value: "100+", label: "Projects Supplied", icon: Hammer },
    { value: "Local", label: "Induri Rooted", icon: MapPin },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] overflow-hidden leading-none select-none">
        <span className="font-display font-black text-[15rem] whitespace-nowrap text-foreground">
          श्री साई ट्रेड्स
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Foundation</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 uppercase leading-tight">
              A Family-Run Business Built on <span className="text-primary">Trust & Iron.</span>
            </h2>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="font-medium text-foreground/80 mb-4">
                At Shree Sai Trades, we believe that the strength of a building comes from the materials it's made of — and the strength of a business comes from the people who run it.
              </p>
              <p className="mb-4">
                Based at No 442, Kundan Vasti in Induri, Maval, we are the go-to steel distribution partner for local contractors, builders, and fabricators across Pune district. As an authorized <strong>JSW Shoppe</strong> dealer — listed on Google as <strong>JSW Shoppe – Shree Sai Traders</strong> — we carry genuine JSW Steel products, India's most trusted steel brand, backed by our own commitment to honest pricing and local expertise.
              </p>
              <p>
                Beyond steel, we also stock <strong>cement, bricks, and general hardware materials</strong>, so contractors can source most of their site needs from one yard. We also operate our own weighbridge, <strong>Om Vajan Kata</strong> (ओम वजन कटा), for accurate, trusted weighing of material and vehicles.
              </p>
            </div>

            {/* JSW Shoppe Badge */}
            <div className="inline-flex items-center gap-3 border border-border bg-card px-5 py-3 rounded-sm mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Authorized Dealer</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="font-black text-[#003087] text-lg tracking-tight">JSW</span>
                  <span className="font-bold text-foreground text-sm tracking-wide">Shoppe</span>
                </div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Steel Products</span>
                <span className="font-semibold text-foreground text-sm mt-0.5">TMT, Structurals & More</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <span className="font-display text-3xl font-black text-foreground">{stat.value}</span>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
              <img 
                src={aboutImage} 
                alt="Welding structural steel" 
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-card border-2 border-primary p-6 rounded-sm shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold text-foreground font-display text-xl uppercase">5.0 Star Rating</p>
              <p className="text-sm font-semibold text-muted-foreground">From 11 Google Reviews</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
