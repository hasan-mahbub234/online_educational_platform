// components/sections/Courses.jsx
"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import {
  BookOpen,
  Users,
  Clock,
  Star,
  Rocket,
  Gamepad2,
  Palette,
  Music,
} from "lucide-react";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "বাংলা বর্ণমালা অ্যাডভেঞ্চার",
    description: "মজার গেমের মাধ্যমে বাংলা বর্ণ শেখা",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50",
    duration: "৪ সপ্তাহ",
    students: "৫,০০০+",
    level: "শুরু",
    age: "৫-৭ বছর",
    rating: 4.9,
    features: ["ইন্টারেক্টিভ গেম", "অ্যানিমেশন", "প্রশংসাপত্র"],
  },
  {
    id: 2,
    title: "ছোটদের কোডিং জগৎ",
    description: "ব্লক-ভিত্তিক প্রোগ্রামিং শেখা",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    duration: "৬ সপ্তাহ",
    students: "৩,২০০+",
    level: "মধ্যম",
    age: "৮-১০ বছর",
    rating: 4.8,
    features: ["স্ক্র্যাচ প্রোগ্রামিং", "পুরস্কার", "প্রজেক্ট ভিত্তিক"],
  },
  {
    id: 3,
    title: "গণিতের রহস্য দ্বীপ",
    description: "গল্পের মাধ্যমে গণিত শেখা",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    duration: "৮ সপ্তাহ",
    students: "৪,৫০০+",
    level: "শুরু",
    age: "৬-৯ বছর",
    rating: 4.7,
    features: ["পাজেল গেম", "বাস্তব সমস্যা", "গ্রুপ কার্যক্রম"],
  },
  {
    id: 4,
    title: "আর্ট ও ক্রিয়েটিভিটি ক্লাস",
    description: "রং, ছবি ও সৃজনশীলতা বিকাশ",
    icon: <Palette className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50",
    duration: "১০ সপ্তাহ",
    students: "২,৮০০+",
    level: "সকল স্তর",
    age: "৫-১২ বছর",
    rating: 4.9,
    features: ["ডিজিটাল আর্ট", "হস্তশিল্প", "প্রদর্শনী"],
  },
  {
    id: 5,
    title: "ইংরেজি ভাষার মজার যাত্রা",
    description: "কার্টুন ও গানের মাধ্যমে ইংরেজি শেখা",
    icon: <Music className="w-8 h-8" />,
    color: "from-red-400 to-rose-400",
    bgColor: "bg-rose-50",
    duration: "১২ সপ্তাহ",
    students: "৬,২০০+",
    level: "শুরু",
    age: "৭-১১ বছর",
    rating: 4.8,
    features: ["ইন্টারেক্টিভ স্টোরি", "স্পিকিং প্র্যাকটিস", "গান ও রাইম"],
  },
  {
    id: 6,
    title: "বিজ্ঞান পরীক্ষাগার",
    description: "সহজ বিজ্ঞান পরীক্ষা ও আবিষ্কার",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    duration: "৮ সপ্তাহ",
    students: "৩,৯০০+",
    level: "মধ্যম",
    age: "৯-১২ বছর",
    rating: 4.6,
    features: ["ভিডিও ল্যাব", "সেফ এক্সপেরিমেন্ট", "প্রজেক্ট"],
  },
];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("সকল");

  const categories = [
    "সকল",
    "বাংলা",
    "কোডিং",
    "গণিত",
    "আর্ট",
    "ইংরেজি",
    "বিজ্ঞান",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-100/30 to-cyan-100/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            আমাদের <span className="text-orange-600">কোর্স</span> সমূহ
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            মজার ও ইন্টারেক্টিভ কোর্সের মাধ্যমে আপনার সন্তানের দক্ষতা উন্নয়ন
            করুন
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${course.bgColor} rounded-3xl p-6 shadow-xl border border-white/50 backdrop-blur-sm overflow-hidden relative group`}
            >
              {/* Animated Corner Decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent via-white/20 to-transparent rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-bl-3xl" />

              {/* Course Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white mb-6 shadow-lg`}
              >
                {course.icon}
              </div>

              {/* Course Title & Description */}
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {course.title}
              </h3>
              <p className="text-slate-600 mb-6">{course.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.features.map((feat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/70 rounded-full text-sm text-slate-700 border border-slate-200"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Course Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-700">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-700">{course.students}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-slate-700">{course.rating}</span>
                </div>
                <div className="text-slate-700 font-medium">{course.age}</div>
              </div>

              {/* Enroll Button */}
              <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg">
                এখনই ভর্তি হোন
              </Button>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="px-8 py-4 text-lg border-2 border-orange-400 hover:bg-orange-50"
          >
            সকল কোর্স দেখুন →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
