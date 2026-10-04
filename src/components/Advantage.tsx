import React from 'react';
import { ShieldCheck, Cpu, RefreshCw, Award, ArrowUpRight } from 'lucide-react';
import { TechnicalSchematics } from './TechnicalSchematics';

interface AdvantageProps {
  onOpenConfigurator: () => void;
}

export const Advantage: React.FC<AdvantageProps> = ({ onOpenConfigurator }) => {
  return (
    <section id="engineering" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>THE RENUKA ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Tier-1 Manufacturers Build With Renuka
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              When precision is measured in fractions of a micron, standard machine tools fall short. Our engineering DNA combines five decades of Mysore Kirloskar craftsmanship with advanced fluid dynamics and digital CNC controls.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConfigurator}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg border border-slate-800 flex items-center gap-1.5 transition-colors"
            >
              <span>Custom Engineering Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-rose-500" />
            </button>
          </div>
        </div>

        {/* 3 Core Pillars (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">54+ Years of Machine Tool DNA</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Founded by veteran engineers from Mysore Kirloskar Limited (MKL)—India’s legendary pioneer in machine tool design. That institutional memory in casting aging, hand-scraping, and Landis-style rigidity lives inside every spindle we build.
            </p>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              Founder Mr. Ramappa B · 54 years on the shop floor
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Pioneering Hydro-Dynamic Tech</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Proprietary Hydro-Dynamic Microsphere bearings eliminate mechanical rolling friction. Spindles float on a self-generating pressurized oil cushion, enabling 45 m/s constant surface speed with zero thermal deflection or bearing fatigue.
            </p>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              Continuous CSS · Ra &lt; 0.1 µm surface finish capability
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">End-to-End Solutions & AMC</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              From fresh CNC manufacturing to full re-engineering of massive 5-meter cylindrical grinders and Landis lines. Backed by active multi-plant Annual Maintenance Contracts (AMC) with giants like Wipro, Toyota, and Megamiles.
            </p>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              26+ major industrial retrofits · 99.2% operational uptime
            </div>
          </div>

        </div>

        {/* Embedded Interactive Technical Schematics Subsystems */}
        <TechnicalSchematics />

      </div>
    </section>
  );
};
