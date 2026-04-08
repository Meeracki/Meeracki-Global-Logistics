"use client";

import { motion } from 'framer-motion';

const servicesList = [
  {
    icon: "🚢",
    title: "Sea Freight",
    desc: "Full & partial ocean shipping tailored to global import/export needs."
  },
  {
    icon: "✈️",
    title: "Air Freight",
    desc: "Express international cargo solutions for time-critical shipments."
  },
  {
    icon: "🏚️",
    title: "Door-to-Door Logistics",
    desc: "End-to-end pickup to delivery management with full transparency."
  },
  {
    icon: "🌐",
    title: "Import & Export Handling",
    desc: "Cross-border trade flow management handled by compliance experts."
  },
  {
    icon: "📋",
    title: "Custom Clearance",
    desc: "Regulatory documentation handled expertly for zero shipment delays."
  },
  {
    icon: "🤝",
    title: "Freight Coordination",
    desc: "Comprehensive carrier & shipment management across all trade lanes."
  },
  {
    icon: "🛢️",
    title: "Metal Scraping",
    desc: "We deal in all types of metal scrap including HMS 1, HMS 2, Shredded Scrap, etc."
  },
  {
    icon: "🌍",
    title: "International Sourcing",
    desc: "We source all types of metal scrap including HMS 1, HMS 2, Shredded Scrap, etc."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-brand-secondary mb-4">COMPREHENSIVE LOGISTIC SOLUTIONS</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 bg-brand-light-green w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300 group-hover:bg-opacity-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
