"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./signin.css";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/firebase";
import Link from "next/link";

export default function SigninPage() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      // Firebase login
      await signInWithEmailAndPassword(auth, form.email, form.password);

      console.log("Login Successful!");

      // Redirect to Home page
      router.push("/Pages/Home");
    } catch (err) {
      console.log("Login error:", err);
      alert("Incorrect email or password");
    }

    setLoading(false);
  };

  return (
    <div className="signin-bg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card-wrapper"
      >
        <div className="card">
          <h1 className="title">Welcome Back</h1>

          <form onSubmit={handleSubmit} className="form">

            {/* Email input */}
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="input"
              required
            />

            {/* Password input */}
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="input"
              required
            />

            {/* Sign in button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              type="submit"
              className="btn"
            >
              {loading ? "Signing In..." : "Sign In"}
            </motion.button>

       

          </form>
        </div>
      </motion.div>
    </div>
  );
}
