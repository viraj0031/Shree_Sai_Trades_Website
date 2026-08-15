import React from "react";
import { motion } from "framer-motion";

const productsImage = "https://images.unsplash.com/photo-1763771420303-0f11ccf613d1?auto=format&fit=crop&w=1200&q=80";
const facilityImage = "https://images.unsplash.com/photo-1709244596178-4c2656d02d1e?auto=format&fit=crop&w=1200&q=80";

export default function Products() {
  const products = [
    {
      title: "TMT Rebars",
      description: "High-strength ribbed bars for reinforced concrete structures. Superior earthquake resistance.",
      spec: "Various grades available",
    },
    {
      title: "MS Angles & Channels",
      description: "Structural steel components for fabrication, framing, and load-bearing structures.",
      spec: "Custom cuts & standard lengths",
    },
    {
      title: "Pipes & Tubes",
      description: "Hollow sections (square, rectangular, circular) for scaffolding, fencing, and framing.",
      spec: "GI and MS options",
    },
    {
      title: "HR & CR Sheets",
      description: "Hot Rolled and Cold Rolled sheets for roofing, panels, and heavy manufacturing.",
      spec: "Varying thicknesses",
    },
    {
      title: "Structural Steel",
      description: "I-beams, H-beams, and heavy sections for massive industrial constructions.",
      spec: "Heavy duty supply",
    },
    {
      title: "MS Flats",
      description: "Versatile flat steel bars for grating, base plates, and structural bracing.",
      spec: "Precision widths",
    },
    {
      title: "Cement, Bricks & Hardware",
      description: "General construction materials stocked alongside our steel range, so contractors can source a full site order in one visit.",
      spec: "One-stop supply",
    },
  ];

  return (
    <section id="products" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Inventory</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight">
              Raw Materials for <br />
              <span className="text-zinc-500">Heavy Ambitions.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 font-medium max-w-sm"
          >
            Sourced from premier mills, stored properly, and ready for deployment to your site. We stock the backbone of your next project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 p-8 rounded-sm transition-all hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150" />
              
              <h3 className="font-display text-2xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-zinc-400 mb-6 font-medium leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-4">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  {product.spec}
                </span>
                <div className="w-6 h-px bg-primary/0 group-hover:bg-primary transition-all group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-zinc-800 rounded-sm overflow-hidden relative group"
          >
            <img 
              src={productsImage} 
              alt="TMT Bars stacked" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-100"
            />
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-video bg-zinc-800 rounded-sm overflow-hidden relative group"
          >
            <img 
              src={facilityImage} 
              alt="Steel distribution facility" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-100"
            />
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
