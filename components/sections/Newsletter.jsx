"use client";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center px-6"
      >
        <h3 className="text-2xl font-bold mb-2">
          Join Our Newsletter
        </h3>

        <p className="text-slate-500 mb-6">
          Subscribe for updates & free resources
        </p>

        <div className="flex gap-3">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </motion.div>
    </section>
  );
}
