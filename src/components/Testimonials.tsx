import React from 'react';
import { Play, Quote, CheckCircle2, Video, ArrowUpRight } from 'lucide-react';
import { VideoResource } from '../types';
import { TESTIMONIALS_TEXT } from '../data/media';

interface TestimonialsProps {
  onOpenVideo: (video: VideoResource) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenVideo }) => {
  const vocVideo1: VideoResource = {
    id: 'voc-1',
    title: 'Voice of Customer: Automotive OEM Plant Head',
    category: 'Customer Story',
    youtubeId: 'v3P8Z9xO76E',
    duration: '02:30',
    description: 'Hear from our automotive client on how Renuka re-engineered their Landis cylindrical grinding cell to achieve 99% production uptime and sub-micron shaft repeatability.'
  };

  const vocVideo2: VideoResource = {
    id: 'voc-2',
    title: 'Voice of Customer: Bearing Component Manufacturer',
    category: 'Customer Story',
    youtubeId: 'f3_SA27p1vA',
    duration: '03:15',
    description: 'Technical evaluation of Renuka IG CNC internal bore grinders and quarterly AMC contract performance in bearing cup production.'
  };

  return (
    <section className="py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>VOICE OF THE CUSTOMER (VOC)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Excellence, Validated by Our Clients
          </h2>
          <p className="text-base text-slate-300">
            Real production plant heads and maintenance directors discuss their experience with Renuka CNC machines, rebuilds, and active AMC contracts.
          </p>
        </div>

        {/* Video Testimonials Side-by-Side (Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Video 1 Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-rose-400">AUTOMOTIVE OEM CASE STUDY</span>
                <span className="text-xs text-slate-500 font-mono">02:30 MIN</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                Landis Grinding Cell Re-Engineering & Repeatability
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Watch how our Bommasandra engineering team rebuilt and restored classic Landis cylindrical grinders with new hydraulic systems, achieving tolerances superior to OEM brand new specs.
              </p>
            </div>

            {/* Video preview thumbnail box */}
            <div 
              onClick={() => onOpenVideo(vocVideo1)}
              className="relative aspect-video bg-slate-950 border-t border-slate-800 cursor-pointer overflow-hidden flex items-center justify-center group-hover:bg-slate-900 transition-colors"
            >
              {/* Fallback decorative graphic */}
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-rose-600/90 text-white flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:bg-rose-500 transition-all">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Click to Play Client Interview</div>
              </div>

              {/* YouTube badge */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-xs rounded text-[11px] font-mono text-slate-300">
                HD · Video Story
              </div>
            </div>
          </div>

          {/* Video 2 Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-sky-400">BEARING INDUSTRY PRECISION</span>
                <span className="text-xs text-slate-500 font-mono">03:15 MIN</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                Bearing Cup (SPL-90) ID Grinding & 24/7 AMC Support
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Megamiles Bearing Cups technical leadership shares why they rely on Renuka IG CNC internal grinders and quarterly AMC visits to sustain high-volume automotive production.
              </p>
            </div>

            <div 
              onClick={() => onOpenVideo(vocVideo2)}
              className="relative aspect-video bg-slate-950 border-t border-slate-800 cursor-pointer overflow-hidden flex items-center justify-center group-hover:bg-slate-900 transition-colors"
            >
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-sky-600/90 text-white flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:bg-sky-500 transition-all">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <div className="text-xs text-slate-400 font-medium">Click to Play Client Interview</div>
              </div>

              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-xs rounded text-[11px] font-mono text-slate-300">
                HD · Video Story
              </div>
            </div>
          </div>

        </div>

        {/* Written Attributable Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {TESTIMONIALS_TEXT.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono text-rose-400 block">{t.highlight}</span>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs">
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-slate-500">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
