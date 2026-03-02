import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const states = [
  { name: 'Jammu & Kashmir', abbr: 'J&K',  x: 102, y: 75,  major: false },
  { name: 'Punjab',           abbr: 'PB',   x: 108, y: 103, major: false },
  { name: 'Himachal Pradesh', abbr: 'HP',   x: 126, y: 96,  major: false },
  { name: 'Uttarakhand',      abbr: 'UK',   x: 149, y: 117, major: false },
  { name: 'Haryana',          abbr: 'HR',   x: 114, y: 124, major: false },
  { name: 'Delhi',            abbr: 'DL',   x: 128, y: 135, major: true  },
  { name: 'Uttar Pradesh',    abbr: 'UP',   x: 171, y: 161, major: true  },
  { name: 'Rajasthan',        abbr: 'RJ',   x: 90,  y: 159, major: false },
  { name: 'Madhya Pradesh',   abbr: 'MP',   x: 130, y: 209, major: false },
  { name: 'Gujarat',          abbr: 'GJ',   x: 61,  y: 220, major: false },
  { name: 'Bihar',            abbr: 'BR',   x: 221, y: 177, major: false },
  { name: 'Jharkhand',        abbr: 'JH',   x: 223, y: 209, major: false },
];

const HQ_X = 137;
const HQ_Y = 156;

const INDIA_PATH = `
  M 90,20
  L 110,12 L 132,10 L 149,20 L 158,30
  L 162,45 L 166,60 L 168,78
  L 171,90 L 175,100 L 178,112
  L 182,122 L 185,130 L 190,138
  L 200,140 L 220,140 L 249,140
  L 270,132 L 295,126 L 318,120
  L 354,122
  L 348,140 L 338,155 L 325,168
  L 310,178 L 295,185 L 278,190
  L 264,200 L 256,212
  L 252,225 L 248,238
  L 238,252 L 226,265
  L 215,278 L 205,292
  L 194,306 L 183,320
  L 172,334 L 162,348
  L 154,362 L 148,376
  L 144,390 L 142,405
  L 140,418
  L 135,408 L 128,394
  L 120,378 L 112,362
  L 104,345 L 96,328
  L 88,310 L 80,292
  L 74,275 L 70,258
  L 72,242 L 72,228
  L 68,218 L 62,210
  L 50,208 L 38,210
  L 28,208 L 22,198
  L 20,185
  L 26,168 L 32,152
  L 38,136 L 43,118
  L 48,100 L 54,82
  L 60,68 L 68,55
  L 74,42 L 80,30
  Z
`;

function IndiaMapSVG({ activeState, onHover }) {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <svg viewBox="0 0 380 440" className="w-full" style={{ filter: 'drop-shadow(0 4px 20px rgba(37,99,235,0.15))' }}>
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
          const tx = Math.min(Math.max(s.x - tw / 2, 4), 380 - tw - 4);
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
