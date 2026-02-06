"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Home.css";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Navbar */}


      {/* Hero Section */}
      <section className="hero-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-title"
        >
          Delicious food delivered fast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-subtext"
        >
          Order your favorite meals from top restaurants near you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="order-btn"
        >
          Order Now
        </motion.button>
      </section>

      {/* Popular Food List */}
      <section className="popular-section">
        <h3 className="section-title">Popular Items</h3>

        <div className="food-grid">
          {["Pizza", "Burger", "Sushi", "Pasta"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="food-card"
            >
              <div className="food-img"></div>
              <h4 className="food-name">{item}</h4>
              <p className="food-desc">Fresh & hot {item.toLowerCase()}!</p>
              <button className="add-btn">Add to Cart</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
