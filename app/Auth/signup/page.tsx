"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import "./signup.css";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter(); // ✅ FIXED: initialize router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Update user name
      await updateProfile(userCredential.user, {
        displayName: form.name,
      });

      alert("Account created successfully!");

      router.push("/Pages/Home"); // ✅ Now works

    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-bg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card-wrapper"
      >
        <div className="card">
          <h1 className="title">Create Account</h1>

          <form onSubmit={handleSubmit} className="form">
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="input"
              required
            />

            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="input"
              required
            />

            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="input"
              required
            />

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              type="submit"
              className="btn"
            >
              Sign Up
            </motion.button>

            <Link href="/Auth/signin" className="link">
              Already have an account? Sign in
            </Link>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
