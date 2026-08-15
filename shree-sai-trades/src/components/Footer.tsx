import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <span className="font-display font-bold text-3xl tracking-tight text-white leading-none block mb-2">
              SHREE SAI TRADES
            </span>
            <span className="font-sans font-semibold text-primary text-lg tracking-widest uppercase block mb-3">
              श्री साई ट्रेड्स
            </span>
            <div className="inline-flex items-center gap-1.5 bg-[#003087] text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-sm mb-6">
              <span className="text-[#e8b84b]">JSW</span>
              <span>Shoppe Authorized Dealer</span>
            </div>
            <p className="font-medium max-w-sm leading-relaxed mb-4">
              The premier steel distributor for contractors, builders, and fabricators across Induri and rural Maharashtra. Also stocking cement, bricks & hardware. Strength you can build on.
            </p>
            <div className="text-sm text-zinc-500 mb-6 space-y-1">
              <p>No 442, Kundan Vasti, Indori, Maval, Induri, Maharashtra 410507</p>
              <a href="tel:+919619076829" className="block hover:text-primary transition-colors">+91 96190 76829</a>
              <a href="mailto:dhore07@gmail.com" className="block hover:text-primary transition-colors">dhore07@gmail.com</a>
            </div>
            <div className="flex gap-4 mb-6">
              <a href="tel:+919619076829" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:border-primary hover:text-primary cursor-pointer transition-colors">
                <span className="font-bold text-xs">CALL</span>
              </a>
              <a href="https://wa.me/919619076829" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:border-primary hover:text-primary cursor-pointer transition-colors">
                <span className="font-bold text-xs">WA</span>
              </a>
              <a href="https://stores.jswsteel.in/jsw-shoppe-shree-sai-traders-shree-sai-traders-steel-iron-industry-maval-pune-247947/Home?utm_source=locator&utm_medium=googleplaces" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:border-primary hover:text-primary cursor-pointer transition-colors">
                <span className="font-bold text-xs">JSW</span>
              </a>
            </div>
            <div className="border-t border-zinc-900 pt-4 text-xs text-zinc-500">
              <p className="font-bold text-zinc-300 uppercase tracking-wide mb-1">Also on-site</p>
              <p>Om Vajan Kata (ओम वजन कटा) — our own weighbridge / weigh station for trucks & material.</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-primary transition-colors font-medium">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors font-medium">Our Products</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors font-medium">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors font-medium">Contact & Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="hover:text-primary transition-colors font-medium">TMT Rebars</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors font-medium">MS Angles & Channels</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors font-medium">Structural Steel</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors font-medium">Pipes & Tubes</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors font-medium">Cement, Bricks & Hardware</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Shree Sai Trades. All rights reserved. &nbsp;|&nbsp; JSW Shoppe Authorized Dealer
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
