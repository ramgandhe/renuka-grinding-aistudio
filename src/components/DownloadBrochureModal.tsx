import React, { useState, useEffect } from 'react';
import { X, FileText, CheckCircle2, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface DownloadBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoc?: 'brochure' | 'profile';
}

export const DownloadBrochureModal: React.FC<DownloadBrochureModalProps> = ({
  isOpen,
  onClose,
  defaultDoc = 'brochure'
}) => {
  const [selectedDoc, setSelectedDoc] = useState<'brochure' | 'profile'>(defaultDoc);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'AWH CNC Cylindrical Grinders'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultDoc) setSelectedDoc(defaultDoc);
  }, [defaultDoc]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate lead capture API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Technical Download Center</h3>
              <p className="text-xs text-slate-400">Renuka Grinding Solutions · Bengaluru Works</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Document Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Engineering Document
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedDoc('brochure')}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      selectedDoc === 'brochure'
                        ? 'border-rose-500 bg-rose-950/20 shadow-sm'
                        : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-rose-400">5-Page Catalog</span>
                      <span className="text-xs text-slate-400 font-mono">PDF · 3.4 MB</span>
                    </div>
                    <div className="text-sm font-bold text-white">AWH, IG & Universal CNC Catalog</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete machine spec tables, standard/optional accessories, and bearing diagrams.
                    </p>
                  </div>

                  <div
                    onClick={() => setSelectedDoc('profile')}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      selectedDoc === 'profile'
                        ? 'border-rose-500 bg-rose-950/20 shadow-sm'
                        : 'border-slate-800 bg-slate-950/50 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-rose-400">Company Profile</span>
                      <span className="text-xs text-slate-400 font-mono">PDF · 2.1 MB</span>
                    </div>
                    <div className="text-sm font-bold text-white">RES Profile & 26+ Retrofit Records</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Client references (BOSCH, Toyota, Wipro, Delphi), AMC programs, and spares capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lead Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Precision Gears Pvt Ltd"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Official Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mobile / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Application or Machine Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                >
                  <option value="AWH CNC Cylindrical Grinders">AWH CNC Cylindrical Grinders (Shafts, Mandrels, Spindles)</option>
                  <option value="IG CNC Internal Grinders">IG CNC Internal Grinders (Bearing Cups, Bores, Rings)</option>
                  <option value="Universal Grinders CNC">Universal Grinder CNC S380x900 (Toolroom & Complex Profiles)</option>
                  <option value="Machine Tool Retrofitting">Machine Tool Retrofitting & CNC Modernization</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC) for Plant Floor</option>
                  <option value="Spares & Ball Screw Reconditioning">Spares & Ball Screw Reconditioning</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified engineering documentation · Instant PDF delivery</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-md shadow-rose-900/30 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span>Preparing Document...</span>
                  ) : (
                    <>
                      <span>Download {selectedDoc === 'brochure' ? 'Brochure' : 'Company Profile'}</span>
                      <Download className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Engineering Documentation Ready</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A copy of the <span className="text-rose-400 font-semibold">{selectedDoc === 'brochure' ? '5-Page CNC Machine Technical Brochure' : 'Company Profile & Reference List'}</span> has been queued for your team at <span className="text-white">{formData.company}</span>.
                </p>
              </div>

              {/* Document Summary Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-950 border border-slate-800 text-left flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-rose-500 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">RENUKA-CATALOG-2025.PDF</div>
                    <div className="text-sm font-semibold text-white">
                      {selectedDoc === 'brochure' ? 'Renuka Grinding Solutions Official Brochure' : 'RES Engineering Services Company Profile'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Trigger native browser download with sample brochure text file or simulated PDF
                    const element = document.createElement("a");
                    const file = new Blob([
                      `RENUKA GRINDING SOLUTIONS / RENUKA ENGINEERING SERVICE\n` +
                      `No- 94/8, 3rd cross, Vikas Nagar, Yarandalli, Naidu Layout Road, Bommasandra industrial area, Bengaluru - 560099\n` +
                      `Phone: +91 98450 80082 | +91 98453 36826 | Email: renukaengg04@yahoo.com\n\n` +
                      `DOCUMENT: ${selectedDoc === 'brochure' ? '5-Page Technical Machine Catalog' : 'Company Profile & 26+ Retrofitting References'}\n` +
                      `ISSUED TO: ${formData.name} (${formData.company})\n` +
                      `MODELS COVERED:\n` +
                      `1. AWH CNC Cylindrical Grinders (160x460, 250x460, 350x900) - Hydro-Dynamic Microsphere Bearings, 45 m/s CSS.\n` +
                      `2. IG CNC Internal Grinders (1260 & 1260XL) - Spindles up to 105,000 RPM, Needle Roller M & V Guideways.\n` +
                      `3. Universal Grinder CNC S380x900 - 0-90 deg swiveling workhead, 18,000 RPM ID attachment.\n` +
                      `4. Retrofitting & AMC: Trusted by BOSCH, Toyota Kirloskar, Wipro, Delphi, VST Tillers, Megamiles Bearing Cups.`
                    ], {type: 'text/plain'});
                    element.href = URL.createObjectURL(file);
                    element.download = selectedDoc === 'brochure' ? 'Renuka_Grinding_Solutions_Brochure.txt' : 'Renuka_Company_Profile.txt';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
