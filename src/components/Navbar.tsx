import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight, FileDown } from 'lucide-react';

interface NavbarProps {
  onOpenConfigurator: (machineId?: string) => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfigurator, onOpenBrochure }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md">
      {/* Top micro bar for direct hotline and factory location */}
      <div className="hidden lg:block bg-slate-900/60 border-b border-slate-800/50 py-1 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-300">ESTD. 2000 · BENGALURU, INDIA</span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span>Bommasandra Industrial Area Works</span>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <span className="text-rose-400 font-medium">54+ Years Machine Tool DNA (ex-Mysore Kirloskar)</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9845080082" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-rose-500" />
              <span>Technical Hotline: <strong className="text-slate-200">98450 80082 / 98453 36826</strong></span>
            </a>
            <span aria-hidden="true" className="text-slate-700">|</span>
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <FileDown className="w-3 h-3 text-rose-400" />
              <span>Download Catalog</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-600 to-rose-800 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-rose-900/40 border border-rose-500/40">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-rose-400 transition-colors">
              Renuka Grinding Solutions
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono">
              Renuka Engineering Service
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
          <a href="#products" className="hover:text-white transition-colors">Products & Models</a>
          <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
          <a href="#services" className="hover:text-white transition-colors">Retrofitting & AMC</a>
          <a href="#media" className="hover:text-white transition-colors">Media & VoC</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenConfigurator()}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-md shadow-rose-900/30 transition-all hover:shadow-rose-900/50 whitespace-nowrap"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenConfigurator()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 rounded-lg"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              About Us & 54-Year Legacy
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Products & CNC Models
            </a>
            <a
              href="#engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Hydro-Dynamic Bearing Tech
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Retrofitting & 26+ Case Studies
            </a>
            <a
              href="#media"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Videos & Download Center
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white"
            >
              Factory Contact & Map
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full py-2.5 bg-slate-900 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border border-slate-800"
            >
              <FileDown className="w-4 h-4 text-rose-500" />
              <span>Download 5-Page Catalog</span>
            </button>
            <a
              href="tel:9845080082"
              className="w-full py-2.5 bg-rose-600/10 text-rose-400 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 border border-rose-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 98450 80082</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
