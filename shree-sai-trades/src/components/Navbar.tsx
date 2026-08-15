import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar - Contact info */}
      <div className="hidden md:flex bg-secondary text-secondary-foreground text-xs font-medium px-6 py-2 justify-between items-center z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-secondary-foreground/80 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5" /> No 442, Kundan Vasti, Induri, Maval, Pune 410507
          </span>
          <span className="flex items-center gap-1.5 text-secondary-foreground/80 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91 96190 76829
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-secondary-foreground/80">Open Daily • Closes 6 PM</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed md:sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b" : "bg-background"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-foreground leading-none">
                  SHREE SAI TRADES
                </span>
                <span className="font-sans font-semibold text-primary text-sm tracking-widest mt-1 uppercase">
                  श्री साई ट्रेड्स
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-1.5 bg-[#003087] text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-sm ml-2">
                <span className="text-[#e8b84b]">JSW</span>
                <span>Shoppe</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide uppercase px-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b shadow-lg absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-bold text-foreground hover:text-primary border-b border-border/50 uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 pb-2 px-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide uppercase"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get a Quote
                </Button>
              </div>
              <div className="mt-4 px-3 py-4 bg-muted rounded-md flex flex-col gap-3">
                <span className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <MapPin className="w-4 h-4 text-primary" /> No 442, Kundan Vasti, Induri, Maval, Pune 410507
                </span>
                <span className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <Phone className="w-4 h-4 text-primary" /> +91 96190 76829
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
