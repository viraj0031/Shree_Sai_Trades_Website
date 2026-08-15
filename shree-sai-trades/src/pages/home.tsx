import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <div className="noise-overlay" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
