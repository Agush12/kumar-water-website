import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import logo from '../assets/logo.png';

const GEO_URL = '/india_states.geojson';

// States the company covers — names must match ST_NM in GeoJSON exactly
const COVERED_STATES = new Set([
  'Uttar Pradesh',
  'Uttarakhand',
  'Delhi',
  'Haryana',
  'Punjab',
  'Jammu & Kashmir',
  'Ladakh',
  'Madhya Pradesh',
  'Jharkhand',
  'Bihar',
  'Rajasthan',
  'Gujarat',
  'Himachal Pradesh',
]);

// Approximate center [lon, lat] for each covered state (for dot markers)
const STATE_MARKERS = [
  { name: 'Uttar Pradesh',    coords: [80.9, 26.8] },
  { name: 'Uttarakhand',      coords: [79.0, 30.0] },
  { name: 'Delhi',            coords: [77.1, 28.6] },
  { name: 'Haryana',          coords: [76.1, 29.0] },
  { name: 'Punjab',           coords: [75.3, 31.1] },
  { name: 'Jammu & Kashmir',  coords: [75.3, 33.7] },
  { name: 'Ladakh',           coords: [77.5, 34.2] },
  { name: 'Madhya Pradesh',   coords: [77.4, 23.5] },
  { name: 'Jharkhand',        coords: [85.3, 23.6] },
  { name: 'Bihar',            coords: [85.3, 25.6] },
  { name: 'Rajasthan',        coords: [74.2, 27.0] },
  { name: 'Gujarat',          coords: [71.5, 22.3] },
  { name: 'Himachal Pradesh', coords: [77.2, 31.9] },
];

// Agra HQ
const AGRA_HQ = [78.0, 27.2];

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
  const [tooltip, setTooltip] = useState({ visible: false, name: '', x: 0, y: 0 });
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
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl shadow-brand-500/8 border border-brand-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-brand-950 font-bold text-base">Service Coverage Map</h3>
                  <p className="text-slate-400 text-xs mt-0.5">Hover over states to explore</p>
                </div>
                <div className="flex items-center gap-2 text-brand-600 text-xs font-semibold">
                  <img src={logo} alt="" className="w-5 h-5 object-contain" />
                  12+ States
                </div>
              </div>

              {/* Map container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#EFF6FF]"
                onMouseLeave={() => setTooltip({ visible: false, name: '', x: 0, y: 0 })}
              >
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ scale: 920, center: [82.5, 23] }}
                  style={{ width: '100%', height: 'auto' }}
                >
                  <ZoomableGroup>
                    <Geographies geography={GEO_URL}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const stateName = geo.properties.ST_NM;
                          const isCovered = COVERED_STATES.has(stateName);
                          const isActive = activeState === stateName;
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onMouseEnter={(e) => {
                                setActiveState(stateName);
                                setTooltip({ visible: true, name: stateName, x: e.clientX, y: e.clientY });
                              }}
                              onMouseLeave={() => {
                                setActiveState(null);
                                setTooltip({ visible: false, name: '', x: 0, y: 0 });
                              }}
                              style={{
                                default: {
                                  fill: isCovered ? (isActive ? '#1D4ED8' : '#3B82F6') : '#DBEAFE',
                                  stroke: '#BFDBFE',
                                  strokeWidth: 0.5,
                                  outline: 'none',
                                  transition: 'fill 0.2s',
                                },
                                hover: {
                                  fill: isCovered ? '#1D4ED8' : '#BFDBFE',
                                  stroke: '#93C5FD',
                                  strokeWidth: 0.7,
                                  outline: 'none',
                                  cursor: 'pointer',
                                },
                                pressed: { outline: 'none' },
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>

                    {/* State dot markers */}
                    {STATE_MARKERS.map(({ name, coords }) => (
                      <Marker key={name} coordinates={coords}>
                        <circle
                          r={3}
                          fill={activeState === name ? '#ffffff' : '#ffffff'}
                          stroke={activeState === name ? '#1D4ED8' : '#3B82F6'}
                          strokeWidth={1.2}
                          style={{ filter: 'drop-shadow(0 0 3px rgba(37,99,235,0.6))', cursor: 'pointer' }}
                        />
                      </Marker>
                    ))}

                    {/* Agra HQ Marker */}
                    <Marker coordinates={AGRA_HQ}>
                      <circle r={6} fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.4)" strokeWidth={1}>
                        <animate attributeName="r" values="5;10;5" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle r={4} fill="#2563EB" stroke="white" strokeWidth={1.5}
                        style={{ filter: 'drop-shadow(0 0 4px #2563EB)' }} />
                      <circle r={1.5} fill="white" />
                      <text
                        textAnchor="middle"
                        y={14}
                        style={{ fontFamily: 'Poppins, sans-serif', fontSize: 5, fontWeight: 700, fill: '#1E40AF' }}
                      >
                        AGRA HQ
                      </text>
                    </Marker>
                  </ZoomableGroup>
                </ComposableMap>

                {/* Tooltip */}
                {tooltip.visible && (
                  <div
                    className="fixed z-50 px-3 py-1.5 bg-brand-700 text-white text-xs font-semibold rounded-lg shadow-lg pointer-events-none"
                    style={{ left: tooltip.x + 12, top: tooltip.y - 30 }}
                  >
                    {tooltip.name}
                    {COVERED_STATES.has(tooltip.name) && (
                      <span className="ml-1.5 text-accent-300">✓</span>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-brand-500" />
                  Covered state
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-brand-100 border border-brand-300" />
                  Other state
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
