"use client";

import { motion } from 'framer-motion';

const steps = [
  { icon: "📄", title: "Commercial Invoice", desc: "Detailed breakdown of the commercial transaction." },
  { icon: "📦", title: "Packing List", desc: "Inventory of freight details, weight, and volume." },
  { icon: "📑", title: "Bill of Lading / Airway Bill", desc: "Official receipt of freight shipping." },
  { icon: "🛂", title: "Customs Declaration Form", desc: "Mandatory declaration of goods for customs authorities." },
  { icon: "📜", title: "Certificate of Origin", desc: "Confirms the national source of the shipped products." },
  { icon: "🔐", title: "Letter of Credit (LC)", desc: "Bank-issued guarantee of secure payment." },
  { icon: "✅", title: "Customs Clearance Approval", desc: "Final green light for domestic entry/exit." }
];

export default function DocumentationGuide() {
  return (
    <section id="docs" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-brand-secondary mb-4">
             Documentation for Import & Export <span className="text-gray-400">|</span> Step by Step
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-green-100 z-0"></div>

          <div className="space-y-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-6 p-6 rounded-2xl border ${index % 2 === 0 ? 'bg-white border-gray-100 shadow-sm' : 'bg-[#f0f7f0] border-green-50 shadow-sm'}`}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-3xl z-10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-secondary mb-1">
                    <span className="text-brand-primary mr-2">{index + 1}.</span> 
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
