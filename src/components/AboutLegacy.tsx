import React from 'react';
import { Award, Compass, Users, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { LEADERSHIP_TEAM, EXHIBITIONS } from '../data/team';

export const AboutLegacy: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>THE RENUKA STORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rooted in Mysore Kirloskar Craftsmanship. Built for Tomorrow's High-Precision Machining.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Founded in 2000 in Bengaluru as <strong>Renuka Engineering Service</strong>, our enterprise was established to address the critical manufacturing challenges of the new millennium. Modern automotive and machine tool manufacturers required tailor-made grinding tolerances without the prohibitive lead times and excessive costs of foreign OEMs.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Over the last two and a half decades, Renuka has evolved into a premier machine tool builder—<strong>Renuka Grinding Solutions</strong>. From precision CNC cylindrical grinders equipped with zero-friction Hydro-Dynamic Microsphere bearings to 105,000 RPM internal bore grinders and complex re-engineering of 5-meter cylindrical grinder beds, our mission has remained uncompromised: delivery of uncompromising precision on time, every time.
            </p>

            {/* Core Values Bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Continuous Innovation:</strong> Relentless refinement of hydrodynamic oil wedges, micro-infeed stability, and digital automation.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Customer Satisfaction:</strong> Providing on-site estimation, rapid turnarounds, and lifetime maintenance support.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Excellence in Execution:</strong> 100% laser runout calibration and certified dynamic wheel balancing.
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Industrial Contribution:</strong> Strengthening India's domestic manufacturing supply chain and capital machinery sovereignty.
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-7 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Factory & Works Profile</h3>
                <span className="text-xs text-slate-400 font-mono">Bommasandra Industrial Area, Bengaluru</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                <span className="text-slate-400">Total Engineering Heritage:</span>
                <span className="text-white font-mono font-semibold">54+ Years Collective DNA</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                <span className="text-slate-400">Founding Year:</span>
                <span className="text-white font-mono font-semibold">2000 (25 Years as RES)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                <span className="text-slate-400">GST Registration:</span>
                <span className="text-slate-200 font-mono">29AJOPP6949A1ZP</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                <span className="text-slate-400">Permanent Account No:</span>
                <span className="text-slate-200 font-mono">AJOPP6949A</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Key Manufacturing Hub:</span>
                <span className="text-rose-400 font-medium">Bommasandra, Bengaluru, KA</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              "We maintain complete in-house capabilities for scraping Flat & V beds, assembling high-frequency spindles up to 105,000 RPM, and integrating Fanuc/Siemens digital panels."
            </div>
          </div>
        </div>

        {/* Section 2: Leadership Team (4 Profile Cards) */}
        <div className="space-y-8 pt-8 border-t border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>THE MASTERS OF PRECISION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Executive & Engineering Leadership
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Led by seasoned machine tool innovators combining veteran Mysore Kirloskar engineering discipline with next-generation digital CNC architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Portrait Placeholder with Initials */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 text-rose-400 font-bold text-xl flex items-center justify-center shadow-md">
                    {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">{leader.name}</h4>
                    <span className="text-xs font-semibold text-rose-400 block mt-0.5">{leader.role}</span>
                    <span className="text-[11px] font-mono text-slate-500 block">{leader.experience}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-slate-500 block uppercase font-mono text-[9px]">Domain Mastery:</span>
                  <span className="text-slate-300">{leader.specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Continuous Industry Presence (IMTEX & ENGIMACH Exhibitions) */}
        <div className="space-y-6 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>EXHIBITIONS & GLOBAL SHOWCASES</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Continuous Industry Presence</h3>
              <p className="text-xs text-slate-400 mt-1">
                Participating regularly at premier Indian and Asian machine tool expositions.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">IMTEX 2019, 2023, 2025 · ENGIMACH 2025</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXHIBITIONS.map((ex, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-400">{ex.event}</span>
                  <span className="text-[11px] font-mono text-slate-500">{ex.date}</span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                  <span className="truncate">{ex.location}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-900">
                  {ex.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
