"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <Menu size={28} color="#ffffff" />
        </button>
        <h1 className="logo">FoodExpress</h1>
      </header>

      {/* Side Drawer */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: open ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 90 }}
        className="side-drawer"
      >
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={26} />
        </button>

        <ul className="drawer-list">
          <li><Link href="/Pages/Home">Home</Link></li>
          <li><Link href="/Pages/Menus/Category">Category</Link></li>
          <li><Link href="/Pages/Menus/Shop">Shop</Link></li>
          <li><Link href="/Pages/Profile">Profile</Link></li>
          <li><Link href="/Pages/Contact">Contact</Link></li>
          <li><Link href="/Auth/signin">LogOut</Link></li>
        </ul>
      </motion.div>

      {/* Page Content */}
      <main>{children}</main>
    </>
  );
}
