// components/layout/Footer.jsx
"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`ধন্যবাদ! ${email} ঠিকানায় আপডেট পাঠানো হবে।`);
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { text: "হোম", href: "#" },
    { text: "কোর্সসমূহ", href: "#" },
    { text: "শিক্ষকগণ", href: "#" },
    { text: "মূল্য নির্ধারণ", href: "#" },
    { text: "ব্লগ", href: "#" },
    { text: "যোগাযোগ", href: "#" },
  ];

  const resources = [
    { text: "প্রাইভেসি পলিসি", href: "#" },
    { text: "শর্তাবলী", href: "#" },
    { text: "সহায়তা কেন্দ্র", href: "#" },
    { text: "FAQ", href: "#" },
    { text: "প্যারেন্ট গাইড", href: "#" },
    { text: "ডাউনলোড এপ", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 60 + 10,
              height: Math.random() * 60 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(255,165,0,0.1) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-3xl font-bold text-white">Futuristic</div>
              <div className="text-3xl font-bold text-orange-400">Kids</div>
            </div>
            <p className="text-slate-300 mb-6">
              বাংলাদেশের প্রথম ইন্টারেক্টিভ শিশু শিক্ষা প্ল্যাটফর্ম। আমরা
              শিশুদের মজার মাধ্যমে শেখাই।
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">রিসোর্স</h3>
            <ul className="space-y-3">
              {resources.map((resource, idx) => (
                <motion.li key={idx} whileHover={{ x: 5 }}>
                  <a
                    href={resource.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {resource.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">নিউজলেটার</h3>
            <p className="text-slate-300 mb-4">
              বাচ্চাদের জন্য নতুন কোর্স ও টিপস পান
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল"
                  className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-slate-400"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full font-semibold transition-all"
              >
                সাবস্ক্রাইব করুন
              </motion.button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-slate-400">কল করুন</p>
              <p className="font-semibold">+৮৮০ ১৬XX XXX XXX</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400">ইমেইল করুন</p>
              <p className="font-semibold">info@futuristickids.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-slate-400">ঠিকানা</p>
              <p className="font-semibold">ঢাকা, বাংলাদেশ</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © ২০২৬ Futuristic Kids. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>প্রেম দিয়ে তৈরি</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>বাংলাদেশে</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
