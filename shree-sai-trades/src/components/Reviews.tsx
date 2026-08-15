import React, { useState } from "react";
import { Star, ExternalLink, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      name: "Vishal Pol",
      meta: "2 reviews · 21 photos",
      text: "Good experience — material storage for maximum all sizes available, communication is all good.",
      liked: true,
    },
    {
      name: "Lahu Dhore",
      meta: "4 reviews · 1 photo",
      text: "Exclusive JSW store with a wide range of TMT available. Recommended for purchase.",
    },
    {
      name: "Manisha Gunjal",
      meta: "1 review",
      text: "Very good quality.",
    },
    {
      name: "Reshma Dhore",
      meta: "3 reviews · 1 photo",
      text: "Good quality.",
    },
    {
      name: "Nilesh Ghadge",
      meta: "3 reviews",
      text: "Beautiful services.",
    },
    {
      name: "Mohit Tripathi",
      meta: "1 review",
      text: "Nice service.",
    },
    {
      name: "Santosh Santoshshivajishinde",
      meta: "3 reviews",
      text: "Nice.",
    },
    {
      name: "Sudam Shevkar",
      meta: "1 review",
      text: "Bonding and service are very good.",
      translated: true,
    },
  ];

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section id="reviews" className="py-24 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Google Reviews</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground">
              What Our <span className="text-primary">Clients Say.</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium mt-3">
              Listed on Google as <span className="font-semibold text-foreground">JSW Shoppe – Shree Sai Traders</span>, No 442, Kundan Vasti, Indori, Maval, Induri, Maharashtra 410507
            </p>
          </motion.div>

          <motion.a
            href="https://www.google.com/maps/place/Shree+Sai+Trades/@18.7382414,73.7235849,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b15d3bc191e5:0x298f92696158e760!8m2!3d18.7382414!4d73.7261598!16s%2Fg%2F11gh2ys7lq"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 bg-card border border-border px-6 py-4 rounded-sm hover:border-primary transition-colors shrink-0"
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-3xl font-black text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                11 Google Reviews
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.1 }}
              className="bg-card border border-border p-8 rounded-sm relative flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-medium leading-relaxed mb-2 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              {review.translated && (
                <p className="text-[11px] text-muted-foreground italic mb-4">Translated from Marathi by Google</p>
              )}
              {review.liked && (
                <p className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                  <Heart className="w-3.5 h-3.5 fill-primary text-primary" /> 1 like
                </p>
              )}
              <div className="pt-4 border-t border-border mt-auto">
                <p className="font-bold text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-bold uppercase tracking-widest text-foreground border border-border px-6 py-3 rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Show More Reviews
            </button>
          )}
          <a
            href="https://www.google.com/maps/place/Shree+Sai+Trades/@18.7382414,73.7235849,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b15d3bc191e5:0x298f92696158e760!8m2!3d18.7382414!4d73.7261598!16s%2Fg%2F11gh2ys7lq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1.5"
          >
            View all 11 reviews on Google <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          The owner personally thanks every reviewer — a habit that shows in the shop's 5.0 rating.
        </p>
      </div>
    </section>
  );
}
