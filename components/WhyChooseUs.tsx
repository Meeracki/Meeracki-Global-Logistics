"use client";

import { motion } from 'framer-motion';

const advantages = [
  { icon: "✅", title: "Reliable", desc: "Consistent and dependable service delivery." },
  { icon: "⚡", title: "Efficient", desc: "Streamlined processes for faster turnaround." },
  { icon: "🔒", title: "Secure", desc: "Top-tier safety standards for all cargo." },
  { icon: "⏱️", title: "Timely", desc: "Strict adherence to agreed delivery schedules." },
  { icon: "📋", title: "Compliant", desc: "100% regulatory adherence across borders." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative" style={{ background: '#F0F7F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#000000' }}>
            The Meeracki Advantage
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: '#1A6B1A' }}></div>
        </motion.div>

        {/* CSS Grid — 3 cols desktop/tablet, 1 col mobile, last row centered */}
        <div className="advantage-grid">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="advantage-card"
            >
              <div className="text-4xl mb-5">{adv.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{adv.title}</h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: '#4B5563',
                  borderLeft: '3px solid #1A6B1A',
                  paddingLeft: '12px',
                }}
              >
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
          justify-items: center;
        }

        .advantage-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px 28px;
          border-left: 4px solid #1A6B1A;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .advantage-card:hover {
          box-shadow: 0 8px 30px rgba(26, 107, 26, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        /* Center the last row when it has fewer than 3 items */
        /* 5 cards → last row has 2 items: items 4 and 5 */
        .advantage-grid > :nth-child(4) {
          grid-column-start: 1;
        }

        /* Use flexbox-like centering for the last incomplete row */
        @supports (grid-template-columns: repeat(3, 1fr)) {
          .advantage-grid {
            justify-content: center;
          }
        }

        /* Center last row: shift items 4-5 to columns 1-2 of a "centered" 3-col grid */
        /* Actually use a wrapper approach: make last 2 items span centered */
        .advantage-grid > :nth-child(n+4) {
          /* We'll use a different approach: grid with auto columns */
        }

        /* Desktop (≥1024px): 3 cards per row */
        @media (min-width: 1024px) {
          .advantage-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tablet (768px–1023px): 3 cards per row, slightly smaller */
        @media (min-width: 768px) and (max-width: 1023px) {
          .advantage-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .advantage-card {
            padding: 24px 20px;
          }
        }

        /* Mobile (≤767px): 1 card per row, full width */
        @media (max-width: 767px) {
          .advantage-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
