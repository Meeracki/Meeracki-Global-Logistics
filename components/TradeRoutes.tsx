"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const WorldMap = dynamic(() => import('./WorldMap'), { ssr: false });

/* ─── Country pin data ──────────────────────────────────────────── */
// SVG viewBox is 1000 x 500 — positions approximate Mercator projection
const countries = [
  // Origin
  { id: 'india', x: 620, y: 235, label: 'Origin 🇮🇳', isOrigin: true },
  // Destinations
  { id: 'usa',          x: 155, y: 175, label: 'USA 🇺🇸' },
  { id: 'uk',           x: 430, y: 130, label: 'UK 🇬🇧' },
  { id: 'uae',          x: 575, y: 225, label: 'UAE 🇦🇪' },
  { id: 'china',        x: 720, y: 180, label: 'China 🇨🇳' },
  { id: 'singapore',    x: 710, y: 290, label: 'Singapore 🇸🇬' },
  { id: 'kenya',        x: 540, y: 310, label: 'Kenya 🇰🇪' },
  { id: 'russia',       x: 620, y: 100, label: 'Russia 🇷🇺' },
  { id: 'germany',      x: 460, y: 140, label: 'Germany 🇩🇪' },
  { id: 'australia',    x: 790, y: 380, label: 'Australia 🇦🇺' },
  { id: 'japan',        x: 810, y: 175, label: 'Japan 🇯🇵' },
  { id: 'brazil',       x: 270, y: 340, label: 'Brazil 🇧🇷' },
  { id: 'south_africa', x: 490, y: 395, label: 'South Africa 🇿🇦' },
];

const INDIA = countries[0]; // origin

/* ─── Build bezier route paths from India to each destination ──── */
function buildRoute(dest: { x: number; y: number }) {
  const sx = INDIA.x;
  const sy = INDIA.y;
  const ex = dest.x;
  const ey = dest.y;
  // Control point — push curve upward/sideways for a nice arc
  const mx = (sx + ex) / 2;
  const my = Math.min(sy, ey) - 40 - Math.abs(ex - sx) * 0.12;
  return `M ${sx} ${sy} Q ${mx} ${my} ${ex} ${ey}`;
}

const destinations = countries.filter(c => !c.isOrigin);

/* ─── Simplified SVG world map paths ────────────────────────────── */
// Highly simplified continent outlines for a 1000×500 viewBox
const continentPaths = [
  // North America
  "M 55 85 L 90 70 L 130 65 L 195 80 L 230 105 L 255 130 L 240 155 L 215 180 L 190 200 L 165 215 L 140 230 L 120 225 L 100 210 L 90 190 L 80 165 L 65 140 L 55 110 Z",
  // Central America & Caribbean
  "M 140 230 L 160 240 L 175 255 L 180 270 L 170 280 L 155 275 L 145 260 L 135 245 Z",
  // South America
  "M 195 280 L 230 270 L 265 275 L 290 295 L 305 320 L 310 345 L 300 370 L 285 395 L 265 415 L 245 425 L 230 420 L 220 400 L 215 375 L 210 350 L 205 325 L 200 300 Z",
  // Europe
  "M 420 75 L 440 70 L 465 72 L 485 80 L 500 95 L 510 115 L 505 135 L 490 148 L 470 155 L 450 150 L 435 140 L 425 125 L 418 105 L 415 90 Z",
  // Africa
  "M 430 195 L 455 185 L 480 190 L 510 205 L 535 225 L 550 250 L 555 280 L 550 310 L 535 340 L 515 365 L 495 385 L 475 395 L 455 390 L 440 370 L 435 345 L 432 315 L 430 285 L 428 255 L 425 225 Z",
  // Russia / Northern Asia
  "M 510 60 L 550 50 L 600 45 L 660 50 L 720 55 L 780 65 L 820 75 L 840 60 L 810 90 L 770 100 L 720 105 L 660 108 L 610 110 L 560 105 L 530 95 L 515 80 Z",
  // Middle East
  "M 530 175 L 555 165 L 580 170 L 600 185 L 610 200 L 600 215 L 580 220 L 555 218 L 540 205 L 530 190 Z",
  // India
  "M 610 185 L 625 180 L 640 190 L 645 210 L 640 235 L 630 255 L 620 265 L 610 260 L 605 240 L 600 215 L 605 200 Z",
  // East Asia (China, Korea, Japan)
  "M 680 120 L 720 115 L 760 120 L 790 140 L 800 165 L 790 185 L 770 195 L 745 200 L 720 195 L 700 185 L 688 170 L 680 150 Z",
  // Southeast Asia
  "M 700 235 L 725 225 L 750 230 L 765 245 L 760 265 L 745 280 L 725 290 L 705 285 L 695 265 L 695 250 Z",
  // Australia
  "M 750 340 L 785 325 L 825 330 L 850 345 L 860 370 L 845 395 L 820 410 L 790 415 L 760 400 L 748 375 L 745 355 Z",
  // Greenland
  "M 310 30 L 340 25 L 365 30 L 375 50 L 365 65 L 340 70 L 320 60 L 310 45 Z",
];

/* ─── India highlight shape (slightly larger for glow effect) ──── */
const indiaPath = "M 610 185 L 625 180 L 640 190 L 645 210 L 640 235 L 630 255 L 620 265 L 610 260 L 605 240 L 600 215 L 605 200 Z";

export default function TradeRoutes() {
  return (
    <section id="routes" className="py-24 overflow-hidden relative" style={{ background: '#0D1B2A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Global Reach</h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: '#C9A84C' }}></div>
        </motion.div>
      </div>

{/* ── Interactive World Map with Routes ── */}
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <WorldMap countries={countries} />
        </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center relative z-20 mt-12"
      >
        <p className="text-xl font-medium" style={{ color: '#a8e6a8' }}>
          &ldquo;Connecting India to the world through trusted logistics partnerships.&rdquo;
        </p>
      </motion.div>

      {/* CSS keyframes for pulsing */}
      <style jsx>{`
        @keyframes pulse-pin {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
