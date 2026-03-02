import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Award, Shield, Zap } from 'lucide-react';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-bg.png';

const badges = [
  { icon: Award, label: 'Since 1999' },
  { icon: Shield, label: 'Govt. Certified' },
  { icon: Zap, label: '50,000 LPH' },
];

const bubbleData = [
  { size: 40, left: '10%', delay: '0s', duration: '9s' },
  { size: 20, left: '20%', delay: '2s', duration: '7s' },
  { size: 60, left: '35%', delay: '4s', duration: '11s' },
  { size: 30, left: '55%', delay: '1s', duration: '8s' },
  { size: 50, left: '70%', delay: '3s', duration: '10s' },
  { size: 25, left: '80%', delay: '5s', duration: '6s' },
  { size: 45, left: '90%', delay: '0.5s', duration: '9s' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const bg = heroRef.current.querySelector('.hero-bg');
      if (bg) bg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax Background — real photo */}
      <div className="hero-bg absolute inset-0 scale-100 transition-transform duration-100">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
          style={{ display: 'block' }}
          fetchpriority="high"
        />
      </div>

      {/* Dark overlay for text legibility — stronger at top & bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

      {/* Subtle blue tint to keep brand feel */}
      <div className="absolute inset-0 bg-brand-900/25" />

      {/* Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbleData.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10 bg-white/5"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: '-5rem',
              animationName: 'bubble',
              animationDuration: b.duration,
              animationDelay: b.delay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Tag */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 bg-white/15 border border-white/30 rounded-full text-white text-xs sm:text-sm font-medium mb-6 md:mb-8 backdrop-blur-sm transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-0.5 flex-shrink-0">
            <img src={logo} alt="KPWS Logo" className="w-full h-full object-contain" />
          </div>
          Northern India&apos;s Trusted Water Treatment Company
        </div>

        {/* Main Heading */}
        <h1
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 md:mb-6 transition-all duration-700 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 4px 40px rgba(0,0,0,0.4)' }}
        >
          Northern India&apos;s{' '}
          <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
            Leading RO
          </span>
          <br className="hidden sm:block" />
          {' & Water Treatment'}
          <br />
          <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
            Experts
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-base sm:text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto mb-8 md:mb-10 tracking-wide transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Commercial&nbsp;&bull;&nbsp;Industrial&nbsp;&bull;&nbsp;Domestic Water Solutions{' '}
          <span className="text-accent-300 font-semibold">Since 1999</span>
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-14 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            to="contact"
            smooth
            duration={800}
            className="w-full xs:w-auto px-7 py-3.5 bg-white text-brand-700 font-bold rounded-xl shadow-xl shadow-white/20 hover:-translate-y-1 hover:shadow-white/40 transition-all duration-300 text-sm sm:text-base cursor-pointer text-center"
          >
            Get a Free Quote
          </Link>
          <Link
            to="products"
            smooth
            duration={800}
            className="w-full xs:w-auto px-7 py-3.5 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/15 hover:border-white transition-all duration-300 text-sm sm:text-base cursor-pointer text-center backdrop-blur-sm"
          >
            Explore Our Solutions
          </Link>
        </div>

        {/* Badges */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full text-white/90 text-xs sm:text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Icon className="w-4 h-4 text-accent-300" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
