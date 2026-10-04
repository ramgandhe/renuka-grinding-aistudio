import React, { useState } from 'react';
import { Layers, ShieldCheck, Activity, Compass, Cpu, Wrench } from 'lucide-react';

export const TechnicalSchematics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bearing' | 'guideways' | 'base' | 'needle'>('bearing');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold tracking-wider text-rose-500 uppercase">Proprietary Machine Tool Architecture</span>
          <h3 className="text-2xl font-bold text-white mt-1">Inside The Engineering: Precision Subsystems</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Explore the core structural technologies engineered into every Renuka CNC machine to achieve sub-micron tolerances and decades of zero-drift performance.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('bearing')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'bearing' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Hydro-Dynamic Bearing
          </button>
          <button
            onClick={() => setActiveTab('guideways')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'guideways' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Flat & V Guideway
          </button>
          <button
            onClick={() => setActiveTab('needle')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'needle' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            M & V Needle Roller
          </button>
          <button
            onClick={() => setActiveTab('base')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'base' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Meehanite Cast Bed
          </button>
        </div>
      </div>

      {/* Interactive Detail Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-7 bg-slate-950 rounded-lg border border-slate-800/80 p-6 flex flex-col items-center justify-center min-h-[340px] relative overflow-hidden">
          {/* Schematic visual based on activeTab */}
          {activeTab === 'bearing' && (
            <div className="w-full flex flex-col items-center">
              <svg viewBox="0 0 400 240" className="w-full max-w-md h-auto">
                <defs>
                  <radialGradient id="oilWedge" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
                  </radialGradient>
                  <linearGradient id="spindleSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                </defs>

                {/* Outer Bearing Housing */}
                <circle cx="200" cy="120" r="100" fill="none" stroke="#334155" strokeWidth="12" />
                <circle cx="200" cy="120" r="92" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />

                {/* Hydrodynamic Oil Layer */}
                <circle cx="200" cy="120" r="72" fill="url(#oilWedge)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Microsphere segments */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 200 + Math.cos(rad) * 60;
                  const y = 120 + Math.sin(rad) * 60;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="10" fill="#94a3b8" stroke="#f1f5f9" strokeWidth="1.5" />
                      <circle cx={x - 2} cy={y - 2} r="3" fill="#ffffff" />
                    </g>
                  );
                })}

                {/* Center Main Spindle */}
                <circle cx="200" cy="120" r="42" fill="url(#spindleSteel)" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="200" cy="120" r="28" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <text x="200" y="118" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600" fontFamily="sans-serif">Ø76 Spindle</text>
                <text x="200" y="132" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">45 m/s CSS</text>

                {/* Pressure Wedge Arrows */}
                <path d="M 140 100 Q 150 70 190 60" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="110" y="65" fill="#38bdf8" fontSize="10" fontFamily="sans-serif">Hydrodynamic Wedge</text>
                <line x1="165" y1="68" x2="190" y2="72" stroke="#38bdf8" strokeWidth="1" />

                {/* Zero Friction Indicator */}
                <text x="200" y="232" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                  PERPETUAL OIL FILM · ZERO METAL CONTACT · NO SPINDLE WEAR
                </text>
              </svg>
            </div>
          )}

          {activeTab === 'guideways' && (
            <div className="w-full flex flex-col items-center">
              <svg viewBox="0 0 400 240" className="w-full max-w-md h-auto">
                {/* Flat & V Guideway Cross-Section */}
                {/* Machine Base Bed (Cast Iron) */}
                <polygon points="40,190 360,190 360,130 300,130 250,90 200,130 110,130 110,190" fill="#1e293b" stroke="#475569" strokeWidth="2" />

                {/* Hand-Scraped Turcite Layer (Turquoise) */}
                <polyline points="200,126 250,86 300,126" fill="none" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" />
                <line x1="45" y1="126" x2="105" y2="126" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" />

                {/* Wheel Slide Top Block */}
                <polygon points="40,50 360,50 360,110 300,110 250,70 200,110 110,110 40,110" fill="#334155" stroke="#64748b" strokeWidth="2" />

                {/* Central Ball Screw & Servo Coupling */}
                <circle cx="155" cy="118" r="8" fill="#e2e8f0" stroke="#0284c7" strokeWidth="2" />
                <text x="155" y="100" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="sans-serif">C3 Ground Ball Screw</text>

                {/* Annotations */}
                <text x="250" y="55" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="600">V-Way Slide (Self-Centering)</text>
                <text x="75" y="55" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="600">Flat-Way (Load Support)</text>
                
                <line x1="285" y1="105" x2="340" y2="90" stroke="#06b6d4" strokeWidth="1" />
                <text x="345" y="93" fill="#06b6d4" fontSize="9" fontFamily="sans-serif">Turcite-B Layer</text>

                <text x="200" y="225" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                  DUAL-AXIS RIGIDITY · ANTI-STICK-SLIP · RESOLUTION 0.001 MM
                </text>
              </svg>
            </div>
          )}

          {activeTab === 'needle' && (
            <div className="w-full flex flex-col items-center">
              <svg viewBox="0 0 400 240" className="w-full max-w-md h-auto">
                {/* M & V Guide Ways for IG CNC */}
                <rect x="50" y="40" width="300" height="40" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <rect x="50" y="140" width="300" height="40" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />

                {/* V Rail 90 degree track */}
                <polygon points="90,80 130,120 170,80" fill="#334155" stroke="#64748b" strokeWidth="1" />
                <polygon points="230,80 270,120 310,80" fill="#334155" stroke="#64748b" strokeWidth="1" />

                {/* Close-arranged needle rollers */}
                {[102, 114, 126, 138, 150, 162, 242, 254, 266, 278, 290, 302].map((x, i) => (
                  <ellipse key={i} cx={x} cy={100 + (i % 2 === 0 ? 3 : -3)} rx="4" ry="12" fill="#cbd5e1" stroke="#475569" strokeWidth="1" transform={`rotate(${i % 2 === 0 ? 45 : -45} ${x} 100)`} />
                ))}

                <text x="200" y="30" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">IG CNC M & V Linear Bearings</text>
                <text x="200" y="110" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="600">Close-Arranged Needle Rollers</text>
                <text x="200" y="210" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                  ZERO DEFLECTION · 105,000 RPM CAPABLE · HIGH MOMENT LOAD
                </text>
              </svg>
            </div>
          )}

          {activeTab === 'base' && (
            <div className="w-full flex flex-col items-center">
              <svg viewBox="0 0 400 240" className="w-full max-w-md h-auto">
                {/* Heavy Cast Iron Bed with Ribbed Structure */}
                <path d="M 60 170 L 60 80 L 120 80 L 140 100 L 260 100 L 280 80 L 340 80 L 340 170 Z" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                {/* Internal honeycomb ribs */}
                <line x1="110" y1="80" x2="110" y2="170" stroke="#334155" strokeWidth="4" />
                <line x1="170" y1="100" x2="170" y2="170" stroke="#334155" strokeWidth="4" />
                <line x1="230" y1="100" x2="230" y2="170" stroke="#334155" strokeWidth="4" />
                <line x1="290" y1="80" x2="290" y2="170" stroke="#334155" strokeWidth="4" />

                {/* Diagonal damping stiffeners */}
                <line x1="60" y1="170" x2="110" y2="120" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="110" y1="120" x2="170" y2="170" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="230" y1="170" x2="290" y2="120" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="290" y1="120" x2="340" y2="170" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Grounding Base Pads */}
                <rect x="70" y="170" width="40" height="15" fill="#475569" rx="2" />
                <rect x="180" y="170" width="40" height="15" fill="#475569" rx="2" />
                <rect x="290" y="170" width="40" height="15" fill="#475569" rx="2" />

                <text x="200" y="60" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Stress-Relieved Meehanite Cast Iron (4,000–5,000 kg)</text>
                <text x="200" y="135" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">ARTIFICIAL AGING + INTERNAL DAMPING RIBS</text>
                <text x="200" y="215" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                  LIFETIME DIMENSIONAL INTEGRITY · ZERO THERMAL DRIFT
                </text>
              </svg>
            </div>
          )}
        </div>

        {/* Technical Explanation Column */}
        <div className="lg:col-span-5 space-y-4">
          {activeTab === 'bearing' && (
            <>
              <div className="flex items-center gap-2 text-rose-500">
                <Compass className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold tracking-wide uppercase">Zero-Friction Spindle Technology</span>
              </div>
              <h4 className="text-xl font-bold text-white">Hydro-Dynamic Microsphere Bearings</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike ordinary ball or roller bearings that suffer from brinelling, micro-chatter, and mechanical backlash over time, Renuka’s wheel spindle runs suspended on a continuous film of pressurized hydraulic oil wedge maintained by microspheric elements.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Metal Contact:</strong> Eliminates spindle wear even during 24/7 continuous roughing and high-production grinding runs.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Activity className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>CSS at 45 m/sec:</strong> Enables constant surface speed as the wheel wears down from Ø600 mm to stub diameter without losing cutting geometry.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Wrench className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Positive Spring Loading:</strong> Preloaded design automatically absorbs axial and radial thermal expansion without losing calibration.</span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'guideways' && (
            <>
              <div className="flex items-center gap-2 text-cyan-400">
                <Layers className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold tracking-wide uppercase">Guideway Engineering</span>
              </div>
              <h4 className="text-xl font-bold text-white">Flat & V Guideways with Hand-Scraped Turcite</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                The wheel head slide travels along an asymmetric Flat & V configuration. The V-way provides self-centering linear tracking with zero side-play, while the broad flat-way absorbs enormous grinding wheel plunge forces.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Master Hand-Scraping:</strong> Oil pockets created by our veteran fitters hold lubricant under load to ensure 100% boundary lubrication.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Activity className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>0.001 mm Micro-Feeds:</strong> Zero stick-slip allows flawless single-micron incremental infeed without jumping or overshoot.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Wrench className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Optional Optical Linear Scales:</strong> Can be directly interfaced with CNC controllers for closed-loop sub-micron feedback.</span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'needle' && (
            <>
              <div className="flex items-center gap-2 text-sky-400">
                <Cpu className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold tracking-wide uppercase">Internal Grinder Dynamics</span>
              </div>
              <h4 className="text-xl font-bold text-white">M & V Guideways with Needle Rollers</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                In bore grinding where wheels rotate at up to 105,000 RPM, any microscopic cross-travel looseness translates into ovality or taper. Our IG CNC platform incorporates close-arranged needle roller cages on hardened M & V ways.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Maximum Moment Rigidity:</strong> Needle rollers provide line-contact instead of point-contact, resisting heavy cantilevered bore grinding moments.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Activity className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>High-Frequency Spindle Integration:</strong> Supports belt-driven (up to 40,000 RPM) or motorized HF spindles (up to 105,000 RPM).</span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'base' && (
            <>
              <div className="flex items-center gap-2 text-amber-400">
                <Layers className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold tracking-wide uppercase">Structural Metallurgy</span>
              </div>
              <h4 className="text-xl font-bold text-white">Heavily Ribbed Cast Iron Machine Base</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                A grinding machine is only as stable as the cast iron underneath it. Every Renuka base is cast from premium Meehanite-equivalent gray iron, thermally stress-relieved in heat-treating furnaces, and naturally aged to release casting stresses.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>4,000 to 5,000 kg Solid Mass:</strong> High mass damps all harmonic resonance generated during rough grinding of interrupted surfaces or splines.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Activity className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Honeycomb Ribbing:</strong> Diagonal internal ribs optimize torsional rigidity and isolate the coolant flow channel from heat transfer.</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
