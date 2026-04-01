"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function CustomClearance() {
  const points = [
    "Expert handling of customs documentation",
    "Zero shipment delays",
    "Regulatory compliance across all trade lanes",
    "Real-time status updates"
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-8 leading-tight">
               Hassle-Free <br/><span className="text-brand-primary">Custom Clearance.</span>
             </h2>

             <ul className="space-y-6 mb-10">
                {points.map((point, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-brand-accent mt-1 shrink-0" size={24} />
                    <span className="text-xl text-gray-700 font-medium">{point}</span>
                  </motion.li>
                ))}
             </ul>

             <a 
               href="https://wa.me/919669510699" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
             >
               Start Clearance Process
             </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-brand-primary rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1541807360742-5fbaad099f6b?q=80&w=2070&auto=format&fit=crop" 
               alt="Container Port" 
               className="rounded-3xl shadow-xl w-full h-[500px] object-cover relative z-10"
             />
             
             {/* Floating mini card */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.8 }}
               className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-xl border border-gray-100 z-20 flex hidden md:flex items-center gap-4"
             >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-brand-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-secondary">Cleared Fast</div>
                  <div className="text-sm text-gray-500">100% Compliance</div>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
