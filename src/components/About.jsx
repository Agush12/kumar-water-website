import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Droplets } from 'lucide-react';

const stats = [
  { value: 25, suffix: '+', label: 'Years Experience', color: 'from-teal-500 to-cyan-400' },
  { value: 50000, suffix: ' LPH', label: 'Max Capacity', color: 'from-blue-500 to-blue-400' },
  { value: 12, suffix: '+', label: 'States Covered', color: 'from-indigo-500 to-purple-400' },
  { value: 500, suffix: '+', label: 'Projects Done', color: 'from-teal-600 to-teal-400' },
];

const expertiseList = [
  'RO Plants (50 LPH – 50,000 LPH)',
  'Sewage Treatment Plants (STP)',
  'Effluent Treatment Plants (ETP)',
  'Water Treatment Plants (WTP)',
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
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Droplets className="w-4 h-4" />
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
          {/* Left — Image / Visual */}
          <div
            ref={textRef}
            className={`relative transition-all duration-700 ${
              textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder image with gradient */}
              <div className="w-full h-72 sm:h-80 md:h-96 bg-navy-gradient flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-teal-500/20 border-2 border-teal-400/40 rounded-full flex items-center justify-center animate-float">
                      <Droplets className="w-12 h-12 text-teal-400" />
                    </div>
                    <p className="text-xl font-bold text-teal-400 leading-snug">Kumar Pure Water<br/>Pvt. Ltd.</p>
                    <p className="text-white/60 text-sm mt-1">Est. 1999 · Agra, U.P.</p>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-teal-400/20 rounded-full animate-spin-slow" />
                <div className="absolute bottom-6 left-6 w-10 h-10 border border-white/10 rounded-full" />
                <div className="absolute top-1/2 left-4 w-3 h-3 bg-teal-400/60 rounded-full animate-ping" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 sm:right-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 z-10">
              <p className="text-3xl font-black text-navy-900">25+</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Years of Excellence</p>
            </div>
            <div className="absolute -top-5 -left-4 sm:left-4 bg-teal-500 rounded-2xl px-5 py-4 shadow-xl z-10">
              <p className="text-3xl font-black text-white">10+</p>
              <p className="text-xs text-teal-100 font-medium mt-0.5">States Covered</p>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              textInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4">
              Kumar Pure Water Solution Private Limited
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              Established in <strong>1999</strong>, Kumar Pure Water Pvt. Ltd. is one of the biggest assemblers
              and installers of RO systems and water treatment plants in Northern India. Headquartered
              in <strong>Agra, Uttar Pradesh</strong>, our reach spans 12+ states.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              We serve government bodies, defence units, industries, hotels, hospitals, educational
              institutions, and domestic clients with world-class water purification technology and
              rapid installation turnaround.
            </p>

            <div className="space-y-2.5 mb-8">
              <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-3">Our Expertise</p>
              {expertiseList.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
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
                className="px-6 py-3 border-2 border-navy-900/20 text-navy-900 font-semibold rounded-xl hover:bg-navy-900 hover:text-white transition-all duration-300 text-sm md:text-base text-center"
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

        {/* Stats Row */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ value, suffix, label, color }, index) => (
            <div
              key={label}
              className={`bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center card-hover transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div
                className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-1`}
              >
                <AnimatedCounter target={value} suffix={suffix} inView={inView} />
              </div>
              <p className="text-gray-500 text-xs sm:text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
