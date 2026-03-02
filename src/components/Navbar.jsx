import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Products', to: 'products' },
  { label: 'Usage', to: 'usage' },
  { label: 'Coverage', to: 'coverage' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl shadow-navy-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={600}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-[0_0_16px_rgba(0,201,167,0.7)] border border-teal-300/50 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,201,167,0.9)] transition-all duration-300">
              <Droplets className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow" />
              <span className="absolute inset-0 rounded-xl animate-pulse-slow bg-teal-400/20" />
            </div>
            <div className="hidden xs:block">
              <p className="text-white font-extrabold text-sm sm:text-base leading-tight tracking-wide drop-shadow">
                Kumar Pure Water
              </p>
              <p className="text-teal-400 text-[0.65rem] sm:text-xs font-semibold leading-tight tracking-widest uppercase">
                Solution Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                spy
                onSetActive={() => setActiveSection(link.to)}
                className={`px-3 lg:px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-300 ${
                  activeSection === link.to
                    ? 'text-teal-500 bg-teal-500/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contact"
              smooth
              duration={600}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900/98 backdrop-blur-md px-4 pb-4 pt-2 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth
            duration={600}
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl text-center cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
