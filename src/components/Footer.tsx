import { useState } from 'react';
import { ExternalLink, ArrowRight, Check, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#040604] text-white pt-20 pb-12 px-6 md:px-16 border-t border-[#223023]/60 transition-colors duration-300">

      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#223023]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Top Newsletter & Concierge Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.25em] text-white">
              VELTRION <span className="text-[#88b08a]">MOTORS</span>
            </h2>
            <p className="font-sans text-xs text-slate-400 font-light leading-relaxed max-w-md">
              The pinnacle of hyper-electric automotive luxury. Designed in Geneva, engineered for eternity.
            </p>
            <div className="flex items-center space-x-6 text-xs text-slate-400 font-mono pt-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#88b08a]" />
                <span>Geneva, Switzerland</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#88b08a]" />
                <span>concierge@veltrion.com</span>
              </div>
            </div>
          </div>

          {/* Concierge Inquiries Form */}
          <div className="lg:col-span-7 bg-[#0e1610] p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#88b08a] uppercase block">
              [ PRIVATE CONCIERGE ALLOCATION ]
            </span>
            <h3 className="font-cinzel text-xl font-bold">Request Private Viewing</h3>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#223023] border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center space-x-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Your request has been received. Our Geneva Atelier will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#223023] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#223023] hover:bg-[#2c3e2e] text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all flex items-center justify-center space-x-2 whitespace-nowrap shadow-md"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-mono border-b border-white/10">
          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">FLEET MODELS</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><a href="#cars" className="hover:text-[#88b08a] transition-colors">V12 Hyper GT</a></li>
              <li><a href="#cars" className="hover:text-[#88b08a] transition-colors">Apex GTR</a></li>
              <li><a href="#cars" className="hover:text-[#88b08a] transition-colors">Phantom S</a></li>
              <li><a href="#cars" className="hover:text-[#88b08a] transition-colors">Aero Roadster</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">TECHNOLOGY</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><a href="#technology" className="hover:text-[#88b08a] transition-colors">Quantum Powertrain</a></li>
              <li><a href="#technology" className="hover:text-[#88b08a] transition-colors">Active Aerodynamics</a></li>
              <li><a href="#technology" className="hover:text-[#88b08a] transition-colors">Neural Cockpit OS</a></li>
              <li><a href="#technology" className="hover:text-[#88b08a] transition-colors">Laser Matrix Lighting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">ATELIER</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><a href="#about" className="hover:text-[#88b08a] transition-colors">Geneva Proving Grounds</a></li>
              <li><a href="#about" className="hover:text-[#88b08a] transition-colors">Bespoke Customization</a></li>
              <li><a href="#about" className="hover:text-[#88b08a] transition-colors">Sustainability Report</a></li>
              <li><a href="#about" className="hover:text-[#88b08a] transition-colors">Chronology</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">CONTACT</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-[#88b08a]" />
                <span>+41 22 819 0000</span>
              </li>
              <li><span>Mon - Fri: 09:00 - 18:00 CET</span></li>
              <li><span>By Appointment Only</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Minimal Copyright & REQUIRED CLICKABLE CREATOR LINK */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Veltrion Motors AG. All Rights Reserved.
          </div>

          {/* MANDATORY CLICKABLE LINK FOR "7mud web" */}
          <div className="flex items-center space-x-2 group">
            <span className="text-slate-400 font-light">Crafted by</span>
            <a
              href="https://sevenmud-web.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#223023]/60 hover:bg-[#223023] text-emerald-300 font-bold border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <span>7mud web</span>
              <ExternalLink className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
