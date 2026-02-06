"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [bubbles, setBubbles] = useState([]);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate initial bubbles - MORE VISIBLE
  useEffect(() => {
    if (!isClient) return;

    const initialBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 110, // Start from below the viewport
      size: Math.random() * 50 + 30, // 30-80px - MUCH LARGER
      speed: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.4, // Higher opacity
    }));
    setBubbles(initialBubbles);
  }, [isClient]);

  // Generate random positions for stars
  const stars = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  // Special larger stars for emphasis
  const largeStars = Array.from({ length: 8 }).map((_, i) => ({
    id: `large-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 15 + 10,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 3,
  }));

  // Don't render animations on server
  if (!isClient) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/30 min-h-[80vh]">
        {/* Simple static content for server */}
        <div className="relative max-w-[120rem] mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-start">
          <div className="max-md:mt-[-20px] max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
            <h1 className="text-3xl md:text-[54px] font-semibold text-slate-800 leading-normal">
              আপনার সন্তানের ভবিষ্যতের পুঁজি হোক নতুন স্কিল
            </h1>
            <p className="mt-5 text-slate-600 max-w-lg text-[18px] md:text-[26px]">
              ৫-১২ বছর বয়সী শিশুদের জন্য ইন্টারেক্টিভ পাঠ এবং কার্যকলাপগুলি
              অন্বেষণ করুন।
            </p>
            <div className="mt-8 flex gap-4 font-anek-bangla">
              <Button>শুরু করুন</Button>
              <Button variant="outline">কোর্সসমূহ দেখুন</Button>
            </div>
          </div>
          <div>
            <img
              src="/islamic/hero-bg.png"
              alt="kids learning"
              className="w-[900px] h-auto"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/30 min-h-[80vh]">
      {/* Golden Sparkle Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars code remains the same */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `radial-gradient(circle at 30% 30%, #FFD700, #FFA500)`,
              boxShadow: `
                0 0 ${star.size * 2}px rgba(255, 215, 0, 0.8),
                0 0 ${star.size * 4}px rgba(255, 165, 0, 0.4),
                inset 0 0 ${star.size / 2}px rgba(255, 255, 255, 0.9)
              `,
              filter: "brightness(1.1)",
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, star.opacity, star.opacity * 0.7, star.opacity],
              scale: [0, 1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {largeStars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `radial-gradient(circle, #FFEE00 0%, #FFAA00 70%, #FF6600 100%)`,
              boxShadow: `
                0 0 ${star.size}px #FFD700,
                0 0 ${star.size * 2}px rgba(255, 215, 0, 0.6),
                0 0 ${star.size * 3}px rgba(255, 165, 0, 0.3),
                inset 0 0 ${star.size / 1.5}px rgba(255, 255, 255, 0.8)
              `,
              filter: "blur(0.5px)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.9, 0.6, 0.9],
              scale: [0, 1, 1.15, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =================== VISIBLE BUBBLES SECTION =================== */}
      {/* Large, Highly Visible Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* MAIN LARGE BUBBLES - HIGHLY VISIBLE */}
        {Array.from({ length: 15 }).map((_, i) => {
          const size = Math.random() * 60 + 40; // 40-100px
          const startX = Math.random() * 100;
          const startY = 100 + Math.random() * 20;

          return (
            <motion.div
              key={`main-bubble-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${startX}%`,
                bottom: `${startY}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(
                  circle at 30% 30%, 
                  rgba(255, 255, 255, 0.95) 0%,
                  rgba(173, 216, 230, 0.8) 40%,
                  rgba(135, 206, 250, 0.5) 80%,
                  transparent 100%
                )`,
                border: `2px solid rgba(255, 255, 255, 0.9)`,
                boxShadow: `
                  inset 0 0 ${size / 3}px rgba(255, 255, 255, 0.9),
                  0 0 ${size / 2}px rgba(135, 206, 250, 0.8),
                  0 0 ${size}px rgba(173, 216, 230, 0.6)
                `,
              }}
              initial={{ y: 0, x: 0, scale: 0.8, opacity: 0 }}
              animate={{
                y: -windowHeight - 200, // Go all the way up
                x: Math.sin(i * 0.5) * 30, // Wave motion
                scale: [0.8, 1, 1.1, 0.9],
                opacity: [0, 0.9, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 10, // 10-25 seconds
                delay: Math.random() * 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          );
        })}

        {/* MEDIUM BUBBLES */}
        {Array.from({ length: 25 }).map((_, i) => {
          const size = Math.random() * 40 + 20; // 20-60px

          return (
            <motion.div
              key={`medium-bubble-${i}`}
              className="absolute rounded-full bg-white/70 border border-white"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-${size}px`,
                width: `${size}px`,
                height: `${size}px`,
                boxShadow: `
                  0 0 ${size / 2}px rgba(135, 206, 235, 0.8),
                  inset 0 0 ${size / 4}px rgba(255, 255, 255, 0.9)
                `,
              }}
              animate={{
                y: -windowHeight - 100,
                x: Math.sin(i * 0.3) * 20,
                opacity: [0, 0.8, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 8, // 8-18 seconds
                delay: Math.random() * 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

        {/* SMALL FAST BUBBLES - MANY OF THEM */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`fast-bubble-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-10px`,
              width: `${Math.random() * 12 + 8}px`, // 8-20px
              height: `${Math.random() * 12 + 8}px`,
              boxShadow: "0 0 10px rgba(135, 206, 235, 0.9)",
            }}
            animate={{
              y: -windowHeight - 50,
              x: Math.random() * 30 - 15,
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3, // 3-8 seconds
              delay: Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* SPECIAL LARGE BUBBLES WITH REFLECTION */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`special-bubble-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${20 + i * 25}%`,
              bottom: `-80px`,
              width: "80px",
              height: "80px",
              background: `
                radial-gradient(
                  circle at 25% 25%,
                  rgba(255, 255, 255, 1) 0%,
                  rgba(200, 230, 255, 0.9) 30%,
                  rgba(173, 216, 230, 0.7) 60%,
                  transparent 100%
                )
              `,
              border: "3px solid rgba(255, 255, 255, 0.8)",
              boxShadow: `
                inset 0 0 40px rgba(255, 255, 255, 0.9),
                0 0 40px rgba(135, 206, 235, 0.9),
                0 0 80px rgba(173, 216, 230, 0.6)
              `,
            }}
            animate={{
              y: -windowHeight,
              x: [0, 10, -10, 0],
              scale: [0.9, 1.1, 1, 1.2],
              opacity: [0, 1, 0.8, 0],
            }}
            transition={{
              duration: 20,
              delay: i * 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* STATIC BUBBLE DECORATIONS */}
      <div className="absolute bottom-10 left-10 z-20">
        <motion.div
          className="lg:w-24 md:h-24 max-md:w-18 max-md:h-18 rounded-full bg-gradient-to-br from-white to-blue-100 border-2 border-white/80"
          style={{
            boxShadow: `
              inset 0 0 30px rgba(255, 255, 255, 0.9),
              0 0 40px rgba(135, 206, 235, 0.8)
            `,
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="absolute bottom-20 right-20 z-20">
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-white border-2 border-white/70"
          style={{
            boxShadow: `
              inset 0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(173, 216, 230, 0.7)
            `,
          }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-[120rem] mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-md:mt-[-20px] max-md:flex max-md:flex-col max-md:items-center max-md:text-center"
        >
          <h1 className="text-3xl max-md:mt-20 mt-28 md:text-[54px] font-semibold text-slate-800 leading-normal font relative z-30">
            আপনার সন্তানের ভবিষ্যতের পুঁজি হোক নতুন স্কিল
            {/* Bubble near text */}
            <motion.div
              className="absolute -top-6 left-1/4 w-14 h-14 rounded-full bg-white/80 border border-white"
              style={{
                boxShadow: "0 0 20px rgba(135, 206, 235, 0.8)",
              }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </h1>

          <p className="mt-5 text-slate-600 max-w-lg text-[18px] md:text-[26px] relative z-30">
            ৫-১২ বছর বয়সী শিশুদের জন্য ইন্টারেক্টিভ পাঠ এবং কার্যকলাপগুলি
            অন্বেষণ করুন।
          </p>

          <div className="mt-8 flex gap-4 font-anek-bangla relative z-30">
            <Button>শুরু করুন</Button>
            <Button variant="outline">কোর্সসমূহ দেখুন</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-30"
        >
          <img
            src="/islamic/hero-bg.png"
            alt="kids learning"
            className="w-[900px] h-auto relative z-30"
          />

          {/* Stars around image */}
          <motion.div
            className="absolute -top-4 -right-4 w-16 h-16 rounded-full z-40"
            style={{
              background: `radial-gradient(circle, #FFD700 30%, #FFA500 100%)`,
              boxShadow:
                "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.4)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

          <motion.div
            className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full z-40"
            style={{
              background: `radial-gradient(circle, #FFEE00 40%, #FF8800 100%)`,
              boxShadow:
                "0 0 15px rgba(255, 238, 0, 0.9), 0 0 30px rgba(255, 136, 0, 0.5)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
