import Link from 'next/link';
import { Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f0a] border-t border-white/10 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-brand-accent">Meeracki</span> Global
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Simplifying Global Trade. We specialize in seamless door-to-door logistics and customs clearance for B2B clients across the globe.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#home" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="#docs" className="hover:text-brand-accent transition-colors">Documentation</Link></li>
              <li><Link href="#faq" className="hover:text-brand-accent transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#services" className="hover:text-brand-accent transition-colors">Sea Freight</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent transition-colors">Air Freight</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent transition-colors">Door-to-Door</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent transition-colors">Customs Clearance</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent transition-colors">Bulk Cargo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Certifications</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Award className="text-brand-accent" size={24} />
                <span className="font-semibold text-sm">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="font-semibold text-sm">DPIIT Startup India</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          {/* <p>&copy; {new Date().getFullYear()} Meeracki Global Logistics Pvt. Ltd. All rights reserved.</p> */}

          <p>
            &copy; {new Date().getFullYear()} Meeracki Global Logistics Pvt. Ltd. All rights reserved. |
            Designed by{" "}
            <a
              href="https://www.architchandrakar.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}
            >
              Archit Chandrakar
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
