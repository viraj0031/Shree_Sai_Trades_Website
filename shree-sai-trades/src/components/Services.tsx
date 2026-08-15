import React from "react";
import { Truck, Warehouse, Scaling, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Bulk Supply for Contractors",
      description: "Consistent, massive volume supply for large-scale rural and urban construction projects. We ensure your site never waits for materials.",
      icon: Warehouse,
    },
    {
      title: "Retail Distribution",
      description: "Whether you need a single I-beam for a local fabrication job or a bundle of TMT bars for a home build, we serve clients of all sizes with the same respect.",
      icon: Scaling,
    },
    {
      title: "Site Delivery Logistics",
      description: "Direct transport from our Induri yard to your construction site. Our fleet handles the heavy lifting so you can focus on building.",
      icon: Truck,
    },
    {
      title: "Om Vajan Kata — Weighbridge",
      description: "Our own weigh station (ओम वजन कटा) on-site for accurate, trusted weighing of trucks and material, right where you collect your order.",
      icon: Scale,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted relative border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Operations</span>
            <div className="h-px w-8 bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground mb-6"
          >
            How We Work
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-card border border-border p-8 md:p-10 shadow-sm relative group overflow-hidden"
            >
              {/* Background accent on hover */}
              <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-background border border-border flex items-center justify-center mb-8 group-hover:border-primary transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 m-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
