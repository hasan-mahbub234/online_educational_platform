// components/sections/Reviews.jsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp, Heart } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "আয়েশা রহমান",
    role: "মা, ৮ বছর বয়সী শিশুর",
    content:
      "আমার মেয়ে এখন বাংলা পড়তে পছন্দ করে! গেমের মাধ্যমে শেখার পদ্ধতি অসাধারণ।",
    rating: 5,
    avatar: "/avatars/mother1.jpg",
    childAge: "৮ বছর",
    course: "বাংলা বর্ণমালা অ্যাডভেঞ্চার",
  },
  {
    id: 2,
    name: "রফিকুল ইসলাম",
    role: "বাবা, ১০ বছর বয়সী শিশুর",
    content:
      "কোডিং কোর্সটি আমার ছেলেকে প্রযুক্তিতে আগ্রহী করেছে। এখন সে নিজের গেম বানায়!",
    rating: 5,
    avatar: "/avatars/father1.jpg",
    childAge: "১০ বছর",
    course: "ছোটদের কোডিং জগৎ",
  },
  {
    id: 3,
    name: "তানিয়া আহমেদ",
    role: "মা, ৭ বছর বয়সী শিশুর",
    content: "গণিতের কোর্সটি এত মজার যে আমার মেয়ে এখন গণিতকে ভয় পায় না!",
    rating: 4,
    avatar: "/avatars/mother2.jpg",
    childAge: "৭ বছর",
    course: "গণিতের রহস্য দ্বীপ",
  },
  {
    id: 4,
    name: "জামাল হোসেন",
    role: "বাবা, ৯ বছর বয়সী শিশুর",
    content:
      "আর্ট ক্লাসে আমার ছেলের সৃজনশীলতা অসাধারণভাবে বেড়েছে। ধন্যবাদ ফিউচারিস্টিক কিডস!",
    rating: 5,
    avatar: "/avatars/father2.jpg",
    childAge: "৯ বছর",
    course: "আর্ট ও ক্রিয়েটিভিটি ক্লাস",
  },
  {
    id: 5,
    name: "নুসরাত জাহান",
    role: "মা, ১১ বছর বয়সী শিশুর",
    content:
      "বিজ্ঞান ল্যাব কোর্সে হাতে-কলমে শেখার সুযোগ পেয়ে আমার মেয়ে বিজ্ঞানী হওয়ার স্বপ্ন দেখছে।",
    rating: 5,
    avatar: "/avatars/mother3.jpg",
    childAge: "১১ বছর",
    course: "বিজ্ঞান পরীক্ষাগার",
  },
  {
    id: 6,
    name: "সজীব চৌধুরী",
    role: "বাবা, ৬ বছর বয়সী শিশুর",
    content:
      "ইংরেজি কোর্সে গান ও কার্টুনের মাধ্যমে শেখানো হয়, আমার ছেলে এখন ইংরেজিতে গান গায়!",
    rating: 4,
    avatar: "/avatars/father3.jpg",
    childAge: "৬ বছর",
    course: "ইংরেজি ভাষার মজার যাত্রা",
  },
];

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(0);
  const [likedReviews, setLikedReviews] = useState({});

  const handleLike = (id) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-100/40 to-orange-100/30"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
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
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <ThumbsUp className="w-5 h-5" />
            <span className="font-semibold">৯৮% সন্তুষ্ট অভিভাবক</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            অভিভাবকদের <span className="text-orange-600">মতামত</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            দেখুন আমাদের অভিভাবকরা কী বলছেন তাদের সন্তানদের উন্নতি সম্পর্কে
          </p>
        </motion.div>

        {/* left side  Main Review Display  */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Review (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-blue-100"
          >
            <Quote className="w-12 h-12 text-orange-300 mb-4" />
            <p className="text-2xl text-slate-700 mb-6 leading-relaxed">
              "{reviews[selectedReview].content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center text-white text-2xl font-bold">
                {reviews[selectedReview].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">
                  {reviews[selectedReview].name}
                </h4>
                <p className="text-slate-600">{reviews[selectedReview].role}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < reviews[selectedReview].rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-slate-500">শিশুর বয়স</p>
                <p className="text-lg font-bold text-slate-800">
                  {reviews[selectedReview].childAge}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-sm text-slate-500">কোর্স</p>
                <p className="text-lg font-bold text-slate-800">
                  {reviews[selectedReview].course}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side Review Selector Sidebar */}
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <motion.button
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                onClick={() => setSelectedReview(index)}
                className={`w-full text-left p-4 rounded-2xl transition-all ${
                  selectedReview === index
                    ? "bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 shadow-lg"
                    : "bg-white border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {review.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(review.id);
                    }}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedReviews[review.id]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                  {review.content}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "১০,০০০+", label: "সন্তুষ্ট শিশু" },
            { number: "৯৪%", label: "সাফল্যের হার" },
            { number: "৫০+", label: "বিশেষজ্ঞ শিক্ষক" },
            { number: "১০০+", label: "ইন্টারেক্টিভ কোর্স" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center"
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full shadow-xl text-lg font-semibold">
            আজই আপনার সন্তানকে ভর্তি করুন
          </div>
        </motion.div>
      </div>
    </section>
  );
}
