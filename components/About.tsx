"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2"
        >
          Company Overview
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-extrabold text-brand-secondary mb-6 leading-tight">
              Simplifying Global Trade with <span className="text-brand-primary">Precision & Trust.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Based in Raipur, Chhattisgarh, <strong>Meeracki Global Logistics Pvt. Ltd.</strong> is a DPIIT-recognized, ISO 9001:2015 certified import & export solutions company.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2025, we specialize in seamless door-to-door logistics and customs clearance for B2B clients across the globe. Our commitment to excellence ensures your business moves as fast as the world does.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="bg-brand-light-green border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-brand-secondary">Manesh Tekwane</h3>
              <p className="text-brand-primary font-semibold text-sm mb-3 mt-1">Director</p>
              <div className="bg-white w-fit px-3 py-1 rounded text-sm text-gray-600 shadow-sm border border-gray-100">
                15 years in Import/Export
              </div>
            </div>
            
            <div className="bg-brand-light-green border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-brand-secondary">Aakkash Kuranajekar</h3>
              <p className="text-brand-primary font-semibold text-sm mb-3 mt-1">Director</p>
              <div className="bg-white w-fit px-3 py-1 rounded text-sm text-gray-600 shadow-sm border border-gray-100">
                10 years in Real Estate & Business
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Badges Row */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className="border-t border-gray-200 pt-10 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-3">
             <div className="bg-brand-accent/20 p-2 rounded-full text-brand-accent">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
             </div>
             <span className="font-bold text-brand-secondary">ISO 9001:2015 Certified</span>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="bg-brand-primary/10 p-2 rounded-full text-brand-primary">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             </div>
             <span className="font-bold text-brand-secondary">DPIIT Startup India</span>
          </div>

          <div className="flex items-center gap-3">
             <div className="bg-green-100 p-2 rounded-full text-brand-primary">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             </div>
             <span className="font-bold text-brand-secondary">Pvt. Ltd. Active</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
