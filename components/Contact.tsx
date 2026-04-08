"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-primary text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 background-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Let's Move the World Together</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <motion.a
            href="tel:+919669510699"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="bg-brand-accent text-black p-4 rounded-full mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white scale-0 transition-transform group-hover:scale-100 rounded-full"></div>
              <Phone size={32} className="relative z-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <strong>Manish Tekwane</strong><p className="text-gray-300 font-medium">+91-9669510699</p>
            <strong>Aakkash Kuranajekar</strong><p className="text-gray-300 font-medium">+91-9669516099</p>
          </motion.a>

          <motion.a
            href="mailto:merakigloballogistics@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="bg-brand-accent text-black p-4 rounded-full mb-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white scale-0 transition-transform group-hover:scale-100 rounded-full"></div>
              <Mail size={32} className="relative z-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-300 font-medium break-all text-center">merakigloballogistics@gmail.com</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <div className="bg-brand-accent text-black p-4 rounded-full mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-300 text-center font-medium leading-relaxed">
              H. No-29, Sec-1, Gitanjali Nagar, <br />Raipur, Chhattisgarh – 492001
            </p>
          </motion.div>

        </div>

        <div className="mt-16 pt-10 border-t border-white/20 flex justify-center gap-6">
          <a href="https://wa.me/919669510699" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-[#25D366] hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /><path d="M16 13a4 4 0 0 0-4-4" /></svg>
          </a>
          <a href="mailto:merakigloballogistics@gmail.com" className="bg-white/10 p-4 rounded-full hover:bg-blue-500 hover:text-white transition-all">
            <Mail size={24} />
          </a>
          <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-pink-600 hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
