// "use client";

// import { motion } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';

// export default function CustomClearance() {
//   const points = [
//     "Expert handling of customs documentation",
//     "Zero shipment delays",
//     "Regulatory compliance across all trade lanes",
//     "Real-time status updates"
//   ];

//   return (
//     <section className="py-24 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-8 leading-tight">
//               Hassle-Free <br /><span className="text-brand-primary">Custom Clearance.</span>
//             </h2>

//             <ul className="space-y-6 mb-10">
//               {points.map((point, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
//                   className="flex items-start gap-4"
//                 >
//                   <CheckCircle2 className="text-brand-accent mt-1 shrink-0" size={24} />
//                   <span className="text-xl text-gray-700 font-medium">{point}</span>
//                 </motion.li>
//               ))}
//             </ul>

//             <a
//               href="https://wa.me/919669510699"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
//             >
//               Start Clearance Process
//             </a>

//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
//             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="absolute inset-0 bg-brand-primary rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
//             <img
//               src="/custom-clear.jpeg"
//               alt="Container Port"
//               className="rounded-3xl shadow-xl w-full h-[800px] object-cover relative z-10"
//             />

//             {/* Floating mini card */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="absolute -bottom-8 -left-8 bg-white p-5 rounded-xl shadow-xl border border-gray-100 z-20 flex hidden md:flex items-center gap-4"
//             >
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-brand-primary">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>

//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 md:mb-8 leading-tight">
              Hassle-Free <br />
              <span className="text-brand-primary">Custom Clearance.</span>
            </h2>

            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <CheckCircle2 className="text-brand-accent mt-1 shrink-0" size={22} />
                  <span className="text-base md:text-lg lg:text-xl text-gray-700 font-medium">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/919669510699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              Start Clearance Process
            </a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            {/* Background shadow card */}
            <div className="absolute inset-0 bg-brand-primary rounded-3xl translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 opacity-10"></div>

            {/* Responsive Image Wrapper */}
            <div className="relative z-10 w-full">
              <img
                src="/custom-clear.jpeg"
                alt="Custom Clearance Process"
                className="
                  w-full 
                  h-auto 
                  max-h-[500px] md:max-h-[650px] lg:max-h-[750px]
                  object-contain 
                  rounded-3xl 
                  shadow-xl
                "
              />
            </div>

            {/* Floating mini card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-5 rounded-xl shadow-xl border border-gray-100 z-20 hidden md:flex items-center gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center text-brand-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}