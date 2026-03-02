import { useInView } from 'react-intersection-observer';
import {
  Home, Hotel, School, FlaskConical, Package, Pill,
  Waves, Bird, Factory, Droplets,
} from 'lucide-react';

const usageCategories = [
  {
    icon: Home,
    title: 'Homes & Offices',
    description: 'Pure water for daily living and workspace hydration',
    bg: 'from-slate-700 to-slate-900',
    accent: '#00C9A7',
  },
  {
    icon: Hotel,
    title: 'Hotels & Restaurants',
    description: 'Food-safe purification for kitchens and guest supply',
    bg: 'from-amber-700 to-amber-900',
    accent: '#f59e0b',
  },
  {
    icon: School,
    title: 'Schools & Hospitals',
    description: 'Safe drinking water for students, staff and patients',
    bg: 'from-blue-700 to-blue-900',
    accent: '#3b82f6',
  },
  {
    icon: FlaskConical,
    title: 'Laboratories',
    description: 'Ultra-pure water for research and testing environments',
    bg: 'from-purple-700 to-purple-900',
    accent: '#8b5cf6',
  },
  {
    icon: Package,
    title: 'Bottling Plants',
    description: 'High-volume RO for mineral water and beverage production',
    bg: 'from-cyan-700 to-cyan-900',
    accent: '#06b6d4',
  },
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'Pharmaceutical-grade pure water meeting regulatory norms',
    bg: 'from-rose-700 to-rose-900',
    accent: '#f43f5e',
  },
  {
    icon: Waves,
    title: 'Swimming Pools',
    description: 'Hygienic pool water treatment and chemical balancing',
    bg: 'from-teal-700 to-teal-900',
    accent: '#14b8a6',
  },
  {
    icon: Bird,
    title: 'Hatcheries & Poultry',
    description: 'Safe water systems for livestock health and productivity',
    bg: 'from-lime-700 to-lime-900',
    accent: '#84cc16',
  },
  {
    icon: Factory,
    title: 'Industries',
    description: 'Process water & effluent management for manufacturing',
    bg: 'from-orange-700 to-orange-900',
    accent: '#f97316',
  },
];

function UsageCard({ icon: Icon, title, description, bg, accent, index, inView }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bg} transition-all duration-500`} />
      
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${accent}30 0%, transparent 70%)` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

      {/* Decorative circle */}
      <div
        className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: accent }}
      />

      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6 h-full min-h-[10rem] flex flex-col justify-between">
        <div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
            style={{ background: `${accent}30`, border: `1.5px solid ${accent}60` }}
          >
            <Icon className="w-5 h-5" style={{ color: accent }} />
          </div>
          <h3 className="text-white font-bold text-sm sm:text-base leading-tight mb-1.5">{title}</h3>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom accent bar */}
        <div
          className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
          style={{ background: accent }}
        />
      </div>
    </div>
  );
}

export default function Usage() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="usage" className="py-16 md:py-24 bg-navy-gradient relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              background: '#00C9A7',
              top: `${10 + i * 18}%`,
              left: `${i % 2 === 0 ? 5 + i * 3 : 70 + i * 2}%`,
              filter: 'blur(20px)',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Droplets className="w-4 h-4" />
            Area of Usage
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Where Our Solutions{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Make a Difference
            </span>
          </h2>
          <p className="text-white/50 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Serving every sector that needs pure, reliable and safe water — from homes to industries.
          </p>
        </div>

        {/* 3×3 Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
        >
          {usageCategories.map((cat, index) => (
            <UsageCard key={cat.title} {...cat} index={index} inView={inView} />
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}
