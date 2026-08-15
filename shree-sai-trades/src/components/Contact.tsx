import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional form as requested
    alert("Thank you for your inquiry. A representative from Shree Sai Trades will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left: Contact Info & Form */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground mb-8">
                Request a <span className="text-primary">Quote.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-1">Yard Location</h4>
                    <p className="text-muted-foreground text-sm font-medium">No 442, Kundan Vasti, Indori</p>
                    <p className="text-muted-foreground text-sm font-medium">Maval, Induri, Maharashtra – 410507</p>
                    <p className="text-muted-foreground text-xs mt-1">Plus Code: PPQG+8F Induri</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-1">Call Us</h4>
                    <a href="tel:+919619076829" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">+91 96190 76829</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-1">Working Hours</h4>
                    <p className="text-muted-foreground text-sm font-medium">Open Daily</p>
                    <p className="text-muted-foreground text-sm font-medium">Closes at 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase tracking-wide text-sm mb-1">Email</h4>
                    <a href="mailto:dhore07@gmail.com" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">dhore07@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 border border-border">
                <h3 className="font-display text-2xl font-bold uppercase mb-4 text-foreground">Send an Inquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background border-input rounded-sm h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Phone Number</label>
                    <Input placeholder="+91" type="tel" className="bg-background border-input rounded-sm h-12" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Material Requirements</label>
                  <Textarea placeholder="E.g., 5 tons of TMT rebars, MS angles..." className="bg-background border-input rounded-sm min-h-[120px]" required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase h-14 rounded-sm">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Right: Map */}
          <div className="w-full md:w-1/2 min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full w-full bg-muted border border-border p-2 relative"
            >
              <div className="absolute top-6 left-6 z-10 bg-background p-4 shadow-lg border border-border pointer-events-none hidden sm:block">
                <span className="font-display font-bold text-xl block">Shree Sai Trades</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mt-1">JSW Shoppe · Steel Distributor</span>
                <span className="text-sm font-medium text-muted-foreground block mt-1">No 442, Kundan Vasti, Induri, Maval</span>
              </div>
              <a
                href="https://www.google.com/maps/place/Shree+Sai+Trades/@18.7382414,73.7235849,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b15d3bc191e5:0x298f92696158e760!8m2!3d18.7382414!4d73.7261598!16s%2Fg%2F11gh2ys7lq"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-10 bg-background pointer-events-auto px-4 py-2 border border-border text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors hidden sm:block"
              >
                Open in Google Maps
              </a>
              <iframe
                title="Shree Sai Trades Location"
                src="https://maps.google.com/maps?q=No+442+Kundan+Vasti+Induri+Maval+Pune+Maharashtra+410507&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[500px]"
              ></iframe>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
