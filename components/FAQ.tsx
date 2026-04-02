"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "What services does Meeracki Global Logistics offer?", a: "We provide comprehensive end-to-end logistics solutions, focusing on B2B import and export, sea freight, air freight, customs clearance, and dedicated supply chain support across global trade routes." },
  { q: "Are you certified and government recognized?", a: "Yes, we are a DPIIT-recognized Startup India entity, an active Private Limited company, and fully ISO 9001:2015 certified." },
  { q: "Which countries do you ship to?", a: "We have an extensive network covering over 50+ countries globally, specializing in routes connecting India to the Middle East, Europe, Africa, Southeast Asia, and the USA." },
  { q: "How do I start the import/export process with you?", a: "Simply click 'Get a Free Quote' or reach out via WhatsApp. A dedicated account manager will guide you through rates, scheduling, and documentation instantly." },
  { q: "Do you handle customs clearance?", a: "Absolutely. We offer hassle-free customs clearance handled by experts to ensure regulatory compliance and zero delays across all jurisdictions." },
  { q: "What documents are needed for international shipping?", a: "Typically, a Commercial Invoice, Packing List, Bill of Lading/Airway Bill, Customs Declaration, and Certificate of Origin. We handle the complex paperwork for you." },
  { q: "Do you offer B2B partnerships?", a: "Yes, we are built specifically for businesses. We offer bulk cargo solutions and dedicated account managers for long-term logistics partnerships." },
  { q: "How can I track my shipment?", a: "Once dispatched, you'll receive real-time status updates and tracking details securely handled by your dedicated project coordinator." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-brand-secondary mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <span className="font-bold text-lg text-brand-secondary pr-8">{faq.q}</span>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-primary' : 'text-gray-400'}`}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden bg-gray-50 border-t border-gray-100"
                  >
                    <p className="px-6 py-5 text-gray-600 leading-relaxed border-l-4 border-brand-primary ml-6 my-4 bg-white shadow-sm mr-6 rounded-r">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
