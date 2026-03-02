import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Building2, Stethoscope, GraduationCap, Train,
  Hotel, Factory, Newspaper, Droplets, ChevronLeft, ChevronRight,
} from 'lucide-react';

const sectors = [
  {
    icon: Shield,
    title: 'Government & Defence',
    clients: ['U.P. Police', 'Uttarakhand Police', 'Indian Air Force', 'Army Units'],
    color: '#00C9A7',
    glow: 'rgba(0,201,167,0.3)',
  },
  {
    icon: Stethoscope,
    title: 'Hospitals & Medical',
    clients: ['Multi-specialty Hospitals', 'Clinics & Labs', 'Pharmaceutical Plants', 'Blood Banks'],
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.3)',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    clients: ['Schools', 'Colleges', 'Universities', 'Research Institutes'],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    clients: ['Hotels', 'Restaurants', 'Resorts', 'Banquet Halls'],
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    icon: Train,
    title: 'Railways & Transport',
    clients: ['Railway Stations', 'Bus Terminals', 'Roadways', 'Transit Hubs'],
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.3)',
  },
  {
    icon: Newspaper,
    title: 'Media & Corporate',
    clients: ['Amar Ujala Group', 'Corporate Offices', 'IT Parks', 'Business Centers'],
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: Factory,
    title: 'Industries',
    clients: ['Manufacturing Plants', 'Textile Mills', 'Food Processing', 'Chemical Plants'],
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    clients: ['Housing Societies', 'Residential Complexes', 'Townships', 'Commercial Plazas'],
    color: '#f97316',
    glow: 'rgba(249,115,22,0.3)',
  },
];

function SectorCard({ icon: Icon, title, clients, color, glow, index, inView }) {
  return (
    <div
      className={`flex-shrink-0 w-64 sm:w-72 rounded-2xl p-6 border transition-all duration-500 hover:-translate-y-2 cursor-default group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'rgba(11, 60, 93, 0.6)',
        backdropFilter: 'blur(12px)',
        borderColor: `${color}40`,
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${glow}, 0 0 60px ${glow}50`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = `${color}40`;
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${color}20`, border: `1.5px solid ${color}60` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <h3 className="text-white font-bold text-base mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {clients.map((c) => (
          <li key={c} className="flex items-center gap-2 text-white/60 text-sm">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const scrollRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-navy-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Droplets className="w-4 h-4" />
            Industry Experience
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Trusted Across{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Every Sector
            </span>
          </h2>
          <p className="text-white/50 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            From government defence units to five-star hotels — our installations speak for themselves.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-navy-900/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-navy-900/80 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 hide-scrollbar px-1"
          >
            {sectors.map((sector, i) => (
              <SectorCard key={sector.title} {...sector} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Notable Projects Banner */}
        <div
          className={`mt-10 md:mt-14 p-6 sm:p-8 rounded-2xl border border-teal-500/20 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ background: 'rgba(0,201,167,0.08)' }}
        >
          <h3 className="text-white font-bold text-base sm:text-lg mb-5 text-center">
            Notable Installations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'U.P. Police HQ', 'Uttarakhand Police', 'Indian Air Force Base',
              'Army Canteen', 'Amar Ujala Group', 'IRCTC Units',
              'Multi-specialty Hospitals', 'IIT Outreach', 'Highway Plazas',
            ].map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 text-xs sm:text-sm text-teal-300 border border-teal-500/30 rounded-full hover:bg-teal-500/20 hover:border-teal-400 transition-all duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}
