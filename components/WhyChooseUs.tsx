"use client";

import { motion } from 'framer-motion';

const advantages = [
  { icon: "✅", title: "Reliable", desc: "Consistent and dependable service delivery.", borderTop: "border-green-500" },
  { icon: "⚡", title: "Efficient", desc: "Streamlined processes for faster turnaround.", borderTop: "border-yellow-400" },
  { icon: "🔒", title: "Secure", desc: "Top-tier safety standards for all cargo.", borderTop: "border-blue-500" },
  { icon: "⏱️", title: "Timely", desc: "Strict adherence to agreed delivery schedules.", borderTop: "border-orange-500" },
  { icon: "📋", title: "Compliant", desc: "100% regulatory adherence across borders.", borderTop: "border-purple-500" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-light-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-4">
             The Meeracki Advantage
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Horizontal Scroll on Mobile, Flex on Desktop */}
        <div className="flex overflow-x-auto pb-10 hide-scrollbar gap-6 snap-x snap-mandatory">
           {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`min-w-[280px] sm:min-w-[320px] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow snap-center flex-1 relative overflow-hidden`}
              >
                 <div className={`absolute top-0 left-0 right-0 h-1.5 ${adv.borderTop} bg-opacity-70`}></div>
                 <div className="text-5xl mb-6">{adv.icon}</div>
                 <h3 className="text-xl font-bold text-brand-secondary mb-3">{adv.title}</h3>
                 <p className="text-gray-600 border-l-2 border-brand-primary pl-3">
                    {adv.desc}
                 </p>
              </motion.div>
           ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
