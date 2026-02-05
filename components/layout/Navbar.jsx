"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    {
      name: "হোম",
      link: "#",
    },
    {
      name: "কোর্সসমূহ",
      link: "#",
    },
    {
      name: "আমাদের সম্পর্কে",
      link: "#",
    },
    {
      name: "যোগাযোগ",
      link: "#",
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 max-md:py-4 md:py-6">
        <div className="max-md:text-[22px] md:text-[30px] font-bold text-slate-800 flex items-center gap-2">
          <p>Futuristic</p> <p className="text-orange-600">Kids</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 text-slate-600">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="font-anek-bangla hover:text-slate-900 font-medium text-[22px] text-slate-700"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-orange-100 hover:bg-orange-200 transition-colors shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-7 h-7 text-slate-700" />
            )}
          </button>

          {/* Buttons */}
          <div className="flex gap-3 max-lg:hidden">
            <Button
              variant="outline"
              className="max-md:px-2 max-md:py-1 max-md:text-[12px]"
            >
              লগইন
            </Button>
            <Button className="max-md:px-2 max-md:py-1 max-md:text-[12px]">
              রেজিস্ট্রার
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl shadow-lg rounded-b-2xl border-b">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="text-[22px] font-bold text-slate-800 flex items-center gap-2">
              <p>Futuristic</p> <p className="text-orange-600">Kids</p>
            </div>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 space-y-6">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block font-anek-bangla font-medium text-[18px] text-slate-700 hover:text-slate-900 hover:bg-gray-50/50 p-3 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Buttons */}
          <div className="p-6 border-t">
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-center py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                লগইন
              </Button>
              <Button
                className="w-full justify-center py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                রেজিস্ট্রার
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
