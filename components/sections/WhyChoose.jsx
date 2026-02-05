"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "বিশেষজ্ঞ শিক্ষকগণ",
    description: "প্রশিক্ষিত ও অভিজ্ঞ শিক্ষকদের মাধ্যমে শিশুদের শেখানোর যাত্রা",
    img: "/islamic/boy-girl.jpg",
    color: "bg-gradient-to-br from-orange-100 to-yellow-50",
  },
  {
    title: "নিরাপদ ও আকর্ষণীয়",
    description: "সুরক্ষিত ডিজিটাল পরিবেশে ইন্টারেক্টিভ শেখার অভিজ্ঞতা",
    img: "/feature/safe.jpg",
    color: "bg-gradient-to-br from-yellow-50 to-amber-50",
  },
  {
    title: "আপনার গতিতে শিখুন",
    description: "প্রতিটি শিশুর শেখার গতি অনুযায়ী কাস্টমাইজড পাঠ",
    img: "/feature/run.jpg",
    color: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    title: "মহাকাশ অভিযাত্রী",
    description: "মজাদার এক্সপ্লোরেশন এবং সৃজনশীল কার্যক্রমের মাধ্যমে শেখা",
    img: "/feature/planet.jpg",
    color: "bg-gradient-to-br from-orange-50 to-red-50",
  },
  {
    title: "খেলার মাধ্যমে শেখা",
    description: "মজার গেম ও এক্টিভিটির মাধ্যমে দক্ষতা উন্নয়ন",
    img: "/feature/play.jpg",
    color: "bg-gradient-to-br from-red-50 to-pink-50",
  },
  {
    title: "অভিভাবক নিয়ন্ত্রণ",
    description: "আপনার সন্তানের অগ্রগতি সরাসরি পর্যবেক্ষণ করুন",
    img: "/islamic/group-child.jpg",
    color: "bg-gradient-to-br from-pink-50 to-rose-50",
  },
  {
    title: "সৃজনশীলতা ও কল্পনা",
    description: "শিশুদের সৃজনশীলতা ও কল্পনাশক্তি বিকাশে সহায়তা",
    img: "/feature/creative.jpg",
    color: "bg-gradient-to-br from-rose-50 to-orange-50",
  },
];

export default function WhyChoose() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const autoplayRef = useRef(null);

  // -----------------------------
  // Autoplay (no timer stacking)
  // -----------------------------
  useEffect(() => {
    if (!autoPlay) return;

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % data.length);
    }, 4000);

    return () => clearInterval(autoplayRef.current);
  }, [autoPlay]);

  const pauseAutoPlay = useCallback(() => {
    clearInterval(autoplayRef.current);
    setAutoPlay(false);

    setTimeout(() => {
      setAutoPlay(true);
    }, 5000);
  }, []);

  const handlePrev = useCallback(() => {
    pauseAutoPlay();
    setCurrentIndex((p) => (p === 0 ? data.length - 1 : p - 1));
  }, [pauseAutoPlay]);

  const handleNext = useCallback(() => {
    pauseAutoPlay();
    setCurrentIndex((p) => (p === data.length - 1 ? 0 : p + 1));
  }, [pauseAutoPlay]);

  // -----------------------------
  // Memoized card positions
  // -----------------------------
  const cardStyles = useMemo(() => {
    return data.map((_, index) => {
      const relativeIndex = (index - currentIndex + data.length) % data.length;

      switch (relativeIndex) {
        case 0:
          return { scale: 1, opacity: 1, zIndex: 30, x: 0, visible: true };
        case 1:
          return {
            scale: 0.9,
            opacity: 0.95,
            zIndex: 20,
            x: 220,
            visible: true,
          };
        case data.length - 1:
          return {
            scale: 0.9,
            opacity: 0.95,
            zIndex: 20,
            x: -220,
            visible: true,
          };
        case 2:
          return {
            scale: 0.8,
            opacity: 0.9,
            zIndex: 10,
            x: 460,
            visible: true,
          };
        case data.length - 2:
          return {
            scale: 0.8,
            opacity: 0.9,
            zIndex: 10,
            x: -460,
            visible: true,
          };
        case 3:
          return {
            scale: 0.7,
            opacity: 0.8,
            zIndex: 5,
            x: 600,
            visible: true,
          };
        case data.length - 3:
          return {
            scale: 0.7,
            opacity: 0.8,
            zIndex: 5,
            x: -600,
            visible: true,
          };
        default:
          return {
            scale: 0.6,
            opacity: 0,
            zIndex: 0,
            x: 0,
            visible: false,
          };
      }
    });
  }, [currentIndex]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-orange-200/30 to-transparent -skew-y-6 transform origin-top-left" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-amber-200/30 to-transparent skew-y-6 transform origin-bottom-right" />

        <motion.div
          className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200/50 to-amber-200/40"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200/60 to-orange-200/40"
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-bangla">
            কেন বেছে নিবেন আমাদের?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-bangla">
            ৫-১২ বছর বয়সী শিশুদের জন্য তৈরি বিশেষ শিক্ষা প্ল্যাটফর্ম যেখানে
            শেখা হয় মজার সঙ্গে
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative h-[600px] md:h-[550px] flex items-center justify-center">
          {/* Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white transition-all flex items-center justify-center hover:scale-110 active:scale-95 border border-orange-200"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white transition-all flex items-center justify-center hover:scale-110 active:scale-95 border border-orange-200"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>

          <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center overflow-visible">
            {data.map((item, index) => {
              const style = cardStyles[index];

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={
                    style.visible
                      ? {
                          x: style.x,
                          scale: style.scale,
                          opacity: style.opacity,
                        }
                      : { opacity: 0 }
                  }
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={
                    style.zIndex === 30
                      ? { scale: 1.02 }
                      : style.visible
                        ? { scale: style.scale + 0.02 }
                        : {}
                  }
                  style={{
                    zIndex: style.zIndex,
                    willChange: "transform",
                    transform: "translateZ(0)",
                  }}
                  className={`${item.color} rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 backdrop-blur-sm absolute w-[320px] md:w-[360px] lg:w-[360px] h-[500px] transition-all duration-300 ${
                    style.zIndex === 30 ? "cursor-default" : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (style.zIndex !== 30) {
                      pauseAutoPlay();
                      setCurrentIndex(index);
                    }
                  }}
                >
                  {style.zIndex === 30 && (
                    <>
                      <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-amber-400/5 rounded-full" />
                      <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-tr from-yellow-400/10 to-orange-400/5 rounded-full" />
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-200/20 to-transparent pointer-events-none" />
                    </>
                  )}

                  <motion.div className="relative w-full mb-4 md:mb-6 transition-all duration-300">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-[300px] object-cover drop-shadow-lg rounded-md"
                    />
                  </motion.div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-800 mb-2 md:mb-3 transition-all duration-300 text-xl md:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>

                    <p
                      className={`text-gray-600 mb-4 md:mb-6 font-bangla transition-all duration-300 ${
                        style.zIndex === 30
                          ? "text-base md:text-lg"
                          : "text-sm md:text-base"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="absolute -bottom-12 md:bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center gap-3">
            {data.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  pauseAutoPlay();
                  setCurrentIndex(index);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-orange-500 to-amber-500"
                    : "bg-orange-300/50 hover:bg-orange-400"
                }`}
                animate={{ width: index === currentIndex ? 32 : 12 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 h-4 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent rounded-full"
          animate={{ scaleX: [1, 1.2, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute top-1/4 left-5 w-8 h-8 rounded-full bg-gradient-to-br from-orange-300/60 to-amber-300/40 animate-pulse" />
      <div
        className="absolute bottom-1/3 right-5 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300/20 to-orange-300/10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-gradient-to-br from-amber-300/60 to-yellow-300/40 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
