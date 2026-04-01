"use client";

import { motion } from 'framer-motion';

export default function TradeRoutes() {
  // Approximate route coordinates from India center out.
  const routeConfigs = [
    { d: "M 450 250 Q 550 150 700 150", delay: 0 },   // To Southeast Asia / East
    { d: "M 450 250 Q 350 200 250 150", delay: 0.2 }, // To Europe / UK
    { d: "M 450 250 Q 300 280 200 350", delay: 0.4 }, // To Africa
    { d: "M 450 250 Q 150 150 50 150", delay: 0.6 },  // To USA (conceptual curve off map left)
  ];

  const pins = [
    { x: '450px', y: '250px', label: 'India 🇮🇳', size: 'lg' },
    { x: '350px', y: '220px', label: 'UAE 🇦🇪', size: 'sm' },
    { x: '250px', y: '150px', label: 'UK 🇬🇧', size: 'sm' },
    { x: '100px', y: '160px', label: 'USA 🇺🇸', size: 'sm' },
    { x: '580px', y: '180px', label: 'China 🇨🇳', size: 'sm' },
    { x: '600px', y: '280px', label: 'Singapore 🇸🇬', size: 'sm' },
    { x: '250px', y: '300px', label: 'Kenya 🇰🇪', size: 'sm' },
  ];

  return (
    <section id="routes" className="py-24 bg-[#0a1128] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Global Reach</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mb-6"></div>
        </motion.div>

      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] mt-8 mb-16">
         {/* Background World Map Vector Conceptual */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-contain bg-no-repeat"></div>

         {/* Animated SVG Container */}
         <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
           {routeConfigs.map((route, idx) => (
             <motion.path
               key={idx}
               d={route.d}
               fill="transparent"
               stroke="#1A6B1A"
               strokeWidth="3"
               strokeDasharray="8 8"
               initial={{ pathLength: 0, opacity: 0 }}
               whileInView={{ pathLength: 1, opacity: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 2, delay: route.delay, ease: "easeInOut" }}
               style={{ filter: 'drop-shadow(0 0 5px #1A6B1A)' }}
             />
           ))}

           {routeConfigs.map((route, idx) => (
              <motion.circle
                 key={`ship-${idx}`}
                 r="6"
                 fill="#C9A84C"
                 style={{ filter: 'drop-shadow(0 0 5px #C9A84C)' }}
                 initial={{ offsetDistance: "0%", opacity: 0 }}
                 whileInView={{ offsetDistance: "100%", opacity: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ 
                   duration: 4, 
                   delay: route.delay + 1, 
                   ease: "easeInOut",
                   repeat: Infinity,
                   repeatType: "loop",
                   repeatDelay: 2
                 }}
              >
                <animateMotion dur="4s" repeatCount="indefinite" path={route.d}>
                  <mpath href={`#path-${idx}`} />
                </animateMotion>
              </motion.circle>
           ))}
         </svg>

         {/* Map Pins */}
         {pins.map((pin, index) => (
            <motion.div
               key={index}
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 1 + index * 0.1, type: 'spring' }}
               className="absolute z-10 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
               style={{ left: pin.x, top: pin.y }}
            >
               <div className={`w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_15px_#C9A84C] mb-1 ${pin.size === 'lg' ? 'w-4 h-4' : ''}`}></div>
               <div className="bg-white/10 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-bold whitespace-nowrap border border-white/20">
                 {pin.label}
               </div>
            </motion.div>
         ))}

      </div>
      
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, delay: 1.5 }}
         className="text-center relative z-20"
      >
        <p className="text-xl text-green-100 font-medium">
          "Connecting India to the world through trusted logistics partnerships."
        </p>
      </motion.div>
    </section>
  );
}
