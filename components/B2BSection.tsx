"use client";

import { motion } from 'framer-motion';
import { Package, UserCheck, Activity } from 'lucide-react';

export default function B2BSection() {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Abstract background detail */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
             Built for Businesses, Not Just Shipments
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
             We integrate seamlessly as your logistics partner, extending your supply chain capabilities on a global scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="flex flex-col items-center"
          >
             <div className="bg-white/10 p-5 rounded-full text-brand-accent mb-6 border border-white/20">
               <Package size={36} />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Bulk Cargo Solutions</h3>
             <p className="text-green-100">Optimized routing for large-scale B2B commercial transport.</p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8"
          >
             <div className="bg-white/10 p-5 rounded-full text-brand-accent mb-6 border border-white/20">
               <UserCheck size={36} />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Dedicated Account Manager</h3>
             <p className="text-green-100">Single point of contact for personalized support and fast responses.</p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/20 pt-8 md:pt-0 md:pl-8"
          >
             <div className="bg-white/10 p-5 rounded-full text-brand-accent mb-6 border border-white/20">
               <Activity size={36} />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">End-to-End Supply Chain Support</h3>
             <p className="text-green-100">From origin factory to final warehouse destination handling.</p>
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className="text-center"
        >
          <a 
            href="https://wa.me/919669510699" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-primary px-10 py-4 rounded-full font-extrabold text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transition-all"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
