import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Factory, Waves, ArrowRight, Check,
  Droplets, Filter, FlaskConical, Recycle, RefreshCw, Settings2,
} from 'lucide-react';
import logo from '../assets/logo.png';
import commercialRoImg from '../assets/commercial-ro.png';
import industrialRoImg from '../assets/industrial-ro.png';
import softenerImg from '../assets/softener-plant.png';
import dmPlantImg from '../assets/dm-plant.png';
import etpPlantImg from '../assets/etp-plant.png';
import stpPlantImg from '../assets/stp-plant.png';
import wtpPlantImg from '../assets/wtp-plant.png';
import hydraulicFountainImg from '../assets/hydraulic-fountain.png';

const products = [
  {
    id: 'commercial-ro',
    image: commercialRoImg,
    title: 'Commercial RO Plant',
    subtitle: '50 LPH – 5,000 LPH',
    description:
      'High-performance commercial RO systems for offices, restaurants, hotels, schools, and hospitals with quick turnaround installation.',
    features: [
      'Capacity: 50 – 5,000 LPH',
      'Food-grade RO membranes',
      'Automatic flushing system',
      'Digital TDS monitoring',
      'Compact stainless steel frame',
      '1-year service warranty',
    ],
    color: '#2563EB',
    bgGradient: 'from-brand-500/10 to-brand-400/5',
  },
  {
    id: 'industrial-ro',
    image: industrialRoImg,
    title: 'Industrial RO Plant',
    subtitle: '5,000 LPH – 50,000 LPH',
    description:
      'Heavy-duty industrial RO systems for manufacturing units, pharmaceuticals, bottling plants and large-scale institutional use.',
    features: [
      'Capacity: 5,000 – 50,000 LPH',
      'High-pressure SS pumps',
      'Multi-stage filtration',
      'PLC-controlled automation',
      'SCADA compatible',
      'Govt. & defence approved',
    ],
    color: '#06B6D4',
    bgGradient: 'from-accent-500/10 to-accent-400/5',
  },
  {
    id: 'softener-plant',
    image: softenerImg,
    title: 'Softener Plant',
    subtitle: 'Hard Water Treatment',
    description:
      'Ion-exchange based water softening systems to remove hardness, scale & mineral deposits for boilers, cooling towers and domestic use.',
    features: [
      'Removes calcium & magnesium',
      'Resin-based ion exchange',
      'Auto regeneration cycle',
      'Suitable for boilers & cooling',
      'Extended equipment lifespan',
      'Custom capacity available',
    ],
    color: '#0891B2',
    bgGradient: 'from-cyan-500/10 to-cyan-400/5',
  },
  {
    id: 'dm-plant',
    image: dmPlantImg,
    title: 'DM Plant',
    subtitle: 'Demineralized Water',
    description:
      'High-purity demineralization plants producing ultra-pure water for power plants, pharmaceutical manufacturing and laboratories.',
    features: [
      'Dual bed / mixed bed options',
      'TDS near 0 ppm output',
      'Cation & anion exchange resin',
      'Pharma & power plant grade',
      'Auto-regeneration system',
      'Lab & industrial certified',
    ],
    color: '#7C3AED',
    bgGradient: 'from-purple-500/10 to-purple-400/5',
  },
  {
    id: 'etp-plant',
    image: etpPlantImg,
    title: 'ETP Plant',
    subtitle: 'Effluent Treatment',
    description:
      'Industrial effluent treatment plants to treat and recycle wastewater from factories, textile units and chemical industries.',
    features: [
      'Physio-chemical treatment',
      'Biological treatment stage',
      'Meets CPCB discharge norms',
      'Zero liquid discharge option',
      'Customized for industry type',
      'Fully automated control',
    ],
    color: '#DC2626',
    bgGradient: 'from-red-500/10 to-red-400/5',
  },
  {
    id: 'stp-plant',
    image: stpPlantImg,
    title: 'STP Plant',
    subtitle: 'Sewage Treatment',
    description:
      'Complete sewage treatment plant solutions for housing societies, hotels, hospitals and municipal bodies to treat and recycle sewage.',
    features: [
      'Extended aeration process',
      'MBR technology available',
      'Treated water for reuse',
      'Meets pollution board norms',
      'Compact modular design',
      'Remote monitoring ready',
    ],
    color: '#059669',
    bgGradient: 'from-emerald-500/10 to-emerald-400/5',
  },
  {
    id: 'wtp-plant',
    image: wtpPlantImg,
    title: 'WTP Plant',
    subtitle: 'Waste Treatment Plant',
    description:
      'Comprehensive waste treatment plants for bore water, river water and surface water purification for municipalities and industries.',
    features: [
      'Multi-media filtration',
      'Activated carbon filter',
      'Chemical dosing system',
      'UV & chlorination unit',
      'Meets BIS 10500 standards',
      'Capacity up to 50,000 LPH',
    ],
    color: '#0284C7',
    bgGradient: 'from-sky-500/10 to-sky-400/5',
  },
  {
    id: 'hydraulic-fountain',
    image: hydraulicFountainImg,
    title: 'Hydraulic & Fountain Plant',
    subtitle: 'Pools & Decorative',
    description:
      'Premium swimming pool water treatment, decorative water fountains, water features and hydraulic engineering solutions.',
    features: [
      'Swimming pool treatment',
      'Decorative water fountains',
      'Hydraulic pump systems',
      'UV & ozone disinfection',
      'Filter media replacement',
      'Automated dosing systems',
    ],
    color: '#10B981',
    bgGradient: 'from-mint-500/10 to-mint-400/5',
  },
];

function ProductCard({ product, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = product.icon;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md shadow-brand-500/5 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToContact}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${product.color}, ${product.color}60)` }}
      />

      {/* Image / Icon area */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          product.image ? 'h-44 sm:h-48' : `h-36 sm:h-40 bg-gradient-to-br ${product.bgGradient}`
        }`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ background: `${product.color}12`, border: `2px solid ${product.color}30` }}
            >
              <Icon className="w-8 h-8" style={{ color: product.color }} />
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-end justify-center pb-4 transition-all duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(to top, ${product.color}EE 0%, ${product.color}60 50%, transparent 100%)`,
          }}
        >
          <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Subtitle badge */}
        <div
          className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[0.6rem] sm:text-xs font-bold text-white shadow"
          style={{ background: product.color }}
        >
          {product.subtitle}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3
          className="text-sm sm:text-base font-bold text-brand-950 mb-1.5 group-hover:transition-colors duration-300 leading-snug"
          style={{ color: hovered ? product.color : undefined }}
        >
          {product.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-3">{product.description}</p>

        <ul className="space-y-1.5 mb-4 flex-grow">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs text-slate-600">
              <Check className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: product.color }} />
              {f}
            </li>
          ))}
        </ul>

        <button
          className="w-full py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 mt-auto"
          style={{
            background: hovered ? product.color : 'transparent',
            color: hovered ? 'white' : product.color,
            border: `2px solid ${product.color}`,
            boxShadow: hovered ? `0 6px 20px ${product.color}30` : 'none',
          }}
          type="button"
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-200 rounded-full text-brand-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <img src={logo} alt="" className="w-4 h-4 object-contain" />
            Our Products
          </div>
          <h2 className="section-title">
            Complete Water Treatment{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From 50 LPH home systems to 50,000 LPH industrial plants — engineered for
            performance, reliability and long-term value.
          </p>
        </div>

        {/* 8-product grid: 2 cols mobile → 4 cols desktop */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-500 text-sm mb-4">
            Need a customized solution? Our engineers will design a system tailored to your exact requirements.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2"
          >
            Request Custom Solution
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
