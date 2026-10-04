import React, { useState } from 'react';
import { Play, Sliders, CheckCircle2, ChevronDown, ChevronUp, Layers, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { MACHINES, COMMON_FEATURES } from '../data/machines';
import { MachineModel, VideoResource } from '../types';

interface ProductCatalogProps {
  onOpenConfigurator: (machineId?: string) => void;
  onOpenVideo: (video: VideoResource) => void;
  onOpenBrochure: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenConfigurator,
  onOpenVideo,
  onOpenBrochure
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cylindrical' | 'internal' | 'universal'>('all');
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({
    'awh-cnc': true,
    'ig-cnc': false,
    'universal-cnc': false
  });
  const [showComparison, setShowComparison] = useState(false);

  const filteredMachines = selectedCategory === 'all' 
    ? MACHINES 
    : MACHINES.filter(m => m.category === selectedCategory);

  const toggleSpecs = (id: string) => {
    setExpandedSpecs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="products" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>CORE PRODUCT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Precision CNC Grinding Machinery
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Every machine is built in our Bommasandra facility on stress-relieved Meehanite cast beds, featuring hand-scraped guideways, automated lubrication, and your choice of industrial Fanuc, Siemens, Mitsubishi, or Fagor CNC control systems.
            </p>
          </div>

          {/* Interactive filter controls and comparison trigger */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedCategory === 'all' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Series
              </button>
              <button
                onClick={() => setSelectedCategory('cylindrical')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedCategory === 'cylindrical' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cylindrical (AWH)
              </button>
              <button
                onClick={() => setSelectedCategory('internal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedCategory === 'internal' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Internal (IG)
              </button>
              <button
                onClick={() => setSelectedCategory('universal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  selectedCategory === 'universal' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Universal
              </button>
            </div>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors whitespace-nowrap"
            >
              {showComparison ? 'Hide Spec Matrix' : 'Compare Specs Matrix'}
            </button>
          </div>
        </div>

        {/* Comparison Matrix (Collapsible) */}
        {showComparison && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 overflow-x-auto animate-in fade-in duration-200">
            <div className="text-sm font-bold text-white mb-3 flex items-center justify-between">
              <span>Cross-Model Engineering Specification Comparison</span>
              <span className="text-xs font-mono text-slate-500">3 Core Platforms</span>
            </div>
            <table className="w-full text-xs text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="py-2.5 px-4 font-semibold">Parameter</th>
                  <th className="py-2.5 px-4 font-semibold text-rose-400">AWH CNC Cylindrical</th>
                  <th className="py-2.5 px-4 font-semibold text-sky-400">IG CNC Internal Grinder</th>
                  <th className="py-2.5 px-4 font-semibold text-emerald-400">Universal Grinder S380x900</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Controlled Axes</td>
                  <td className="py-2 px-4 text-white font-mono">2 Axes (X & Z)</td>
                  <td className="py-2 px-4 text-white font-mono">2 Axes (X & Z)</td>
                  <td className="py-2 px-4 text-white font-mono">2 Axes (X & Z)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Target Application</td>
                  <td className="py-2 px-4 text-white">External Shafts, Axles, Spindles</td>
                  <td className="py-2 px-4 text-white">Bearing Cups, Bores, Sleeves</td>
                  <td className="py-2 px-4 text-white">Plunge, Traverse, Taper & Multi-Op</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Max Grinding Dia / ID</td>
                  <td className="py-2 px-4 text-white font-mono">Ø150 to Ø350 mm OD</td>
                  <td className="py-2 px-4 text-white font-mono">Ø6 mm to Ø120 mm ID</td>
                  <td className="py-2 px-4 text-white font-mono">Ø380 mm OD / Ø15-300 ID</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Admit Between Centers</td>
                  <td className="py-2 px-4 text-white font-mono">460 mm / 900 mm</td>
                  <td className="py-2 px-4 text-white font-mono">N/A (Chucking system)</td>
                  <td className="py-2 px-4 text-white font-mono">950 mm</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Spindle Bearing System</td>
                  <td className="py-2 px-4 text-white">Hydro-Dynamic Microsphere</td>
                  <td className="py-2 px-4 text-white">Angular Contact / HF Cartridge</td>
                  <td className="py-2 px-4 text-white">Hydro-Dynamic Microsphere</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Max Spindle Speed / CSS</td>
                  <td className="py-2 px-4 text-white font-mono">45 m/sec CSS (Ø600 Wheel)</td>
                  <td className="py-2 px-4 text-white font-mono">Up to 105,000 RPM (H.F.)</td>
                  <td className="py-2 px-4 text-white font-mono">45 m/sec CSS + 18,000 RPM ID</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Guideway Geometry</td>
                  <td className="py-2 px-4 text-white">Flat & V with Hand-Scraped Turcite</td>
                  <td className="py-2 px-4 text-white">M & V Linear Needle Rollers</td>
                  <td className="py-2 px-4 text-white">Flat & V with Hand-Scraped Turcite</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Workhead Swivel</td>
                  <td className="py-2 px-4 text-white font-mono">Fixed (Dead/Live Center)</td>
                  <td className="py-2 px-4 text-white font-mono">0° to 30° adjustable</td>
                  <td className="py-2 px-4 text-white font-mono">0° to 90° full swivel</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-slate-400 font-medium">Total Machine Weight</td>
                  <td className="py-2 px-4 text-white font-mono">4,000 kg</td>
                  <td className="py-2 px-4 text-white font-mono">4,000 kg</td>
                  <td className="py-2 px-4 text-white font-mono">5,000 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Machine Product Cards */}
        <div className="space-y-12">
          {filteredMachines.map((machine) => {
            const isExpanded = !!expandedSpecs[machine.id];
            return (
              <div
                key={machine.id}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all shadow-xl"
              >
                {/* Main Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8 items-start">
                  
                  {/* Left Column: Visual Mock & Model Badges */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="relative aspect-[4/3] bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                      
                      {/* SVG Machine Representation */}
                      {machine.id === 'awh-cnc' && (
                        <div className="w-full flex flex-col items-center">
                          <svg viewBox="0 0 280 180" className="w-full max-w-[240px] h-auto">
                            {/* Machine Enclosure */}
                            <rect x="20" y="20" width="240" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                            {/* Window */}
                            <rect x="40" y="35" width="130" height="85" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                            {/* Wheel behind window */}
                            <circle cx="105" cy="75" r="28" fill="#334155" stroke="#e11d48" strokeWidth="3" />
                            {/* Workpiece */}
                            <rect x="60" y="92" width="90" height="6" fill="#94a3b8" />
                            {/* CNC Operator Console */}
                            <rect x="185" y="35" width="60" height="90" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
                            <rect x="192" y="42" width="46" height="30" rx="2" fill="#0284c7" fillOpacity="0.3" stroke="#0284c7" />
                            {/* Push buttons */}
                            <circle cx="198" cy="85" r="3" fill="#22c55e" />
                            <circle cx="208" cy="85" r="3" fill="#eab308" />
                            <circle cx="218" cy="85" r="3" fill="#ef4444" />
                            <circle cx="228" cy="85" r="3" fill="#38bdf8" />
                            {/* Base Footing */}
                            <rect x="10" y="160" width="260" height="15" fill="#0f172a" />
                          </svg>
                          <span className="text-[11px] font-mono text-slate-400 mt-2">
                            AWH CNC Heavy Enclosure & Fanuc Operator Panel
                          </span>
                        </div>
                      )}

                      {machine.id === 'ig-cnc' && (
                        <div className="w-full flex flex-col items-center">
                          <svg viewBox="0 0 280 180" className="w-full max-w-[240px] h-auto">
                            <rect x="20" y="20" width="240" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                            {/* Grinder Window */}
                            <rect x="35" y="35" width="140" height="85" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                            {/* Diaphragm chuck on left */}
                            <rect x="45" y="60" width="25" height="40" fill="#475569" stroke="#94a3b8" />
                            {/* Internal High Speed Spindle Quiver */}
                            <line x1="70" y1="80" x2="140" y2="80" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
                            <circle cx="72" cy="80" r="5" fill="#f43f5e" />
                            {/* Controller Screen */}
                            <rect x="188" y="35" width="58" height="90" rx="4" fill="#0f172a" stroke="#64748b" />
                            <rect x="194" y="42" width="46" height="30" rx="2" fill="#0369a1" fillOpacity="0.4" />
                            <rect x="10" y="160" width="260" height="15" fill="#0f172a" />
                          </svg>
                          <span className="text-[11px] font-mono text-slate-400 mt-2">
                            IG CNC Bore Grinding Cell (105,000 RPM Spindle)
                          </span>
                        </div>
                      )}

                      {machine.id === 'universal-cnc' && (
                        <div className="w-full flex flex-col items-center">
                          <svg viewBox="0 0 280 180" className="w-full max-w-[240px] h-auto">
                            <rect x="20" y="20" width="240" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                            <rect x="35" y="35" width="140" height="85" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
                            {/* Swiveling workhead at 30 deg */}
                            <g transform="rotate(-20 60 80)">
                              <rect x="45" y="65" width="30" height="30" fill="#475569" />
                            </g>
                            {/* External wheel & ID attachment */}
                            <circle cx="130" cy="75" r="26" fill="#334155" stroke="#10b981" strokeWidth="2.5" />
                            <rect x="188" y="35" width="58" height="90" rx="4" fill="#0f172a" stroke="#64748b" />
                            <rect x="10" y="160" width="260" height="15" fill="#0f172a" />
                          </svg>
                          <span className="text-[11px] font-mono text-slate-400 mt-2">
                            Universal Grinder S380x900 (OD + ID Dual Workstation)
                          </span>
                        </div>
                      )}

                      {/* Video Trigger Overlay */}
                      {machine.youtubeId && (
                        <button
                          onClick={() => onOpenVideo({
                            id: machine.id,
                            title: `${machine.name} in Action`,
                            category: 'Product Demo',
                            youtubeId: machine.youtubeId!,
                            duration: 'Demo',
                            description: machine.description
                          })}
                          className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs"
                        >
                          <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shadow-lg">
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          </div>
                          <span>Watch Live Demo</span>
                        </button>
                      )}
                    </div>

                    {/* Available sizes */}
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="text-slate-400 py-1 font-mono">Available Configurations:</span>
                      {machine.modelsAvailable.map(mod => (
                        <span key={mod} className="font-mono text-xs px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Descriptions & Key Highlights */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-rose-500 uppercase tracking-wider">
                        <span>{machine.categoryLabel}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400 font-mono">2-AXIS CNC INTERPOLATION</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-1">{machine.name}</h3>
                      <p className="text-xs font-medium text-rose-400/90 mt-0.5">{machine.tagline}</p>
                      <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                        {machine.description}
                      </p>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Engineering Highlights
                      </h4>
                      <div className="space-y-1.5">
                        {machine.keyHighlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenConfigurator(machine.id)}
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-rose-900/30"
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Configure & Get Quote</span>
                      </button>

                      <button
                        onClick={() => toggleSpecs(machine.id)}
                        className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Collapse Technical Specs' : 'View Full Technical Specs'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={onOpenBrochure}
                        className="px-3.5 py-2.5 text-slate-400 hover:text-white text-xs font-medium transition-colors"
                      >
                        Download PDF Spec Sheet
                      </button>
                    </div>
                  </div>

                </div>

                {/* Collapsible Full Specs Table & Accessories */}
                {isExpanded && (
                  <div className="border-t border-slate-800 bg-slate-950/80 p-6 lg:p-8 space-y-6 animate-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      
                      {/* Left: Technical Specification Table */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                            Technical Data Sheet: {machine.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500">ISO / DIN Tolerances</span>
                        </div>

                        <div className="rounded-xl border border-slate-800 overflow-hidden">
                          <table className="w-full text-xs text-left">
                            <tbody className="divide-y divide-slate-800/80">
                              {machine.specs.map((spec, sIdx) => (
                                <tr key={sIdx} className={sIdx % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-950'}>
                                  <td className="py-2 px-3.5 text-slate-400 font-medium w-1/2">
                                    {spec.label}
                                  </td>
                                  <td className="py-2 px-3.5 text-slate-200 font-mono font-medium">
                                    {spec.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Right: Accessories (Standard vs Optional) */}
                      <div className="lg:col-span-5 space-y-5">
                        
                        {/* Standard Accessories */}
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2.5">
                          <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Standard Equipment Included</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-400">
                            {machine.standardAccessories.map((acc, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2">
                                <span className="text-emerald-500 text-[10px] mt-0.5">●</span>
                                <span>{acc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Optional Accessories */}
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2.5">
                          <div className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                            <Sliders className="w-3.5 h-3.5 text-rose-400" />
                            <span>Optional Automation & Tooling Upgrades</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-400">
                            {machine.optionalAccessories.map((opt, oIdx) => (
                              <li key={oIdx} className="flex items-start gap-2">
                                <span className="text-rose-500 text-[10px] mt-0.5">○</span>
                                <span>{opt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Common Features Banner */}
        <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-wider">Universal Machine Standards</span>
            <h3 className="text-xl font-bold text-white mt-1">Built Into Every Renuka Machine Tool</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_FEATURES.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="space-y-2">
                <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
