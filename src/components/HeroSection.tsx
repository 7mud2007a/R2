import {
  ArrowRight,
  ChevronDown,
  Compass,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const { isArabic } = useLanguage();

  const text = isArabic
    ? {
        description:
          'نعيد تعريف هندسة الأداء الفائق من خلال فخامة خالدة، ودقة ديناميكية هوائية، وتناغم صوتي بلا تنازلات.',
        explore: 'استكشف التجربة',
        fleet: 'اكتشف الأسطول',
        electric: 'دفع كهربائي بجميع العجلات',
        warranty: 'ضمان بمواصفات مخصصة',
        scroll: 'مرر لاكتشاف المزيد',
      }
    : {
        description:
          'Redefining hyper-performance engineering with timeless luxury, aerodynamic precision, and zero-compromise acoustic harmony.',
        explore: 'Explore Experience',
        fleet: 'Discover Fleet',
        electric: 'All-Wheel Electric Drive',
        warranty: 'Tailor Spec Warranty',
        scroll: 'Scroll To Discover',
      };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-16 overflow-hidden bg-white dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#223023] opacity-20 dark:opacity-30 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#223023] opacity-15 dark:opacity-25 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        {/* Hero Title */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] text-slate-900 dark:text-white">
            VELTRION <br />
            <span className="text-[#223023] dark:text-[#5a805d] drop-shadow-sm">
              MOTORS
            </span>
          </h1>

          <p
            dir={isArabic ? 'rtl' : 'ltr'}
         
           className={`${isArabic ? 'font-arabic' : 'font-sans'} text-lg sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl font-light leading-relaxed pt-2`}
            >
            {text.description}
          </p>
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
              <span>{text.explore}</span>
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
              <span>{text.fleet}</span>
            </button>
          </div>

          {/* Quick Value Props */}
          <div
            dir={isArabic ? 'rtl' : 'ltr'}
            className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#223023] dark:text-[#769d78]" />
              <span>{text.electric}</span>
            </div>

            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#223023] dark:text-[#769d78]" />
              <span>{text.warranty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-slate-400 dark:text-slate-500">
        <span className="text-[10px] tracking-[0.3em] uppercase mb-2">
          {text.scroll}
        </span>

        <ChevronDown className="w-4 h-4 animate-bounce text-[#223023] dark:text-[#88b08a]" />
      </div>
    </section>
  );
}
