import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Building2, Stethoscope, GraduationCap, Train,
  Hotel, Factory, Newspaper, ChevronLeft, ChevronRight, Siren,
} from 'lucide-react';
import logo from '../assets/logo.png';

const sectors = [
  {
    icon: Building2,
    title: 'Government Agencies',
    badge: 'GOVT.',
    clients: [
      'U.P. Police & PAC',
      'Uttarakhand Police',
      'Judge Compound & Court',
      'Nagar Nigam',
    ],
    color: '#2563EB',
  },
  {
    icon: Shield,
    title: 'Defence Forces',
    badge: 'DEFENCE',
    clients: [
      'Indian Air Force',
      'Indian Army',
      'ITBP',
      'NDRF',
      'SSB',
    ],
    color: '#0F172A',
  },
  {
    icon: Stethoscope,
    title: 'Hospitals & Medical',
    badge: 'MEDICAL',
    clients: [
      'Multi-specialty Hospitals',
      'Dialysis Plants',
      'Pharmaceutical Plants',
      'Clinics & Blood Banks',
    ],
    color: '#06B6D4',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    badge: 'EDUCATION',
    clients: [
      'Schools & Colleges',
      'Universities',
      'Research Institutes',
      'Hostels & Canteens',
    ],
    color: '#8B5CF6',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    badge: 'HOSPITALITY',
    clients: [
      'Hotels & Resorts',
      'Restaurants',
      'Banquet Halls',
      'Guest Houses',
    ],
    color: '#F59E0B',
  },
  {
    icon: Train,
    title: 'Railways & Transport',
    badge: 'TRANSPORT',
    clients: [
      'UPSRTC Bus Depots',
      'Railway Stations',
      'Highway Rest Areas',
      'Transit Hubs',
    ],
    color: '#EF4444',
  },
  {
    icon: Newspaper,
    title: 'Media & Corporate',
    badge: 'CORPORATE',
    clients: [
      'Amar Ujala Group',
      'MNC Offices',
      'IT & Business Parks',
      'Corporate Campuses',
    ],
    color: '#10B981',
  },
  {
    icon: Factory,
    title: 'Industries',
    badge: 'INDUSTRY',
    clients: [
      'Manufacturing Plants',
      'Food Processing Units',
      'Textile Mills',
      'Chemical Plants',
    ],
    color: '#F97316',
  },
  {
    icon: Siren,
    title: 'Special Forces',
    badge: 'SPECIAL',
    clients: [
      'Indian Special Forces',
      'Para-military Units',
      'Border Security',
      'Central Armed Forces',
    ],
    color: '#64748B',
  },
];

const notableInstallations = [
  { label: 'U.P. Police & PAC',        category: 'Govt.' },
  { label: 'Uttarakhand Police',        category: 'Govt.' },
  { label: 'Indian Air Force',          category: 'Defence' },
  { label: 'Indian Army',               category: 'Defence' },
  { label: 'Indian Special Forces',     category: 'Defence' },
  { label: 'ITBP / NDRF / SSB',         category: 'Defence' },
  { label: 'Amar Ujala Group',          category: 'Media' },
  { label: 'MNCs',                      category: 'Corporate' },
  { label: 'UPSRTC Units',              category: 'Transport' },
  { label: 'Universities',              category: 'Education' },
  { label: 'Multi-specialty Hospitals', category: 'Medical' },
  { label: 'Dialysis Plants',           category: 'Medical' },
];

const categoryColors = {
  'Govt.':     { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   dot: 'bg-blue-500'   },
  'Defence':   { bg: 'bg-slate-50',  border: 'border-slate-300',  text: 'text-slate-700',  dot: 'bg-slate-500'  },
  'Media':     { bg: 'bg-green-50',  border: 'border-green-200',  text: 'text-green-700',  dot: 'bg-green-500'  },
  'Corporate': { bg: 'bg-emerald-50',border: 'border-emerald-200',text: 'text-emerald-700',dot: 'bg-emerald-500'},
  'Transport': { bg: 'bg-red-50',    border: 'border-red-200',    text: 'text-red-700',    dot: 'bg-red-500'    },
  'Education': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' },
  'Medical':   { bg: 'bg-cyan-50',   border: 'border-cyan-200',   text: 'text-cyan-700',   dot: 'bg-cyan-500'   },
};

function SectorCard({ icon: Icon, title, badge, clients, color, index, inView }) {
  return (
    <div
      className={`flex-shrink-0 w-60 sm:w-68 rounded-2xl bg-white border border-gray-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default group overflow-hidden ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms`, width: '17rem' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#f3f4f6';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Colored top strip */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }} />

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <span
            className="text-[0.6rem] font-bold tracking-widest px-2 py-0.5 rounded-full"
            style={{ background: `${color}12`, color }}
          >
            {badge}
          </span>
        </div>

        <h3 className="text-brand-950 font-bold text-sm sm:text-base mb-3 leading-tight">{title}</h3>

        <ul className="space-y-2">
          {clients.map((c) => (
            <li key={c} className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
              {c}
            </li>
          ))}
        </ul>
      </div>
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
    <section id="experience" className="py-16 md:py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-200 rounded-full text-brand-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <img src={logo} alt="" className="w-4 h-4 object-contain" />
            Industry Experience
          </div>
          <h2 className="section-title">
            Trusted Across{' '}
            <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            From government defence forces to five-star hotels — our installations speak for themselves.
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-brand-200 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-brand-200 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div ref={scrollRef} className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 hide-scrollbar px-1">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.title} {...sector} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Notable Installations */}
        <div
          className={`mt-10 md:mt-14 bg-white border border-brand-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-6 sm:px-8 py-4 border-b border-brand-50 bg-brand-50/50">
            <div className="w-2 h-6 rounded-full bg-gradient-to-b from-brand-600 to-brand-400" />
            <h3 className="text-brand-950 font-bold text-base sm:text-lg">Notable Installations</h3>
            <span className="ml-auto text-xs text-slate-400 font-medium">{notableInstallations.length} Projects</span>
          </div>

          {/* Tags */}
          <div className="px-6 sm:px-8 py-6 flex flex-wrap gap-2.5">
            {notableInstallations.map(({ label, category }) => {
              const c = categoryColors[category] || categoryColors['Govt.'];
              return (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border ${c.bg} ${c.border} ${c.text} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                  {label}
                </span>
              );
            })}
          </div>

          {/* Legend */}
          <div className="px-6 sm:px-8 py-3 border-t border-brand-50 bg-slate-50/50 flex flex-wrap gap-x-5 gap-y-2">
            {Object.entries(categoryColors).map(([cat, c]) => (
              <div key={cat} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                <span className="text-xs text-slate-500 font-medium">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
