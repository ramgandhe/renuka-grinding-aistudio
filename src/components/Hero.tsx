import React, { useState } from 'react';
import { Play, ArrowRight, ShieldCheck, Gauge, Layers, Award } from 'lucide-react';
import { VideoResource } from '../types';

interface HeroProps {
  onOpenVideo: (video: VideoResource) => void;
  onOpenConfigurator: () => void;
  onOpenBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideo, onOpenConfigurator, onOpenBrochure }) => {
  const [isSparkling, setIsSparkling] = useState(true);

  const journeyVideo: VideoResource = {
    id: 'journey',
    title: 'The Renuka Journey: 54 Years of Precision Legacy',
    category: 'Journey',
    youtubeId: 'xzygFg6NMf8',
    duration: '04:12',
    description: 'A deep look inside our Bommasandra manufacturing works, master hand-scraping techniques, assembly lines, and the engineering philosophy passed down from Mysore Kirloskar.'
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800 bg-grid-pattern">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>BENGALURU MACHINE TOOL WORKS · ESTABLISHED 2000</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              State-of-the-Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300">Grinding Solutions.</span> Defined by Precision. Driven by Legacy.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Backed by 54 years of machine tool expertise rooted in Mysore Kirloskar. Empowering India's premier automotive and manufacturing sectors with bespoke CNC Cylindrical, Internal, and Universal Grinders engineered with zero-friction Hydro-Dynamic Microsphere bearings.
            </p>

            {/* CTA Button Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-rose-900/40 hover:shadow-rose-900/60 transition-all flex items-center gap-2 group"
              >
                <span>Explore Our Machines</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenVideo(journeyVideo)}
                className="px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-sm font-semibold rounded-lg border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2.5 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-rose-600/20 text-rose-400 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-rose-500 text-rose-500 ml-0.5" />
                </div>
                <span>Watch Our Journey</span>
                <span className="text-xs text-slate-500 font-mono">04:12</span>
              </button>
            </div>

            {/* Metric proof points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">54+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years Machine Tool DNA</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-rose-400 font-mono tabular-nums">45 <span className="text-xs font-sans text-slate-400">m/s</span></div>
                <div className="text-xs text-slate-400 mt-0.5">Constant Surface Speed</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white font-mono tabular-nums">105k</div>
                <div className="text-xs text-slate-400 mt-0.5">RPM High-Freq Spindle</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">1 µm</div>
                <div className="text-xs text-slate-400 mt-0.5">Infeed Resolution</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Machine Spotlight & Live Action Graphics */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
              
              {/* Top status bar inside panel */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-medium text-slate-300">AWH CNC CYLINDRICAL GRINDER</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">SERIES 350 x 900</span>
              </div>

              {/* Machine SVG Schematic with Spark Animation */}
              <div className="py-6 flex flex-col items-center justify-center relative">
                <svg viewBox="0 0 360 220" className="w-full max-w-sm h-auto">
                  {/* Heavy Base Casting */}
                  <rect x="30" y="160" width="300" height="50" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                  <line x1="50" y1="185" x2="310" y2="185" stroke="#0f172a" strokeWidth="4" />

                  {/* Guideways Turcite */}
                  <rect x="40" y="152" width="280" height="8" rx="2" fill="#0284c7" />

                  {/* Work Head (Left) */}
                  <rect x="45" y="90" width="70" height="62" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
                  <rect x="115" y="105" width="20" height="30" fill="#94a3b8" />
                  <polygon points="135,112 145,120 135,128" fill="#e2e8f0" stroke="#475569" />
                  <text x="80" y="80" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Work Head</text>

                  {/* Workpiece (Ground Shaft) */}
                  <rect x="145" y="117" width="95" height="7" rx="1" fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />

                  {/* Tailstock (Right) */}
                  <rect x="240" y="95" width="60" height="57" rx="4" fill="#334155" stroke="#475569" strokeWidth="2" />
                  <polygon points="240,112 230,120 240,128" fill="#e2e8f0" stroke="#475569" />
                  <text x="270" y="80" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Hydraulic TS</text>

                  {/* Grinding Wheel Head (Top Center) */}
                  <g className={isSparkling ? "animate-pulse" : ""}>
                    <rect x="160" y="20" width="65" height="50" rx="3" fill="#475569" stroke="#64748b" strokeWidth="2" />
                    {/* Spindle wheel */}
                    <circle cx="192" cy="95" r="34" fill="#334155" stroke="#cbd5e1" strokeWidth="3" />
                    <circle cx="192" cy="95" r="14" fill="#0f172a" stroke="#f43f5e" strokeWidth="2" />
                    <text x="192" y="15" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">Wheel Head Ø600</text>
                  </g>

                  {/* Grinding Contact Point & Sparks */}
                  {isSparkling && (
                    <g>
                      <circle cx="192" cy="120" r="3" fill="#facc15" />
                      <line x1="192" y1="120" x2="215" y2="135" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                      <line x1="192" y1="120" x2="225" y2="128" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="192" y1="120" x2="208" y2="142" stroke="#fbbf24" strokeWidth="1" />
                    </g>
                  )}
                </svg>

                {/* Sub-system callout badges */}
                <div className="w-full mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">Spindle Bearing</span>
                    <strong className="text-rose-400">Hydro-Dynamic Microsphere</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">Guideways</span>
                    <strong className="text-sky-400">Flat & V with Turcite</strong>
                  </div>
                </div>
              </div>

              {/* Panel Bottom Controls */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setIsSparkling(!isSparkling)}
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Gauge className="w-3.5 h-3.5 text-rose-500" />
                  <span>{isSparkling ? 'Spindle Active: 45 m/s' : 'Spindle Idled'}</span>
                </button>

                <button
                  onClick={onOpenConfigurator}
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Configure Spec
                </button>
              </div>

            </div>

            {/* Overlap engineering seal */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-slate-900 border border-slate-700/80 rounded-xl p-3 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Mysore Kirloskar Heritage</div>
                <div className="text-slate-400">Engineered in Bommasandra, BLR</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
