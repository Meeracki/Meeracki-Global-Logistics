"use client";

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const stats = [
    { value: 50, suffix: "+", title: "Countries Served", icon: "🌍" },
    { value: 10000, suffix: "+", title: "Shipments Delivered", icon: "📦" },
    { value: 15, suffix: "+", title: "Years of Expertise", icon: "⏱️" },
    { value: null, suffix: "", title: "ISO 9001:2015 Certified", icon: "✅", static: true },
  ];

  return (
    <section className="bg-brand-primary py-12 border-b border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-green-700">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-4 text-center md:text-left md:px-6 flex-col md:flex-row"
            >
              <div className="text-4xl">{stat.icon}</div>
              <div className="flex flex-col">
                <div className="text-white font-extrabold text-3xl">
                  {stat.static ? (
                    <span className="text-2xl">Certified</span>
                  ) : (
                    <CountUp end={stat.value!} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                  )}
                </div>
                <div className="text-green-200 font-medium text-sm mt-1">{stat.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
