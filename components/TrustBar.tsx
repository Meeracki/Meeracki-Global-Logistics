"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Globe, Package, Clock, BadgeCheck } from "lucide-react";

export default function TrustBar() {
  const stats = [
    { value: 50, suffix: "+", title: "Countries Served", icon: Globe },
    { value: 10000, suffix: "+", title: "Shipments Delivered", icon: Package },
    { value: 15, suffix: "+", title: "Years of Expertise", icon: Clock },
    {
      value: null,
      suffix: "",
      title: "ISO 9001:2015 Certified",
      icon: BadgeCheck,
      static: true,
    },
  ];

  return (
    <section className="relative z-30 mt-5 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="
          bg-gradient-to-r from-black/60 via-black/50 to-black/60
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          py-10 md:py-12
          px-4 md:px-6
          relative
          overflow-hidden
        "
        >
          {/* 🔥 Glow Highlight */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-green-500/20 blur-3xl"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left md:px-6 group transition duration-300 hover:scale-[1.03]"
                >
                  {/* Icon */}
                  <div
                    className="
                    p-3 rounded-xl 
                    bg-white/10 
                    border border-white/10
                    group-hover:bg-green-500/20
                    group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
                    transition
                  "
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <div className="text-white font-extrabold text-3xl md:text-4xl tracking-tight">
                      {stat.static ? (
                        <span className="text-xl">Certified</span>
                      ) : (
                        <CountUp
                          end={stat.value!}
                          suffix={stat.suffix}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      )}
                    </div>

                    <div className="text-white/80 text-sm mt-1">
                      {stat.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}