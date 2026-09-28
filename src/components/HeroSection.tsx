import { ArrowRight, ChevronDown, Compass, Sparkles, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 overflow-hidden bg-white dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial green ambient glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#223023] opacity-20 dark:opacity-30 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#223023] opacity-15 dark:opacity-25 blur-[130px]" />

        {/* Subtle Luxury Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#223023]/10 dark:bg-[#223023]/40 border border-[#223023]/30 text-[#223023] dark:text-[#88b08a] text-xs uppercase tracking-[0.25em] font-semibold mb-8 w-fit backdrop-blur-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Pinnacle of Hyper-Electric Luxury</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] text-slate-900 dark:text-white">
            VELTRION <br />
            <span className="text-[#223023] dark:text-[#5a805d] drop-shadow-sm">MOTORS</span>
          </h1>
          <p className="font-sans text-lg sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed pt-2">
            Redefining hyper-performance engineering with timeless luxury, aerodynamic precision, and zero-compromise acoustic harmony.
          </p>
        </div>

        {/* Hero Media Placeholder Component */}
        <div className="mt-10 relative w-full aspect-[21/9] min-h-[300px] md:min-h-[420px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-[#0e1610] dark:via-[#141f17] dark:to-[#090d09] group">

          {/* Futuristic Graphic Silhouettes / Abstract Vector Car Blueprint */}
          <div className="absolute inset-0 flex items-center justify-center p-8 opacity-90 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
            <svg className="w-full h-full max-w-4xl text-[#223023] dark:text-[#3d563e] opacity-80" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Abstract Car Silhouette Lines */}
              <path d="M50 280 C 120 280, 200 270, 260 210 C 320 150, 480 120, 680 140 C 780 150, 880 200, 950 280" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
              <path d="M120 280 L 180 280 C 210 240, 250 180, 340 160 L 640 160 C 720 160, 780 220, 830 280 L 900 280" stroke="currentColor" strokeWidth="3" />
              {/* Wheel Arches */}
              <circle cx="250" cy="280" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="250" cy="280" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
              <circle cx="750" cy="280" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="750" cy="280" r="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
              {/* Ground Line */}
              <line x1="20" y1="325" x2="980" y2="325" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
              {/* Dynamic Accent Rays */}
              <line x1="340" y1="160" x2="480" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <line x1="640" y1="160" x2="720" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          {/* Media Overlay Info Banner */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  [ HERO MEDIA PLACEHOLDER ]
                </span>
                <h3 className="text-xl md:text-2xl font-cinzel text-white font-bold tracking-wider">
                  VELTRION V12 HYPER GT
                </h3>
              </div>
              <div className="flex items-center space-x-6 text-white/80 text-xs font-mono">
                <div>
                  <span className="block text-slate-400">POWER</span>
                  <span className="text-sm font-bold text-white">1,450 HP</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <span className="block text-slate-400">0-60 MPH</span>
                  <span className="text-sm font-bold text-white">1.85s</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <span className="block text-slate-400">TOP SPEED</span>
                  <span className="text-sm font-bold text-white">265 MPH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Green Brand Badge */}
          <div className="absolute top-6 right-6 bg-[#223023]/90 text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border border-white/20 backdrop-blur-md">
            CONCEPT 2025
          </div>
        </div>

        {/* Action Buttons & Specs Summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('cinematic-experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                if (onExploreClick) onExploreClick();
              }}
              className="px-8 py-4 bg-[#223023] hover:bg-[#2c3e2e] text-white font-medium text-sm tracking-widest uppercase rounded-lg shadow-xl shadow-[#223023]/20 flex items-center justify-center space-x-3 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span>Explore Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('cars');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm tracking-widest uppercase rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>Discover Fleet</span>
            </button>
          </div>

          {/* Quick Value Props */}
          <div className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#223023] dark:text-[#769d78]" />
              <span>All-Wheel Electric Drive</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#223023] dark:text-[#769d78]" />
              <span>Tailor Spec Warranty</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-slate-400 dark:text-slate-500">
        <span className="text-[10px] tracking-[0.3em] uppercase mb-2">Scroll To Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#223023] dark:text-[#88b08a]" />
      </div>

    </section>
  );
}
