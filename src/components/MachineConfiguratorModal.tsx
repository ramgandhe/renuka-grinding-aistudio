import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sliders, Cpu, ShieldCheck, PhoneCall, Send, ArrowRight } from 'lucide-react';
import { MACHINES } from '../data/machines';

interface MachineConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMachineId?: string;
}

export const MachineConfiguratorModal: React.FC<MachineConfiguratorModalProps> = ({
  isOpen,
  onClose,
  initialMachineId = 'awh-cnc'
}) => {
  const [selectedMachineId, setSelectedMachineId] = useState<string>(initialMachineId);
  const [selectedController, setSelectedController] = useState<string>('Fanuc 0i-TF Plus');
  const [selectedSize, setSelectedSize] = useState<string>('Standard Capacity');
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
    'Paper Band Magnetic Separator (PBMF)',
    'Hydraulic Tailstock with Spieth Bush'
  ]);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    workpieceDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMachineId) setSelectedMachineId(initialMachineId);
  }, [initialMachineId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentMachine = MACHINES.find(m => m.id === selectedMachineId) || MACHINES[0];

  const handleToggleAccessory = (acc: string) => {
    setSelectedAccessories(prev =>
      prev.includes(acc) ? prev.filter(a => a !== acc) : [...prev, acc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Machine Configurator & Quotation Builder</h3>
              <p className="text-xs text-slate-400">Configure factory-certified CNC grinding specifications</p>
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

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Machine Platform */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  1. Select Machine Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {MACHINES.map((m) => {
                    const isSelected = m.id === selectedMachineId;
                    return (
                      <div
                        key={m.id}
                        onClick={() => {
                          setSelectedMachineId(m.id);
                          setSelectedSize(m.modelsAvailable[0] || 'Standard');
                        }}
                        className={`cursor-pointer p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-rose-500 bg-rose-950/20 ring-1 ring-rose-500/30'
                            : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-semibold text-rose-400 mb-1">{m.categoryLabel}</div>
                        <div className="text-sm font-bold text-white">{m.name}</div>
                        <div className="text-xs text-slate-400 mt-1 line-clamp-2">{m.tagline}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Model Size & CNC Controller */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    2. Select Model / Swing & Center Capacity
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-rose-500"
                  >
                    {currentMachine.modelsAvailable.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    3. CNC Controller Platform
                  </label>
                  <select
                    value={selectedController}
                    onChange={(e) => setSelectedController(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Fanuc 0i-TF Plus (Recommended for Automotive)">Fanuc 0i-TF Plus (High Production)</option>
                    <option value="Siemens Sinumerik 828D / 802D">Siemens Sinumerik 828D (European Cycles)</option>
                    <option value="Mitsubishi M80 Series">Mitsubishi M80 Series (High Speed Micro-interpolation)</option>
                    <option value="Fagor 8055 / 8060">Fagor Automation 8055 (Conversational / ISO)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Tooling & Optional Upgrades */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  4. Tooling & Optional High-Precision Upgrades
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentMachine.optionalAccessories.map((opt) => {
                    const isChecked = selectedAccessories.includes(opt);
                    return (
                      <label
                        key={opt}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-slate-800/80 border-slate-700 text-white'
                            : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleAccessory(opt)}
                          className="mt-0.5 rounded border-slate-700 text-rose-600 focus:ring-rose-500 h-4 w-4 bg-slate-900"
                        />
                        <span className="text-xs leading-relaxed">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact & Component Requirements */}
              <div className="border-t border-slate-800 pt-5 space-y-4">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  5. Procurement & Technical Team Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder="e.g. Anand Murthy"
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                      placeholder="e.g. Apex Auto Components Pvt Ltd"
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      placeholder="anand@apexauto.com"
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder="+91 98450 00000"
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    Component Dimensions, Tolerances or Drawing Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={contactInfo.workpieceDetails}
                    onChange={(e) => setContactInfo({ ...contactInfo, workpieceDetails: e.target.value })}
                    placeholder="e.g. Hardened steel pinion shafts Ø45 x 220 mm, cylindrical runout &lt; 2 µm, Ra 0.15 µm, monthly volume 8,000 pcs..."
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-rose-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <PhoneCall className="w-4 h-4 text-rose-400" />
                  <span>Direct Technical Hotline: <strong>98450 80082</strong> / <strong>98453 36826</strong></span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-900/30 whitespace-nowrap"
                  >
                    {isSubmitting ? 'Generating Quotation...' : 'Request Official Quotation'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Quotation Request Registered</h4>
                <p className="text-sm text-slate-300 max-w-lg mx-auto mt-2">
                  Thank you, <strong className="text-white">{contactInfo.name}</strong>. Your customized specification for the <strong className="text-rose-400">{currentMachine.name} ({selectedSize})</strong> has been dispatched to our engineering team at Bommasandra, Bengaluru.
                </p>
              </div>

              {/* Configuration Summary Card */}
              <div className="max-w-xl mx-auto p-5 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                  <span>RFQ SPECIFICATION CODE</span>
                  <span className="text-rose-400 font-bold">RGS-{(Math.random() * 10000).toFixed(0).padStart(5, '0')}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div><span className="text-slate-500">Machine:</span> {currentMachine.name}</div>
                  <div><span className="text-slate-500">Capacity:</span> {selectedSize}</div>
                  <div><span className="text-slate-500">Controller:</span> {selectedController}</div>
                  <div><span className="text-slate-500">Company:</span> {contactInfo.company}</div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-slate-400">
                  <span className="text-slate-500 block mb-1">Selected Upgrades:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedAccessories.map((a, i) => (
                      <span key={i} className="text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 max-w-md mx-auto">
                Mr. Devaraj R (COO) or our technical design lead will reach out within 24 hours with certified layout drawings, spindle cycle times, and commercial terms.
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Close & Return
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
