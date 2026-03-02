import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Droplets, Factory, Waves, Zap, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 'commercial-ro',
    icon: Droplets,
    title: 'Commercial RO Plants',
    subtitle: '50 LPH – 5,000 LPH',
    description:
      'High-performance commercial RO systems for offices, restaurants, hotels, schools, and hospitals. Quick installation, low maintenance.',
    features: [
      'Capacity: 50 – 5,000 LPH',
      'Food-grade RO membranes',
      'Automatic flushing system',
      'Digital TDS monitoring',
      'Compact stainless steel frame',
      '1-year service warranty',
    ],
    color: '#00C9A7',
    gradient: 'from-teal-600/80 to-teal-800/80',
    bgGradient: 'from-teal-500/10 to-cyan-500/5',
  },
  {
    id: 'industrial-ro',
    icon: Factory,
    title: 'Industrial RO Plants',
    subtitle: '5,000 LPH – 50,000 LPH',
    description:
      'Heavy-duty industrial RO systems for manufacturing, pharmaceuticals, bottling plants, and large-scale institutional use.',
    features: [
      'Capacity: 5,000 – 50,000 LPH',
      'High-pressure pumps',
      'Multi-stage filtration',
      'PLC-controlled automation',
      'SCADA compatible',
      'Govt. defence supply approved',
    ],
    color: '#3b82f6',
    gradient: 'from-blue-600/80 to-blue-800/80',
    bgGradient: 'from-blue-500/10 to-blue-400/5',
  },
  {
    id: 'stp-etp',
    icon: Zap,
    title: 'STP / ETP Systems',
    subtitle: 'Sewage & Effluent Treatment',
    description:
      'Complete Sewage Treatment Plant and Effluent Treatment Plant solutions for industries, housing societies, hospitals and commercial complexes.',
    features: [
      'Sewage Treatment Plants (STP)',
      'Effluent Treatment Plants (ETP)',
      'Water Treatment Plants (WTP)',
      'Zero Liquid Discharge',
      'Regulatory compliance',
      'Full turnkey installation',
    ],
    color: '#8b5cf6',
    gradient: 'from-purple-600/80 to-purple-800/80',
    bgGradient: 'from-purple-500/10 to-purple-400/5',
  },
  {
    id: 'hydraulic-fountain',
    icon: Waves,
    title: 'Hydraulic & Fountain Systems',
    subtitle: 'Swimming Pools & Decorative',
    description:
      'Premium swimming pool water treatment systems, decorative fountains, water features, and hydraulic engineering solutions.',
    features: [
      'Swimming pool treatment',
      'Decorative water fountains',
      'Hydraulic pump systems',
      'UV & ozone disinfection',
      'Filter media replacement',
      'Automated dosing systems',
    ],
    color: '#06b6d4',
    gradient: 'from-cyan-600/80 to-cyan-800/80',
    bgGradient: 'from-cyan-500/10 to-cyan-400/5',
  },
];

function ProductCard({ product, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = product.icon;

  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top color strip */}
      <div
        className="h-1.5 w-full transition-all duration-300"
        style={{ background: `linear-gradient(90deg, ${product.color}, ${product.color}80)` }}
      />

      {/* Image placeholder with gradient */}
      <div
        className={`relative h-44 sm:h-48 bg-gradient-to-br ${product.bgGradient} overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `${product.color}20`, border: `2px solid ${product.color}40` }}
          >
            <Icon className="w-10 h-10" style={{ color: product.color }} />
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} flex items-center justify-center transition-all duration-400 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center text-white px-4">
            <p className="text-sm font-medium mb-1 text-white/80">View Details</p>
            <ArrowRight className="w-6 h-6 mx-auto animate-pulse" />
          </div>
        </div>

        {/* Capacity badge */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: product.color }}
        >
          {product.subtitle}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>

        <ul className="space-y-2 mb-5">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: product.color }} />
              {f}
            </li>
          ))}
        </ul>

        <button
          className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: hovered ? product.color : 'transparent',
            color: hovered ? 'white' : product.color,
            border: `2px solid ${product.color}`,
            boxShadow: hovered ? `0 8px 24px ${product.color}40` : 'none',
          }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
    <section id="products" className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Factory className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="section-title">
            Complete Water Treatment{' '}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From 50 LPH home systems to 50,000 LPH industrial plants — engineered for performance,
            reliability and long-term value.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA Bottom */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-500 text-sm mb-4">
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
