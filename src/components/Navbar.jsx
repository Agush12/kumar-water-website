import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Products', to: 'products' },
  { label: 'Experience', to: 'experience' },
  { label: 'Usage', to: 'usage' },
  { label: 'Coverage', to: 'coverage' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-brand-900/5 border-b border-brand-100/50'
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
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-110 group-hover:shadow-brand-500/40 transition-all duration-300 p-1 border border-brand-100">
              <img src={logo} alt="Kumar Pure Water Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden xs:block">
              <p className={`font-extrabold text-sm sm:text-base leading-tight tracking-wide drop-shadow-sm ${
                scrolled ? 'text-brand-900' : 'text-white'
              } transition-colors duration-500`}>
                Kumar Pure Water
              </p>
              <p className={`text-[0.65rem] sm:text-xs font-semibold leading-tight tracking-widest uppercase ${
                scrolled ? 'text-brand-500' : 'text-brand-200'
              } transition-colors duration-500`}>
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
                    ? scrolled
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-slate-600 hover:text-brand-600 hover:bg-brand-50'
                      : 'text-white/85 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contact"
              smooth
              duration={600}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-brand-800 hover:bg-brand-50' : 'text-white hover:bg-white/15'
            }`}
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
        <div className="bg-white/85 backdrop-blur-2xl px-4 pb-4 pt-2 space-y-1 border-t border-white/40 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-extrabold transition-all duration-300 cursor-pointer hover:bg-white/70" style={{ color: "#0f172a" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth
            duration={600}
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold rounded-xl text-center cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}


