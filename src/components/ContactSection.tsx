import React, { useState } from 'react';
import { Phone, Mail, MapPin, Building, Send, CheckCircle2, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'New CNC Cylindrical Machine',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-500 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>CONNECT WITH OUR ENGINEERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with Renuka Grinding Solutions
          </h2>
          <p className="text-base text-slate-300 mt-2 leading-relaxed">
            Discuss your component drawing tolerances, request a shop floor inspection, or invite our team for a retrofitting feasibility evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Factory Contact Info, Tax Registration & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white">Works & Registered Office</h3>
              
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Renuka Engineering Service / Grinding Solutions</strong>
                    <span className="leading-relaxed text-slate-300 block mt-1">
                      No- 94/8, 3rd cross, Vikas Nagar, Yarandalli, Naidu Layout Road, Bommasandra industrial area, Bengaluru - 560099, Karnataka, INDIA.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
                  <Phone className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-mono">Direct Technical Contacts:</span>
                    <div className="text-sm font-bold text-white mt-0.5 space-x-3">
                      <a href="tel:9845080082" className="hover:text-rose-400 transition-colors">98450 80082</a>
                      <span className="text-slate-600">|</span>
                      <a href="tel:9845336826" className="hover:text-rose-400 transition-colors">98453 36826</a>
                    </div>
                    <span className="text-slate-400 text-[11px] block mt-0.5">
                      (B. Ramappa / Devaraj. R)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
                  <Mail className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase font-mono">Official Inquiries Email:</span>
                    <a href="mailto:renukaengg04@yahoo.com" className="text-sm font-semibold text-rose-400 hover:underline">
                      renukaengg04@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Tax & Commercial Details */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">GST REGISTRATION</span>
                  <span className="text-slate-200 font-semibold">29AJOPP6949A1ZP</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-500 text-[10px] block">INCOME TAX PAN</span>
                  <span className="text-slate-200 font-semibold">AJOPP6949A</span>
                </div>
              </div>
            </div>

            {/* Operating Hours & Free Inspection Note */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-white">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Shop Floor Hours & Deputation</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                Monday to Saturday: 8:30 AM – 7:00 PM IST.
              </p>
              <p className="text-[11px] text-rose-400 leading-normal pt-1 border-t border-slate-800/60">
                * We can depute our engineering team to your site for free inspection and estimation if near our regular service assignments in Bengaluru/Hosur.
              </p>
            </div>

            {/* Embedded Google Map / Location Visual */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-rose-500" />
                  <span>Bommasandra Industrial Hub</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Vikas+Nagar+Yarandalli+Bommasandra+Industrial+Area+Bengaluru+560099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Canvas Frame */}
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-800">
                <iframe
                  title="Renuka Works Bommasandra Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15560.852441999908!2d77.6834005!3d12.8295627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c62c96c5671%3A0xea8b9410940562e0!2sBommasandra%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Send Engineering Inquiry</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your application requirements below. Our design heads will analyze your request promptly.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Precision Gears & Tools Ltd"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Official Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="r.chandra@precisiongears.in"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98450 00000"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Area of Inquiry <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="New CNC Cylindrical Machine">New CNC Cylindrical Grinder (AWH Series)</option>
                    <option value="New CNC Internal Grinder">New CNC Internal Bore Grinder (IG Series)</option>
                    <option value="Universal CNC Grinder">Universal CNC Grinder S380x900</option>
                    <option value="Retrofitting & Re-Engineering">Retrofitting of Conventional or CNC Machines</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC) Inquiry</option>
                    <option value="Ball Screw Reconditioning">Ball Screw Reconditioning & Replacement</option>
                    <option value="Machine Tool Spares">Machine Tool Spares (Landis, Shimoga, Turn-Masters)</option>
                    <option value="General Inquiry">General Techno-Commercial Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Component Specifications / Problem Statement <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe grinding length, diameter, required surface finish Ra, material grade, or machine model needing retrofitting..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Confidential NDA protected technical review</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-rose-900/30 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Technical Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Inquiry Successfully Received</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <span className="text-rose-400 font-semibold">{formData.interest}</span> has been routed to our Operations Head Mr. Subramanya Jade and COO Mr. Devaraj R.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-xs text-slate-400 text-left font-mono space-y-1">
                  <div>Reference No: RES-{(Math.random() * 100000).toFixed(0)}</div>
                  <div>Company: {formData.company}</div>
                  <div>Response ETA: Within 1 Business Day</div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        interest: 'New CNC Cylindrical Machine',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
