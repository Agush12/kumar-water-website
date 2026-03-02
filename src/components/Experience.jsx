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
    color: '#2563EB',
  },
  {
    icon: Stethoscope,
    title: 'Hospitals & Medical',
    clients: ['Multi-specialty Hospitals', 'Clinics & Labs', 'Pharmaceutical Plants', 'Blood Banks'],
    color: '#06B6D4',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    clients: ['Schools', 'Colleges', 'Universities', 'Research Institutes'],
    color: '#8B5CF6',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    clients: ['Hotels', 'Restaurants', 'Resorts', 'Banquet Halls'],
    color: '#F59E0B',
  },
  {
    icon: Train,
    title: 'Railways & Transport',
    clients: ['Railway Stations', 'Bus Terminals', 'Roadways', 'Transit Hubs'],
    color: '#EF4444',
  },
  {
    icon: Newspaper,
    title: 'Media & Corporate',
    clients: ['Amar Ujala Group', 'Corporate Offices', 'IT Parks', 'Business Centers'],
    color: '#10B981',
  },
  {
    icon: Factory,
    title: 'Industries',
    clients: ['Manufacturing Plants', 'Textile Mills', 'Food Processing', 'Chemical Plants'],
    color: '#F97316',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    clients: ['Housing Societies', 'Residential Complexes', 'Townships', 'Commercial Plazas'],
    color: '#EC4899',
  },
];

function SectorCard({ icon: Icon, title, clients, color, index, inView }) {
  return (
    <div
      className={`flex-shrink-0 w-64 sm:w-72 rounded-2xl p-6 bg-white border border-gray-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 12px 40px ${color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#f3f4f6';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <h3 className="text-brand-950 font-bold text-base mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {clients.map((c) => (
          <li key={c} className="flex items-center gap-2 text-slate-500 text-sm">
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
    <section id="experience" className="py-16 md:py-24 bg-[#F0F7FF] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-200 rounded-full text-brand-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Droplets className="w-4 h-4" />
            Industry Experience
          </div>
          <h2 className="section-title">
            Trusted Across{' '}
            <span className="text-gradient">Every Sector</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            From government defence units to five-star hotels — our installations speak for themselves.
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

        {/* Notable Projects */}
        <div
          className={`mt-10 md:mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-brand-100 shadow-sm transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-brand-950 font-bold text-base sm:text-lg mb-5 text-center">
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
                className="px-3 py-1.5 text-xs sm:text-sm text-brand-700 bg-brand-50 border border-brand-200 rounded-full hover:bg-brand-100 hover:border-brand-300 transition-all duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
