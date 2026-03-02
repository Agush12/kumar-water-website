import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

// Coordinate mapping: viewBox "0 0 420 470"
// x = (lon - 68) * 14.24,  y = (37 - lat) * 15.93
const states = [
  { name: 'Jammu & Kashmir', abbr: 'J&K',  x: 97,  y: 46,  major: false },
  { name: 'Punjab',           abbr: 'PB',   x: 120, y: 100, major: false },
  { name: 'Himachal Pradesh', abbr: 'HP',   x: 131, y: 94,  major: false },
  { name: 'Uttarakhand',      abbr: 'UK',   x: 143, y: 107, major: false },
  { name: 'Haryana',          abbr: 'HR',   x: 118, y: 120, major: false },
  { name: 'Delhi',            abbr: 'DL',   x: 130, y: 134, major: true  },
  { name: 'Uttar Pradesh',    abbr: 'UP',   x: 184, y: 162, major: true  },
  { name: 'Rajasthan',        abbr: 'RJ',   x: 86,  y: 175, major: false },
  { name: 'Madhya Pradesh',   abbr: 'MP',   x: 134, y: 218, major: false },
  { name: 'Gujarat',          abbr: 'GJ',   x: 66,  y: 220, major: false },
  { name: 'Bihar',            abbr: 'BR',   x: 244, y: 182, major: false },
  { name: 'Jharkhand',        abbr: 'JH',   x: 246, y: 217, major: false },
];

const HQ_X = 142;
const HQ_Y = 156;

// Traced from real lat/lon coordinates — clockwise from J&K north
const INDIA_PATH = `
  M 100,0
  L 128,26 L 143,32 L 157,35
  L 171,48 L 228,80
  L 271,143 L 285,151 L 299,151
  L 328,151 L 356,159
  L 413,136 L 420,155
  L 399,207 L 370,231 L 363,239
  L 342,231 L 328,227 L 313,231 L 306,239
  L 285,239
  L 264,263 L 242,279
  L 228,303 L 213,311
  L 185,334 L 171,382
  L 164,430 L 136,460
  L 121,454 L 114,438
  L 96,384 L 82,342
  L 71,303 L 68,271 L 64,255
  L 57,248 L 43,248 L 28,248 L 14,248 L 7,247
  L 7,235 L 14,223 L 28,215
  L 3,207 L 0,199
  L 7,191 L 14,175
  L 28,151 L 43,143 L 57,127
  L 85,96 L 92,72 L 92,56
  L 100,48 L 100,0
  Z
`;

function IndiaMapSVG({ activeState, onHover }) {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <svg viewBox="0 0 420 470" className="w-full" style={{ filter: 'drop-shadow(0 4px 20px rgba(37,99,235,0.15))' }}>
        {/* India body */}
        <path d={INDIA_PATH} fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" strokeLinejoin="round" />
        <path d={INDIA_PATH} fill="none" stroke="#BFDBFE" strokeWidth="4" strokeLinejoin="round" />

        {/* State dots */}
        {states.map((state) => {
          const isActive = activeState === state.name;
          return (
            <g key={state.name}>
              {isActive && (
                <circle cx={state.x} cy={state.y} r={state.major ? 10 : 8} fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
              )}
              <circle
                cx={state.x}
                cy={state.y}
                r={state.major ? 5 : 3.8}
                fill={isActive ? '#2563EB' : '#60A5FA'}
                stroke={isActive ? '#1E40AF' : '#3B82F6'}
                strokeWidth={isActive ? '1.5' : '1'}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => onHover(state.name)}
                onMouseLeave={() => onHover(null)}
                style={{ filter: isActive ? 'drop-shadow(0 0 6px #2563EB)' : 'none' }}
              />
              {isActive && (
                <text x={state.x} y={state.y - 9} textAnchor="middle" fontSize="8" fill="#1E40AF" fontFamily="Poppins, sans-serif" fontWeight="700">
                  {state.abbr}
                </text>
              )}
            </g>
          );
        })}

        {/* HQ Marker */}
        <g>
          <circle cx={HQ_X} cy={HQ_Y} r="10" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.4)" strokeWidth="1">
            <animate attributeName="r" values="8;14;8" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={HQ_X} cy={HQ_Y} r="5" fill="#2563EB" stroke="white" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 4px #2563EB)' }} />
          <circle cx={HQ_X} cy={HQ_Y} r="2" fill="white" />
          <text x={HQ_X} y={HQ_Y + 16} textAnchor="middle" fontSize="7" fill="#2563EB" fontFamily="Poppins, sans-serif" fontWeight="700">
            AGRA HQ
          </text>
        </g>

        {/* Tooltip */}
        {activeState && (() => {
          const s = states.find((st) => st.name === activeState);
          if (!s) return null;
          const tw = s.name.length * 5.5 + 14;
          const tx = Math.min(Math.max(s.x - tw / 2, 4), 420 - tw - 4);
          const ty = s.y - 32;
          return (
            <g>
              <rect x={tx} y={ty} width={tw} height="18" rx="5" fill="#2563EB" />
              <polygon points={`${s.x - 4},${ty + 18} ${s.x + 4},${ty + 18} ${s.x},${ty + 24}`} fill="#2563EB" />
              <text x={tx + tw / 2} y={ty + 12} textAnchor="middle" fontSize="7.5" fill="white" fontFamily="Poppins, sans-serif" fontWeight="600">
                {s.name}
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

const stateCards = [
  { name: 'Uttar Pradesh',    flag: '🏙️', desc: 'Primary hub — Agra HQ' },
  { name: 'Uttarakhand',      flag: '🏔️', desc: 'Mountain region specialist' },
  { name: 'Delhi',            flag: '🏛️', desc: 'Capital territory coverage' },
  { name: 'Haryana',          flag: '🌾', desc: 'Agricultural & industrial' },
  { name: 'Punjab',           flag: '💛', desc: 'North-west coverage' },
  { name: 'Jammu & Kashmir',  flag: '❄️', desc: 'Defence installations' },
  { name: 'Madhya Pradesh',   flag: '🌿', desc: 'Central India projects' },
  { name: 'Jharkhand',        flag: '⛏️', desc: 'Industrial belt coverage' },
  { name: 'Bihar',            flag: '🏺', desc: 'Eastern corridor expansion' },
  { name: 'Rajasthan',        flag: '🏜️', desc: 'Desert water solutions' },
  { name: 'Gujarat',          flag: '🏭', desc: 'Industrial zone support' },
  { name: 'Himachal Pradesh', flag: '🌲', desc: 'Hill station installations' },
];

export default function Coverage() {
  const [activeState, setActiveState] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="coverage" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-brand-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 border border-brand-200 rounded-full text-brand-600 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
            <MapPin className="w-4 h-4" />
            Pan-India Coverage
          </div>
          <h2 className="section-title">
            12+ States.{' '}
            <span className="text-gradient">One Trusted Partner.</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From the valleys of Himachal to the deserts of Rajasthan — our water treatment solutions
            reach every corner of Northern and Central India.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Map */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-500/8 border border-brand-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-brand-950 font-bold text-base">Service Coverage Map</h3>
                  <p className="text-slate-400 text-xs mt-0.5">Hover over dots to explore states</p>
                </div>
                <div className="flex items-center gap-2 text-brand-600 text-xs font-semibold">
                  <img src={logo} alt="" className="w-5 h-5 object-contain" />
                  12+ States
                </div>
              </div>

              <IndiaMapSVG activeState={activeState} onHover={setActiveState} />

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-400 border border-brand-500" />
                  Service state
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-600 border-2 border-white shadow-[0_0_6px_#2563EB]" />
                  HQ — Agra, U.P.
                </div>
              </div>
            </div>
          </div>

          {/* State Grid */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stateCards.map(({ name, flag, desc }, index) => (
                <div
                  key={name}
                  className={`group p-3 sm:p-4 bg-white rounded-xl border-2 shadow-sm cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    activeState === name
                      ? 'border-brand-500 shadow-brand-500/15 -translate-y-1'
                      : 'border-gray-100 hover:border-brand-300'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setActiveState(name)}
                  onMouseLeave={() => setActiveState(null)}
                >
                  <div className="text-xl mb-1.5">{flag}</div>
                  <p className="text-brand-950 font-bold text-xs sm:text-sm leading-tight">{name}</p>
                  <p className="text-slate-400 text-[0.65rem] sm:text-xs mt-0.5 leading-tight">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 bg-gradient-to-r from-brand-600 to-brand-500 rounded-2xl text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-black text-white">12+</p>
                  <p className="text-xs text-brand-100 mt-0.5">States</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">25+</p>
                  <p className="text-xs text-brand-100 mt-0.5">Cities</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">500+</p>
                  <p className="text-xs text-brand-100 mt-0.5">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
