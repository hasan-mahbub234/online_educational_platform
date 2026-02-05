"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "ছোটদের সহীহ কুরআন শিক্ষা",
    desc: "আপনিও কি চান, আপনার আদরের সন্তান ঠিক এভাবেই সহীহ শুদ্ধ সুরে কুরআন তেলাওয়াত করুক? ঘর আলোকিত হোক কুরআনের নূরে? বাচ্চা স্কুলে যাচ্ছে, কিন্তু কুরআন শিক্ষা পাচ্ছে না? তাহলে আর দেরি কেন? আজই যোগাযোগ করুন আমাদের সাথে।",
    img: "/islamic/child-mosq.jpg",
  },
  {
    title: "ছোটদের AI কার্যকরী ব্যবহার শিক্ষা",
    desc: "আপনার ছোটদের জন্য সহজ ও কার্যকরী AI শিক্ষা। আপনি কি চান, আপনার বাচ্চা AI-এর সহিত বিশ্বাসযোগ্যভাবে পরিচিত হতে পারে? আমরা AI-এর মধ্যেও ১০০% নিরাপদ, ১০০% উপকারী, ১০০% ।",
    img: "/islamic/teach-tv.jpg",
  },
  {
    title: "শিশুদের নিরাপদ ও উপকারী প্রযুক্তির ব্যবহার শিক্ষা",
    desc: "আপনার বাচ্চাদের জন্য নিরাপদ ও উপকারী প্রযুক্তির ব্যবহার শিক্ষা। আপনি কি চান, আপনার সন্তান প্রযুক্তি ব্যবহার করতে পারে নিরাপদ ও সঠিকভাবে? আমরা শিশুদের জন্য ডিজিটাল নিরাপত্তা ও প্রযুক্তির সঠিক ব্যবহার শেখাই।",
    img: "/islamic/moon-childs.jpg",
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          আমাদের প্রোগ্রামসমূহ
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt=""
                width={260}
                height={200}
                className=" w-[300px] h-[250px] object-contain mx-auto"
              />

              <h3 className="mt-6 text-lg font-semibold text-center">
                {item.title}
              </h3>

              <p className="mt-2 text-[16px] text-slate-500 text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
