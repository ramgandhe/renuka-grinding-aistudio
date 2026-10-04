import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenConfigurator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenConfigurator }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand & Bio (Spans 2 on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Renuka Grinding Solutions
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Group of <strong>Renuka Engineering Service</strong>, Bengaluru since 2000. Backed by 54 years of Mysore Kirloskar heritage. Pioneering state-of-the-art CNC Cylindrical, Internal, and Universal Grinding solutions and heavy industrial machine tool retrofitting.
            </p>
            <div className="pt-2 text-slate-500 font-mono text-[11px] space-y-1">
              <div>GSTIN: 29AJOPP6949A1ZP · PAN: AJOPP6949A</div>
              <div>Bommasandra Industrial Area, Bengaluru - 560099</div>
            </div>
          </div>

          {/* Column 2: CNC Machines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              CNC Machines
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#products" className="hover:text-white transition-colors">AWH Cylindrical Grinders (160–350)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">IG CNC Internal Grinders (1260 / XL)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Universal Grinders S380x900</a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-white transition-colors">Hydro-Dynamic Spindle Bearings</a>
              </li>
              <li>
                <button onClick={() => onOpenConfigurator()} className="text-rose-400 hover:text-rose-300">
                  Custom Quotation Builder →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Retrofitting */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Services & Spares
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Full-Scale CNC Retrofitting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Ball Screw Reconditioning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Plant-Floor AMC Contracts</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Landis & Shimoga Spares Supply</a>
              </li>
              <li>
                <button onClick={onOpenBrochure} className="hover:text-white transition-colors text-left">
                  Download Technical Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Clients & Legacy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Legacy & Proof
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">54 Years Mysore Kirloskar DNA</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Leadership Team Profiles</a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">Voice of Customer Videos</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">IMTEX & ENGIMACH Showcases</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">26+ Reconditioned Installations</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Renuka Grinding Solutions / Renuka Engineering Service. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <button
              onClick={() => setLegalModal('cookies')}
              className="hover:text-slate-200 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl space-y-4 text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white capitalize">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms of Machine Sale & Retrofitting'}
                {legalModal === 'cookies' && 'Cookie & Tracking Policy'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              {legalModal === 'privacy' && (
                <>
                  <p>Renuka Engineering Service and Renuka Grinding Solutions respect the intellectual property and confidentiality of all manufacturing drawings and technical data submitted through our quotation platforms.</p>
                  <p>Technical specifications, component drawings, and contact details are used solely to prepare commercial quotations and provide maintenance engineering services under mutual Non-Disclosure Agreements (NDAs).</p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>All Renuka CNC grinding machines are manufactured against rigorous DIN and ISO machine tool geometrical alignment standards, tested with laser interferometry and certified dynamic runout balancing prior to shop floor dispatch.</p>
                  <p>Retrofitting projects include comprehensive inspection reports, guarantee against agreed runout tolerances, and optional warranty maintenance extensions.</p>
                </>
              )}
              {legalModal === 'cookies' && (
                <>
                  <p>Our website utilizes essential session cookies to remember selected machine models, quotation builder parameters, and technical brochure downloads.</p>
                  <p>No third-party behavioral advertising cookies are placed on your machine. You may reset cookie preferences at any time.</p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
