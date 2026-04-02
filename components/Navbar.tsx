"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Trade Routes", href: "#routes" },
    { name: "Documentation", href: "#docs" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`
    fixed top-0 left-0 w-full z-100 
    transition-all duration-500
    ${isScrolled
          ? `
        bg-white/10 
        backdrop-blur-xl 
        border-b border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        py-5
        `
          : `
        bg-transparent 
        py-5
        `
        }
  `}
    >
      {/* Glow Effect */}
      {isScrolled && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-green-400/20 blur-2xl"></div>
        </div>
      )}

      <div className="w-full px-2 md:px-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <Image
              src="/Meeracki-logo.png"
              alt="Meeracki Global" width={160} height={40} priority className="h-17 ml-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black/90 hover:text-white font-semibold text-base tracking-wide transition"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <a
              href="https://wa.me/919669510699"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white
                hover:bg-yellow-500 
                text-black 
                px-6 py-2 
                rounded-full 
                font-semibold text-sm 
                shadow-md hover:shadow-lg
                transition
              "
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-accent"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="
          md:hidden 
          absolute top-full left-0 w-full mt-3
          bg-black/70 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          shadow-lg
        "
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-white hover:bg-white/10 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/919669510699"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center bg-brand-accent text-black px-5 py-3 rounded-full font-bold"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}