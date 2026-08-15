import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Shree Sai Trades Steel Yard"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          style={{ transformOrigin: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-zinc-900/40 mix-blend-multiply" />
        {/* Gritty vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center h-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">Trusted in Maharashtra • श्री साई ट्रेड्स</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#003087] text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-sm">
              <span className="text-[#e8b84b]">JSW</span>
              <span>Shoppe</span>
            </div>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-4 uppercase">
            Strength You <br />
            <span className="text-primary block mt-1">Can Build On.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 font-medium mb-10 max-w-xl leading-relaxed border-l-4 border-primary pl-4">
            The premier steel distributor for contractors, builders, and fabricators across Induri and rural Maharashtra. Honest pricing. Heavy-duty reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-base tracking-wide rounded-sm uppercase group"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-zinc-900 font-bold h-14 px-8 text-base tracking-wide rounded-sm uppercase transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-primary w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
