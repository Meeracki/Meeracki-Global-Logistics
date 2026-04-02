"use client";

import { Ship, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581093588401-22c6f94d93a2?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Images (Slider) */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Particle Dots */}
      <div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Reliable Global <br className="hidden md:block" />
            <span className="text-white">Shipping & Logistics</span>{" "}
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl"
          >
            Delivering your cargo safely, on time, and anywhere in the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919669510699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-green-800 text-black px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 block"
            >
              Inquire Now
            </a>

            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg text-center transition-all block"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="hidden lg:flex absolute bottom-12 left-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl max-w-xs items-start gap-4 z-20"
      >
        <div className="bg-white p-3 rounded-lg text-black shrink-0">
          <Ship size={24} />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-1">Sea Freight</h4>
          <p className="text-gray-300 text-sm">
            Efficient and affordable ocean shipping solutions.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:flex absolute bottom-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl max-w-xs items-start gap-4 z-20"
      >
        <div className="bg-white p-3 rounded-lg text-black shrink-0">
          <Plane size={24} />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-1">Air Freight</h4>
          <p className="text-gray-300 text-sm">
            Fast international air cargo solutions.
          </p>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-primary to-transparent z-10"></div>
    </section>
  );
}