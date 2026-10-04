import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('renuka_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly to avoid intrusive arrival
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('renuka_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('renuka_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-rose-600/10 border border-rose-500/20 text-rose-500 shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Privacy & Cookie Notice</h4>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-500 hover:text-slate-300 transition-colors p-1"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            We use technical cookies and analytical measurement to optimize machine specifications, technical catalogs, and secure quotation delivery.
          </p>

          {showPreferences && (
            <div className="mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Essential & Security</span>
                <span className="text-emerald-400 font-mono text-[10px]">ALWAYS ACTIVE</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Machine Analytics & Performance</span>
                <span className="text-slate-500 font-mono text-[10px]">ANONYMOUS</span>
              </div>
            </div>
          )}

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={acceptAll}
              className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Accept All
            </button>
            <button
              onClick={acceptEssential}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="text-[11px] text-slate-400 hover:text-slate-200 underline underline-offset-2 ml-auto"
            >
              {showPreferences ? 'Hide' : 'Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
