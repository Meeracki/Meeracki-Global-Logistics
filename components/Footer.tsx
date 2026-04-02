"use client";

import Link from "next/link";
<html suppressHydrationWarning></html>
import { Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f0a] border-t border-white/10 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-brand-accent">Meeracki</span> Global
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">
              Simplifying Global Trade. We specialize in seamless door-to-door logistics and customs clearance for B2B clients across the globe.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#home" className="hover:text-brand-accent">Home</Link></li>
              <li><Link href="#about" className="hover:text-brand-accent">About Us</Link></li>
              <li><Link href="#docs" className="hover:text-brand-accent">Documentation</Link></li>
              <li><Link href="#faq" className="hover:text-brand-accent">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-brand-accent">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="hover:text-brand-accent">Sea Freight</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent">Air Freight</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent">Door-to-Door</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent">Customs Clearance</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent">Bulk Cargo</Link></li>
            </ul>
          </div>

          {/* CERTIFICATIONS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Certifications</h4>

            <div className="flex flex-col gap-4">

              {/* CERT 1 */}
              <div className="group relative flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 cursor-pointer">
                <Award className="text-brand-accent" size={22} />
                <span className="font-semibold text-sm">DPIIT-STARTUP-INDIA</span>

                {/* Hover Image */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-300 pointer-events-none z-50">
                  <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl shadow-xl border border-white/10">
                    <img
                      src="/certificates/DPIIT-STARTUP-INDIA.png"
                      className="w-56 h-auto rounded-lg"
                      alt="ISO Certificate"
                    />
                  </div>
                </div>
              </div>

              {/* CERT 2 */}
              <div className="group relative flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-semibold text-sm">Euroswiss-Certification</span>

                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-300 pointer-events-none z-50">
                  <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl shadow-xl border border-white/10">
                    <img
                      src="/certificates/Euroswiss-Certification.png"
                      className="w-56 h-auto rounded-lg"
                      alt="Euroswiss-Certification"
                    />
                  </div>
                </div>
              </div>

              {/* CERT 3 */}
              <div className="group relative flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 cursor-pointer">
                <Award className="text-green-400" size={22} />
                <span className="font-semibold text-sm">UDYAM-CERTIFIED</span>

                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-300 pointer-events-none z-50">
                  <div className="bg-black/80 backdrop-blur-md p-2 rounded-xl shadow-xl border border-white/10">
                    <img
                      src="/certificates/UDYAM-CERTIFIED.png"
                      className="w-56 h-auto rounded-lg"
                      alt="UDYAM-CERTIFIED"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Meeracki Global Logistics Pvt. Ltd. All rights reserved. |
            Designed by{" "}
            <a
              href="https://www.architchandrakar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] font-medium hover:underline"
            >
              Archit Chandrakar
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}