import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.png';
import aboutVisual from '../assets/about-visual.png';

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience', color: 'from-brand-600 to-brand-400' },
  { value: 50000, suffix: ' LPH', label: 'Max Capacity', color: 'from-accent-500 to-accent-400' },
  { value: 12, suffix: '+', label: 'States Covered', color: 'from-indigo-500 to-purple-400' },
  { value: 500, suffix: '+', label: 'Projects Done', color: 'from-mint-500 to-mint-400' },
];

const expertiseList = [
  'RO Plants (50 LPH – 50,000 LPH)',
  'Sewage Treatment Plants (STP)',
  'Effluent Treatment Plants (ETP)',
  'Waste Treatment Plants (WTP)',
  'Swimming Pool Systems',
  'Hydraulic & Fountain Systems',
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!inView || animatedRef.current) return;
    animatedRef.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted = target >= 1000 ? count.toLocaleString() : count;
  return <span>{formatted}{suffix}</span>;
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-200 rounded-full text-brand-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <img src={logo} alt="" className="w-4 h-4 object-contain" />
            About Us
          </div>
          <h2 className="section-title">
            Trusted Water Treatment{' '}
            <span className="text-gradient">Since 1999</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            One of Northern India&apos;s largest assemblers & installers of water treatment systems,
            serving government, defence, industrial and domestic clients.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Left — Visual */}
          <div
            ref={textRef}
            className={`relative transition-all duration-700 ${
              textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/10">
              <img
                src={aboutVisual}
                alt="Kumar Pure Water Solution"
                className="w-full h-72 sm:h-80 md:h-96 object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 -right-4 sm:right-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 z-10">
              <p className="text-3xl font-black text-brand-600">25+</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Years of Excellence</p>
            </div>
            <div className="absolute -top-5 -left-4 sm:left-4 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl px-5 py-4 shadow-xl z-10">
              <p className="text-3xl font-black text-white">12+</p>
              <p className="text-xs text-brand-100 font-medium mt-0.5">States Covered</p>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              textInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 mb-4">
              Kumar Pure Water Solution Private Limited
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              Established in <strong className="text-brand-800">1999</strong>, Kumar Pure Water Pvt. Ltd. is one of the biggest assemblers
              and installers of RO systems and water treatment plants in Northern India. Headquartered
              in <strong className="text-brand-800">Agra, Uttar Pradesh</strong>, our reach spans 12+ states.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              We serve government bodies, defence units, industries, hotels, hospitals, educational
              institutions, and domestic clients with world-class water purification technology and
              rapid installation turnaround.
            </p>

            <div className="space-y-2.5 mb-8">
              <p className="text-xs font-bold text-brand-900 uppercase tracking-widest mb-3">Our Expertise</p>
              {expertiseList.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-3">
              <a
                href="#contact"
                className="btn-primary text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Talk to Our Expert
              </a>
              <a
                href="#products"
                className="btn-outline text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Products
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ value, suffix, label, color }, index) => (
            <div
              key={label}
              className={`bg-white rounded-2xl p-5 sm:p-6 shadow-lg shadow-brand-500/5 border border-brand-100/50 text-center card-hover transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-1`}>
                <AnimatedCounter target={value} suffix={suffix} inView={inView} />
              </div>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
