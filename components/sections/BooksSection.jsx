// components/sections/BooksSection.jsx
"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import {
  BookOpen,
  ShoppingCart,
  Star,
  Eye,
  Heart,
  Bookmark,
  Award,
  TrendingUp,
  Truck,
  Shield,
} from "lucide-react";
import { useState } from "react";

const books = [
  {
    id: 1,
    title: "ছোটদের বাংলা গণিত",
    subtitle: "গল্পে গল্পে গণিত শেখা",
    description: "৫-৮ বছর বয়সী শিশুদের জন্য রঙিন ছবি সহ গণিতের মজার বই",
    author: "ড. রহিমা খাতুন",
    price: 250,
    originalPrice: 300,
    discount: 16,
    rating: 4.8,
    reviews: 124,
    ageGroup: "৫-৮ বছর",
    pages: 64,
    cover: "/books/math-book.png",
    category: "গণিত",
    tags: ["বেস্টসেলার", "নতুন", "ইলাস্ট্রেটেড"],
    features: ["রঙিন ছবি", "ইন্টারেক্টিভ এক্টিভিটি", "স্টিকার সহ"],
    stock: 45,
  },
  {
    id: 2,
    title: "আমার প্রথম বাংলা আব্রি",
    subtitle: "আ-ক-খ শেখার সহজ বই",
    description: "বাংলা বর্ণমালা শেখার জন্য ইন্টারেক্টিভ বই",
    author: "আনিসুল হক",
    price: 180,
    originalPrice: 220,
    discount: 18,
    rating: 4.9,
    reviews: 89,
    ageGroup: "৩-৬ বছর",
    pages: 48,
    cover: "/books/alphabet-book.png",
    category: "বাংলা",
    tags: ["বেস্টসেলার", "প্যারেন্টস চয়েস"],
    features: ["ট্রেসিং পেজ", "ডটেড লাইন", "শব্দভাণ্ডার"],
    stock: 32,
  },
  {
    id: 3,
    title: "বিজ্ঞানের মজার পরীক্ষা",
    subtitle: "ঘরেই করুন সহজ বিজ্ঞান",
    description: "১০টি সহজ বিজ্ঞান পরীক্ষা যা শিশুরা নিজে করতে পারবে",
    author: "ড. সাইফুর রহমান",
    price: 320,
    originalPrice: 380,
    discount: 15,
    rating: 4.7,
    reviews: 156,
    ageGroup: "৮-১২ বছর",
    pages: 96,
    cover: "/books/science-book.png",
    category: "বিজ্ঞান",
    tags: ["প্র্যাকটিক্যাল", "সেফ এক্সপেরিমেন্ট"],
    features: ["স্টেপ বাই স্টেপ", "ভিডিও টিউটোরিয়াল অ্যাক্সেস"],
    stock: 28,
  },
  {
    id: 4,
    title: "কম্পিউটার কোডিং ফর কিডস",
    subtitle: "ব্লক কোডিং শুরু করুন",
    description: "বাচ্চাদের জন্য ভিজুয়াল প্রোগ্রামিং",
    author: "তামিম শাহরিয়ার",
    price: 280,
    originalPrice: 350,
    discount: 20,
    rating: 4.6,
    reviews: 67,
    ageGroup: "৯-১৪ বছর",
    pages: 88,
    cover: "/books/coding-book.png",
    category: "কোডিং",
    tags: ["টেক", "আধুনিক", "স্কিল ডেভেলপমেন্ট"],
    features: ["অনলাইন প্র্যাকটিস পোর্টাল", "প্রজেক্ট গাইড"],
    stock: 40,
  },
  {
    id: 5,
    title: "আর্ট অ্যান্ড ক্রাফট ম্যাগিক",
    subtitle: "সৃজনশীলতা বিকাশের বই",
    description: "৫০টি সহজ আর্ট ও ক্রাফট প্রজেক্ট",
    author: "ফারহানা ইয়াসমিন",
    price: 220,
    originalPrice: 260,
    discount: 15,
    rating: 4.8,
    reviews: 92,
    ageGroup: "৬-১০ বছর",
    pages: 72,
    cover: "/books/art-book.png",
    category: "আর্ট",
    tags: ["ক্রিয়েটিভ", "হ্যান্ডস-অন"],
    features: ["রং পেনসিল ফ্রি", "ক্রাফট টেমপ্লেট"],
    stock: 51,
  },
  {
    id: 6,
    title: "ইংরেজি ফান উইথ ফনিক্স",
    subtitle: "ফনিক্স পদ্ধতিতে ইংরেজি",
    description: "শব্দ ও ছবির মাধ্যমে ইংরেজি শেখা",
    author: "সারা আহমেদ",
    price: 210,
    originalPrice: 250,
    discount: 16,
    rating: 4.5,
    reviews: 78,
    ageGroup: "৪-৭ বছর",
    pages: 60,
    cover: "/books/english-book.png",
    category: "ইংরেজি",
    tags: ["ফনিক্স মেথড", "অডিও বুক সহ"],
    features: ["অডিও প্রোনানসিয়েশন", "ইন্টারেক্টিভ এপ"],
    stock: 36,
  },
  {
    id: 7,
    title: "নৈতিক গল্পের সংগ্রহ",
    subtitle: "ভালো অভ্যাস গড়ার গল্প",
    description: "২০টি নৈতিক গল্প যা শিশুদের চরিত্র গঠনে সাহায্য করে",
    author: "শেখ রোকেয়া",
    price: 190,
    originalPrice: 230,
    discount: 17,
    rating: 4.9,
    reviews: 203,
    ageGroup: "৫-১০ বছর",
    pages: 56,
    cover: "/books/moral-stories.png",
    category: "নৈতিকতা",
    tags: ["ভ্যালু এডুকেশন", "চরিত্র গঠন"],
    features: ["কুইজ সেকশন", "প্যারেন্টস গাইড"],
    stock: 63,
  },
  {
    id: 8,
    title: "পৃথিবীর রহস্য",
    subtitle: "বিজ্ঞান ও ভূগোলের মজার তথ্য",
    description: "গ্রহ, নক্ষত্র, প্রাণী ও প্রকৃতি সম্পর্কে মজার তথ্য",
    author: "জাহিদ হাসান",
    price: 270,
    originalPrice: 320,
    discount: 15,
    rating: 4.7,
    reviews: 115,
    ageGroup: "৭-১২ বছর",
    pages: 84,
    cover: "/books/geography-book.png",
    category: "সাধারন জ্ঞান",
    tags: ["আকর্ষণীয়", "রঙিন ছবি"],
    features: ["গ্লোসারি", "ইন্টারেক্টিভ ম্যাপ"],
    stock: 29,
  },
];

const categories = [
  { id: "all", name: "সকল বই", icon: "📚", count: 45 },
  { id: "bengali", name: "বাংলা", icon: "📖", count: 12 },
  { id: "math", name: "গণিত", icon: "🧮", count: 8 },
  { id: "science", name: "বিজ্ঞান", icon: "🔬", count: 10 },
  { id: "english", name: "ইংরেজি", icon: "🔤", count: 7 },
  { id: "art", name: "আর্ট ও ক্রাফট", icon: "🎨", count: 6 },
  { id: "coding", name: "কোডিং", icon: "💻", count: 5 },
  { id: "moral", name: "নৈতিক শিক্ষা", icon: "🌟", count: 4 },
];

export default function BooksSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [wishlist, setWishlist] = useState([]);
  const [quickView, setQuickView] = useState(null);

  const filteredBooks = books.filter(
    (book) =>
      selectedCategory === "all" ||
      book.category.toLowerCase().includes(selectedCategory),
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  const addToWishlist = (bookId) => {
    setWishlist((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId],
    );
  };

  const addToCart = (book) => {
    // In a real app, you would dispatch to cart context/store
    alert(`${book.title} ক্যার্টে যোগ করা হয়েছে!`);
  };

  const getTotalDiscount = () => {
    return books.reduce(
      (sum, book) => sum + (book.originalPrice - book.price),
      0,
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, 
                rgba(147, 51, 234, ${Math.random() * 0.1}), 
                rgba(59, 130, 246, ${Math.random() * 0.1})
              )`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "loop",
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-6 h-6" />
            <span className="font-bold">বিশেষ অফার চলছে!</span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
              সর্বোচ্চ ২০% ছাড়
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            শিশুদের জন্য <span className="text-purple-600">শিক্ষামূলক বই</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            বাংলাদেশের সেরা শিশু লেখকদের বই সংগ্রহ। ইন্টারেক্টিভ, রঙিন ও
            শিক্ষামূলক বই।
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { icon: "📦", value: "৫০০+", label: "বই বিক্রি" },
            { icon: "⭐", value: "৪.৮/৫", label: "রেটিং" },
            { icon: "👨‍👩‍👧‍👦", value: "২,০০০+", label: "সন্তুষ্ট পরিবার" },
            { icon: "🏆", value: "১৫+", label: "পুরস্কার প্রাপ্ত" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-600">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Categories Filter */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            বিষয়ভিত্তিক বই
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-slate-600">
            <span className="font-semibold text-purple-600">
              {filteredBooks.length}
            </span>
            টি বই পাওয়া গেছে
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">সাজান:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="popular">জনপ্রিয়</option>
              <option value="rating">রেটিং</option>
              <option value="price-low">দাম: কম থেকে বেশি</option>
              <option value="price-high">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sortedBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 group relative"
            >
              {/* Discount Badge */}
              {book.discount > 0 && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {book.discount}% ছাড়
                  </div>
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => addToWishlist(book.id)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    wishlist.includes(book.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>

              {/* Quick View Button */}
              <button
                onClick={() => setQuickView(book)}
                className="absolute top-16 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Eye className="w-5 h-5 text-blue-600" />
              </button>

              {/* Book Cover */}
              <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="w-32 h-40 bg-gradient-to-br from-purple-100 to-white rounded-lg shadow-lg border border-purple-200 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-purple-400" />
                </div>
                {/* Corner decoration */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-full" />
              </div>

              {/* Book Info */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {book.category}
                </div>

                <h3 className="font-bold text-lg text-slate-800 mb-2 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {book.subtitle}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs">
                    {book.author.charAt(0)}
                  </div>
                  <span className="text-sm text-slate-500">{book.author}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">
                    ({book.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-600">
                        ৳{book.price}
                      </span>
                      {book.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          ৳{book.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500">
                      বয়স: {book.ageGroup}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(book)}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm">কিনুন</span>
                  </motion.button>
                </div>

                {/* Stock Status */}
                <div className="mt-4 text-sm">
                  {book.stock > 10 ? (
                    <span className="text-green-600">✅ স্টকে আছে</span>
                  ) : book.stock > 0 ? (
                    <span className="text-orange-600">
                      ⚠️ শেষ হওয়ার আগে কিনুন
                    </span>
                  ) : (
                    <span className="text-red-600">❌ স্টকে নেই</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-8 text-white mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">বিশেষ অফার!</h3>
              <p className="text-purple-100">
                ৩টি বই কিনলে ১টি বই ফ্রি + ফ্রি ডেলিভারি
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold">৳{getTotalDiscount()}</div>
                <div className="text-sm">মোট ছাড়</div>
              </div>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                অফার দেখুন
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Truck className="w-8 h-8" />,
              title: "ফ্রি ডেলিভারি",
              description: "১০০০ টাকার বেশি অর্ডারে সারাদেশে ফ্রি হোম ডেলিভারি",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "১০০% অরিজিনাল",
              description: "সরাসরি প্রকাশক থেকে, গ্যারান্টিযুক্ত অরিজিনাল বই",
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "গুণগত মান",
              description: "উচ্চমানের কাগজ ও ছাপাই, শিশুদের জন্য নিরাপদ",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                {benefit.icon}
              </div>
              <h4 className="font-bold text-lg text-slate-800 mb-2">
                {benefit.title}
              </h4>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl">
            সকল বই দেখুন →
          </Button>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      {quickView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {quickView.title}
                </h3>
                <button
                  onClick={() => setQuickView(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Book Cover */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 flex items-center justify-center">
                  <div className="w-48 h-64 bg-gradient-to-br from-white to-purple-100 rounded-lg shadow-2xl border border-purple-200 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-purple-400" />
                  </div>
                </div>

                {/* Book Details */}
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">
                    {quickView.subtitle}
                  </h4>
                  <p className="text-slate-600 mb-6">{quickView.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500">লেখক:</div>
                      <div className="font-medium">{quickView.author}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500">বয়স:</div>
                      <div className="font-medium">{quickView.ageGroup}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500">পৃষ্ঠা:</div>
                      <div className="font-medium">{quickView.pages}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-slate-500">স্টক:</div>
                      <div
                        className={`font-medium ${quickView.stock > 10 ? "text-green-600" : "text-orange-600"}`}
                      >
                        {quickView.stock} কপি
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-600">
                      ৳{quickView.price}
                    </div>
                    {quickView.originalPrice && (
                      <div className="text-slate-400 line-through">
                        ৳{quickView.originalPrice}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      এখনই কিনুন
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Bookmark className="w-5 h-5 mr-2" />
                      পরে কিনবো
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
