import { useInView } from 'react-intersection-observer';
import {
  Home, Hotel, School, FlaskConical, Package, Pill,
  Waves, Bird, Factory, Droplets,
} from 'lucide-react';

const usageCategories = [
  { icon: Home,          title: 'Homes & Offices',       description: 'Pure water for daily living and workspace hydration',    color: '#2563EB' },
  { icon: Hotel,         title: 'Hotels & Restaurants',   description: 'Food-safe purification for kitchens and guest supply',   color: '#F59E0B' },
  { icon: School,        title: 'Schools & Hospitals',    description: 'Safe drinking water for students, staff and patients',   color: '#06B6D4' },
  { icon: FlaskConical,  title: 'Laboratories',           description: 'Ultra-pure water for research and testing environments', color: '#8B5CF6' },
  { icon: Package,       title: 'Bottling Plants',        description: 'High-volume RO for mineral water and beverage lines',    color: '#3B82F6' },
  { icon: Pill,          title: 'Pharmaceuticals',        description: 'Pharma-grade pure water meeting regulatory norms',       color: '#EF4444' },
  { icon: Waves,         title: 'Swimming Pools',         description: 'Hygienic pool water treatment and chemical balancing',   color: '#10B981' },
  { icon: Bird,          title: 'Hatcheries & Poultry',   description: 'Safe water systems for livestock health & productivity', color: '#84CC16' },
  { icon: Factory,       title: 'Industries',             description: 'Process water & effluent management for manufacturing', color: '#F97316' },
];

function UsageCard({ icon: Icon, title, description, color, index, inView }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}50`;
        e.currentTarget.style.boxShadow = `0 12px 40px ${color}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#f3f4f6';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Subtle top color strip */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}50, ${color}20)` }} />

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color}06 0%, transparent 70%)` }}
      />

      <div className="relative z-10 p-5 sm:p-6 min-h-[9rem] flex flex-col">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
          style={{ background: `${color}10`, border: `1.5px solid ${color}25` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <h3 className="text-brand-950 font-bold text-sm sm:text-base leading-tight mb-1.5">{title}</h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300 flex-grow">
          {description}
        </p>

        {/* Bottom accent bar */}
        <div
          className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export default function Usage() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="usage" className="py-16 md:py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-brand-200 rounded-full text-brand-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Droplets className="w-4 h-4" />
            Area of Usage
          </div>
          <h2 className="section-title">
            Where Our Solutions{' '}
            <span className="text-gradient">Make a Difference</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Serving every sector that needs pure, reliable and safe water — from homes to industries.
          </p>
        </div>

        {/* 3×3 Grid */}
        <div ref={ref} className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {usageCategories.map((cat, index) => (
            <UsageCard key={cat.title} {...cat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
