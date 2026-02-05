"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-full font-semibold transition shadow-md";

  const styles = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
