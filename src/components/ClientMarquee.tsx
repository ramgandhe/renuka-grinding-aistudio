import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/retrofitting';

export const ClientMarquee: React.FC = () => {
  return (
    <div className="py-12 border-b border-slate-800/80 bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>TRUSTED BY INDIA'S PREMIER AUTOMOTIVE & HEAVY ENGINEERING CONGLOMERATES</span>
        </div>
      </div>

      {/* Double Marquee Ribbon */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Subtle gradient fades on sides */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 whitespace-nowrap animate-marquee py-2">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-rose-500/60" />
              <span className="text-sm font-bold tracking-tight font-sans">{client}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust metric ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-400">
        <div>
          <strong className="text-white font-mono">100%</strong> On-Site Dynamic Balancing & Runout Validation
        </div>
        <div className="hidden md:block text-slate-700">·</div>
        <div>
          <strong className="text-white font-mono">&lt; 0.8 µm</strong> Total Spindle Cartridge Runout Standard
        </div>
        <div className="hidden md:block text-slate-700">·</div>
        <div>
          <strong className="text-white font-mono">24/7</strong> Emergency Maintenance Response in Karnataka / TN
        </div>
      </div>
    </div>
  );
};
