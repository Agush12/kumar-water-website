import { Link } from 'react-scroll';
import { Droplets, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About Us', to: 'about' },
  { label: 'Industry Experience', to: 'experience' },
  { label: 'Products', to: 'products' },
  { label: 'Area of Usage', to: 'usage' },
  { label: 'Coverage', to: 'coverage' },
  { label: 'Contact', to: 'contact' },
];

const services = [
  'Commercial RO Plants',
  'Industrial RO Plants',
  'Sewage Treatment (STP)',
  'Effluent Treatment (ETP)',
  'Water Treatment (WTP)',
  'Swimming Pool Systems',
  'Hydraulic & Fountains',
  'AMC & After-Sales Service',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#072538] text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z" fill="#072538" />
        </svg>
      </div>

      {/* BG decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Kumar Pure Water</p>
                <p className="text-teal-500 text-xs font-medium">Solution Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Northern India&apos;s leading assembler & installer of RO plants, STP, ETP and water treatment
              systems since 1999.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="tel:+919837032425"
                className="flex items-center gap-2.5 text-white/60 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                +91 98370 32425
              </a>
              <a
                href="mailto:kpwsagra@gmail.com"
                className="flex items-center gap-2.5 text-white/60 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                kpwsagra@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>109/1, Sector 15B, Awas Vikas Colony, Near Karkunj, Agra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    className="text-white/50 hover:text-teal-400 text-sm transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-white/50 text-sm flex items-center gap-2 group hover:text-teal-400 transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-teal-500/50 group-hover:bg-teal-400 transition-colors flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Get In Touch</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Ready to install a water treatment system? Talk to our experts today.
            </p>
            <Link
              to="contact"
              smooth
              duration={600}
              className="block w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold rounded-xl text-center cursor-pointer hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300 mb-3"
            >
              Request Free Quote
            </Link>
            <a
              href="https://wa.me/919837032425"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-bold rounded-xl text-center hover:bg-green-500/30 transition-colors duration-300"
            >
              WhatsApp Us
            </a>

            {/* Hours */}
            <div className="mt-5 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-white/70 text-xs font-bold uppercase tracking-wide mb-2">Business Hours</p>
              <p className="text-white/50 text-xs">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-white/50 text-xs">Sun: 10:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Kumar Pure Water Solution Pvt. Ltd. All rights reserved.
            &nbsp;|&nbsp; Agra, Uttar Pradesh, India
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/30 text-xs">Directors: Brijesh Sharma &amp; Ankur Sharma</p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-teal-500/20 border border-teal-500/30 rounded-lg flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
