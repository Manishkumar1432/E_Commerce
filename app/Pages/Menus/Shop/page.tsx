"use client";

import { motion } from "framer-motion";
import "./Shop.css";

type Product = {
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { name: "Cheese Pizza", price: 12.99, image: "/images/pizza.png" },
  { name: "Chicken Burger", price: 9.49, image: "/images/burger.png" },
  { name: "Chocolate Cake", price: 6.99, image: "/images/dessert.png" },
  { name: "Fresh Lemonade", price: 3.99, image: "/images/drinks.png" },
  { name: "Chicken Biryani", price: 11.49, image: "/images/indian.png" },
  { name: "Chinese Noodles", price: 8.99, image: "/images/chinese.png" }
];

export default function ShopPage() {
  return (
    <div className="shop-page">
      <h1 className="shop-title">Our Special Menu</h1>

      <div className="shop-grid">
        {products.map((item, index) => (
          <motion.div
            key={index}
            className="shop-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} className="shop-img" />

            <div className="shop-info">
              <h2 className="shop-name">{item.name}</h2>
              <p className="shop-price">${item.price.toFixed(2)}</p>

              <motion.button
                whileTap={{ scale: 0.9 }}
                className="shop-btn"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
