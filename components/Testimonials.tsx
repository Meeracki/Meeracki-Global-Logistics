"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Rahul Agarwal",
        company: "Steel Importer, Mumbai",
        text: "Meeracki handled our customs clearance flawlessly. No delays, no hidden costs. Highly reliable partner for imports.",
    },
    {
        name: "Priya Sharma",
        company: "Textile Exporter, Surat",
        text: "We’ve reduced shipment delays by 40% after working with them. Documentation is always on point.",
    },
    {
        name: "Arjun Mehta",
        company: "Electronics Trader, Delhi",
        text: "Real-time updates and smooth coordination. Their team is very responsive and professional.",
    },
    {
        name: "Vikram Reddy",
        company: "Agro Exporter, Hyderabad",
        text: "Custom clearance used to be stressful. Now it’s completely hassle-free with Meeracki.",
    },
    {
        name: "Neha Patel",
        company: "Scrap Importer, Ahmedabad",
        text: "Transparent pricing and fast processing. Exactly what import businesses need.",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                    Trusted by Businesses Across India 🇮🇳
                </h2>
                <p className="text-green-100 mb-12 text-lg">
                    Real experiences from importers & exporters
                </p>

                {/* Carousel */}
                <div className="relative h-[200px] md:h-[180px] flex items-center justify-center">

                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: i === index ? 1 : 0,
                                scale: i === index ? 1 : 0.9,
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full max-w-3xl"
                        >
                            <div className="bg-white text-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">

                                {/* Stars */}
                                <div className="flex justify-center mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="text-lg md:text-xl font-medium mb-6">
                                    “{review.text}”
                                </p>

                                {/* User */}
                                <div className="text-sm md:text-base font-semibold text-green-700">
                                    {review.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {review.company}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${i === index ? "bg-white" : "bg-green-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}