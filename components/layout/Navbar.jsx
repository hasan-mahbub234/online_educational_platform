// Header.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import { ShoppingCart, User } from "lucide-react";
import HamburgerButton from "../ui/HamburgerButton";
import Button from "../ui/Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu on outside click or ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Static white header style
  const headerStyle = {
    bg: "rgba(255, 255, 255, 0.95)",
    border: "rgb(0, 0, 0)",
    text: "#111827",
    mobileMenuBg: "rgba(255, 255, 255, 0.97)",
  };

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-md font-semibold transition-all duration-300 relative group"
      style={{ color: headerStyle.text }}
    >
      <span className="relative">
        {children}
        <span className="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-current transform -translate-x-1/2 transition-all duration-500 group-hover:w-full" />
      </span>
    </a>
  );

  return (
    <>
      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur transition-all duration-300"
        style={{
          backgroundColor: headerStyle.bg,
          borderBottom: `1px solid ${headerStyle.border}`,
          color: headerStyle.text,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-2 lg:py-6 flex items-center justify-between">
          {/* Mobile Hamburger */}
          <div className="flex-none lg:hidden">
            <HamburgerButton
              isMenuOpen={isMobileMenuOpen}
              setIsMenuOpen={setIsMobileMenuOpen}
              barColor={headerStyle.text}
              className="p-2"
            />
          </div>
          <div className="max-md:text-[22px] md:text-[30px] font-bold text-slate-800 flex items-center gap-2">
            <p>Futuristic</p> <p className="text-orange-600">Kids</p>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center font-anek-bangla">
            <NavLink href="#">হোম</NavLink>
            <NavLink href="#">কোর্সসমূহ</NavLink>
            <NavLink href="#">আমাদের সম্পর্কে</NavLink>
            <NavLink href="#">যোগাযোগ</NavLink>
            <NavLink href="#">Outdoor</NavLink>
          </nav>

          {/* Icons */}
          <div className="flex gap-3 ">
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
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 w-full z-40 backdrop-blur-md transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundColor: headerStyle.mobileMenuBg,
          paddingTop: "80px",
          borderBottom: `1px solid ${headerStyle.border}`,
        }}
      >
        <nav className="flex flex-col gap-4 py-4 font-semibold text-lg">
          {[
            "Living Room",
            "Bedroom",
            "Dining",
            "Office",
            "Outdoor",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="pl-6 "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
