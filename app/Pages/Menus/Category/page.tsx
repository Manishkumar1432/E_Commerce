"use client";

import { motion } from "framer-motion";
import "./Menu.css";
import Link from "next/link";
import logo from "../../images/pizza.png";

const categories = [
{ name: "Pizza", image: "logo" },
  { name: "Burgers", image: "/images/burger.png" },
  { name: "Desserts", image: "/images/dessert.png" },
  { name: "Drinks", image: "/images/drinks.png" },
  { name: "Indian", image: "/images/indian.png" },
  { name: "Chinese", image: "/images/chinese.png" },
];



export default function CategoriesPage() {
  return (
    <div className="cat-page">
      <h1 className="cat-title">Choose Your Favorite Category</h1>

      <div className="cat-grid">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="cat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={cat.image} alt={cat.name} className="cat-img" />
            <h2 className="cat-name">{cat.name}</h2>

            <Link href={`/Pages/Categories/${cat.name.toLowerCase()}`}>
              <button className="cat-btn">View Items</button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
