import React, { useState } from 'react';
import { Search, Wrench, RefreshCw, Cpu, ShieldCheck, Check, ArrowRight, Layers, FileCheck } from 'lucide-react';
import { RETROFIT_PROJECTS, AMC_HIGHLIGHTS } from '../data/retrofitting';

interface RetrofittingServicesProps {
  onOpenConfigurator: () => void;
}

export const RetrofittingServices: React.FC<RetrofittingServicesProps> = ({ onOpenConfigurator }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Automotive', 'Bearings', 'Machine Tools', 'Hydraulics & General'];

  const filteredProjects = RETROFIT_PROJECTS.filter(project => {
    const matchesSearch = 
      project.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.machines.some(m => m.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>THE SERVICE & RETROFITTING ARM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Re-Engineering, CNC Modernization & Spares
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              We specialize in converting aging, obsolete mechanical machine tools into high-productivity modern CNC assets with Fanuc or Siemens controls, Turcite guideways, and brand new sub-micron ball screws.
            </p>
          </div>

          <button
            onClick={onOpenConfigurator}
            className="px-5 py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-rose-900/30 whitespace-nowrap shrink-0"
          >
            <span>Request Retrofit Feasibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Core Service Divisions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Full-Scale CNC Retrofitting</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete mechanical teardown, slideway hand-scraping, Turcite application, servo motor adaptation, and custom PLC logic development for conventional grinders, boring machines, and lathes.
            </p>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              Transform legacy assets into high-productivity CNCs at 35% the cost of new machines.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-sky-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Annual Maintenance Contracts (AMC)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Preventive, predictive, and breakdown maintenance contracts for CNC turning centers, machining centers, and heavy grinders. Rapid on-site technician deployment across industrial belts.
            </p>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              Active multi-plant AMCs with Wipro, Toyota Kirloskar, and Megamiles.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="w-11 h-11 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Custom Spares & Ball Screw Overhaul</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reconditioning of precision ball screws of any length. Supply of spares for Shimoga, Enterprises Series, Bombay & Turn-Masters Series, and Landis Grinders against drawings or samples.
            </p>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              Hydraulic, pneumatic, and electrical machine tool items in stock.
            </div>
          </div>

        </div>

        {/* Searchable Database of All 26+ Reconditioned Machine Projects */}
        <div className="p-6 lg:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-rose-500" />
                <h3 className="text-lg font-bold text-white">Verified Machine Reconditioning Track Record</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Official list of major industrial retrofitting contracts delivered by Renuka Engineering Service.
              </p>
            </div>

            {/* Filter and Search Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category pills */}
              <div className="flex items-center p-1 bg-slate-950 rounded-lg border border-slate-800">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      selectedCategory === cat ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search client, machine or location..."
                  className="pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 w-56"
                />
              </div>
            </div>
          </div>

          {/* Results Grid / Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[580px] overflow-y-auto pr-1">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span>PROJECT #{p.id.toString().padStart(2, '0')}</span>
                    <span className="text-rose-400">{p.category}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{p.customer}</h4>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{p.location}</div>
                  
                  <div className="mt-3 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Machines Serviced:</span>
                    {p.machines.map((m, mIdx) => (
                      <div key={mIdx} className="text-xs font-mono text-slate-300 bg-slate-900/60 px-2 py-1 rounded border border-slate-800/60">
                        {m}
                      </div>
                    ))}
                  </div>

                  {p.description && (
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <Check className="w-3 h-3" /> Commissioned
                  </span>
                  <span className="text-slate-500 font-mono">Bengaluru Works</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-slate-500 text-center font-mono">
            Showing {filteredProjects.length} of {RETROFIT_PROJECTS.length} verified industrial installations
          </div>
        </div>

        {/* Section 2: Active AMCs Highlight */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">PREVENTIVE PLANT PROTECTION</span>
            <h3 className="text-2xl font-bold text-white mt-1">Multi-Plant Annual Maintenance Contracts (AMC)</h3>
            <p className="text-sm text-slate-400 mt-1">
              Guaranteed technician turnaround times and structured quarterly maintenance schedules to keep production lines operating with zero unexpected downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AMC_HIGHLIGHTS.map((amc, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{amc.client}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/60 text-sky-400">
                    ACTIVE CONTRACT
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">{amc.facilities}</div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {amc.scope}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
