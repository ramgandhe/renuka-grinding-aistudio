import React from 'react';
import { Play, FileText, Download, Video, ArrowRight, ShieldCheck } from 'lucide-react';
import { VIDEO_RESOURCES } from '../data/media';
import { VideoResource } from '../types';

interface MediaResourcesProps {
  onOpenVideo: (video: VideoResource) => void;
  onOpenBrochure: (doc?: 'brochure' | 'profile') => void;
}

export const MediaResources: React.FC<MediaResourcesProps> = ({ onOpenVideo, onOpenBrochure }) => {
  return (
    <section id="media" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>MEDIA & ENGINEERING RESOURCES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Video Library & Technical Downloads
            </h2>
            <p className="text-base text-slate-300 mt-3 leading-relaxed">
              Explore our machines running high-speed production cycles, listen to firsthand customer case studies, and download certified layout catalogs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBrochure('brochure')}
              className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-md shadow-rose-900/30 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download Technical Brochure</span>
            </button>
          </div>
        </div>

        {/* Video Library Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Video className="w-4 h-4 text-rose-500" />
              <span>Machine Demonstrations & Customer VoC</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">5 High-Definition Recordings</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_RESOURCES.map((video) => (
              <div
                key={video.id}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                {/* Video Clickable Thumbnail */}
                <div
                  onClick={() => onOpenVideo(video)}
                  className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden flex items-center justify-center group-hover:bg-slate-800/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 rounded font-mono text-[10px] text-slate-300">
                    {video.duration}
                  </div>
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-rose-950/80 border border-rose-800/60 rounded font-mono text-[10px] text-rose-400">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-3 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                    <button
                      onClick={() => onOpenVideo(video)}
                      className="text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
                    >
                      <span>Play Video</span>
                      <Play className="w-3 h-3 fill-rose-400" />
                    </button>
                    <span className="text-slate-500 font-mono text-[11px]">YouTube HD</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Download Center (Lead Capture Cards) */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-rose-500 uppercase tracking-wider">OFFICIAL SPECIFICATION DOWNLOADS</span>
            <h3 className="text-2xl font-bold text-white">Engineering Catalogs & Machine Footprint Blueprints</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Access the complete 5-page color technical brochure detailing AWH Cylindrical, IG Internal, and Universal Grinder CNC models, floor layouts, hydraulic schematic diagrams, and verified client list.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Free Technical Access
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-sky-400" /> Print-Ready High-Res PDF
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-400" /> Includes DIN/ISO Tolerances
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => onOpenBrochure('brochure')}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/80 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-rose-600/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-rose-400 transition-colors">
                    Renuka Grinding Solutions Brochure
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">5 Pages · Specs & Layouts (3.4 MB)</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors shrink-0" />
            </button>

            <button
              onClick={() => onOpenBrochure('profile')}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/80 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">
                    RES Company Profile & Case Studies
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">26+ Client Retrofits & AMC (2.1 MB)</div>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
