import { Cpu, Wind, Shield, Zap, Flame, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TechSection() {
  const { isArabic } = useLanguage();

  const techPillars = isArabic
    ? [
        {
          icon: <Zap className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'منظومة الدفع الكمومية',
          subtitle: 'بنية 800V وكثافة طاقة بحالة صلبة',
          description:
            'خلايا بطاريات صلبة حصرية بهندسة أقطاب من مصفوفة الأنابيب النانوية الكربونية توفر أكثر من 1,450 حصانًا مع شبه انعدام التدهور الحراري.',
        },
        {
          icon: <Wind className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'قنوات الديناميكا الهوائية النشطة',
          subtitle: 'توجيه ديناميكي لتأثير الأرضية',
          description:
            'تعمل أنفاق Venturi السفلية على ضبط الرفارف الصوتية وشفرات الناشر الأمامي باستمرار لتوليد أكثر من 1,200 كغ من القوة الضاغطة عند سرعة 200 ميل/ساعة.',
        },
        {
          icon: <Cpu className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'نظام المقصورة العصبي',
          subtitle: 'ضبط تنبؤي للهيكل باستخدام الذكاء الاصطناعي',
          description:
            'يقوم مسح سطح الطريق لحظيًا عبر LiDAR والشبكات العصبية بضبط التخميد المغناطيسي كل 2 ميلي ثانية لتحقيق قيادة فائقة السلاسة.',
        },
        {
          icon: <Flame className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'هيكل مونوكوك من المغنيسيوم',
          subtitle: 'صلابة هيكلية فائقة الخفة',
          description:
            'يوفر هيكلًا مركبًا من الكربون والمغنيسيوم مكوّنًا من قطعة واحدة صلابة التوائية تتجاوز 65,000 نيوتن متر/درجة، مع خفض الوزن الإجمالي بنسبة 28%.',
        },
        {
          icon: <Eye className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'مصفوفة الإضاءة بالليزر',
          subtitle: 'دقة إضاءة تصل إلى 600 متر',
          description:
            'يقوم نظام الإضاءة الليزري المتكيف بتشكيل حزم الضوء ديناميكيًا حول حركة المرور القادمة، مع إضاءة المنعطفات بوضوح استثنائي.',
        },
        {
          icon: <Shield className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'مصفوفة الكربون والسيراميك',
          subtitle: 'مكابح Monoblock بعشرة مكابس',
          description:
            'تعمل أقراص كربون-كربيد السيليكون المنسوجة ثلاثيًا مع ملاقط Monoblock مزورة بعشرة مكابس على توفير تباطؤ ثابت دون تلاشي تحت حرارة الحلبات القصوى.',
        },
      ]
    : [
        {
          icon: <Zap className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'Quantum Powertrain',
          subtitle: '800V Architecture & Solid-State Energy Density',
          description:
            'Proprietary solid-state battery cells engineered with carbon-nanotube matrix electrodes deliver over 1,450 HP with near-zero thermal degradation.',
        },
        {
          icon: <Wind className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'Active Aero Venturis',
          subtitle: 'Dynamic Ground Effect Channeling',
          description:
            'Underbody venturi tunnels continuously adjust acoustic flappers and front diffuser blades to generate over 1,200 kg of downforce at 200 MPH.',
        },
        {
          icon: <Cpu className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'Neural Cockpit OS',
          subtitle: 'Predictive AI Dynamic Chassis Tuning',
          description:
            'Real-time road surface scanning via LiDAR and neural networks adapts magnetic dampening every 2 milliseconds for floating ride tranquility.',
        },
        {
          icon: <Flame className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'Magnesium Monocoque',
          subtitle: 'Ultralight Structural Integrity',
          description:
            'A single-piece carbon-magnesium composite tub provides torsional rigidity exceeding 65,000 Nm/deg while reducing curb weight by 28%.',
        },
        {
          icon: <Eye className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'Laserlight Matrix',
          subtitle: '600-Meter Illuminating Precision',
          description:
            'Adaptive laser matrix beam projection dynamically shapes light cones around oncoming traffic while illuminating turns with crystal clarity.',
        },
        {
          icon: <Shield className="w-8 h-8 text-[#223023] dark:text-[#88b08a]" />,
          title: 'Carbon-Ceramic Matrix',
          subtitle: '10-Piston Monoblock Braking',
          description:
            '3D-woven carbon-silicon carbide discs paired with 10-piston forged monoblock calipers ensure fade-free deceleration under extreme track heat.',
        },
      ];

  const text = isArabic
    ? {
        eyebrow: '[ الابتكار والهندسة ]',
        titleFirst: 'هندسة بلا',
        titleHighlight: 'تنازلات',
        intro:
          'تجمع Veltrion Motors بين ديناميكيات رياضة السيارات والدفع الكهربائي الكمومي لابتكار الجيل القادم من أداء السيارات الخارقة.',
        academy: '[ أكاديمية VELTRION ]',
        academyTitle: 'اختبر توجيه العزم الكمومي بنفسك',
        academyDescription:
          'احجز جلسة إحاطة تقنية مع كبار مهندسي الديناميكا الهوائية لدينا في منشآتنا الأوروبية المخصصة للاختبارات.',
        briefing: 'طلب إحاطة تقنية',
      }
    : {
        eyebrow: '[ INNOVATION & ENGINEERING ]',
        titleFirst: 'ENGINEERED WITHOUT',
        titleHighlight: 'COMPROMISE',
        intro:
          'Veltrion Motors fuses motorsport aerodynamics with quantum electric propulsion to pioneer the next generation of hyper-automotive performance.',
        academy: '[ VELTRION ACADEMY ]',
        academyTitle: 'Experience Quantum Torque Vectoring In Person',
        academyDescription:
          'Schedule a technical briefing session with our senior aerodynamic engineers at our European proving grounds.',
        briefing: 'Request Briefing',
      };

  return (
    <section
      id="technology"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-28 px-6 md:px-16 w-full bg-slate-50 dark:bg-[#090e0a] text-slate-900 dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#223023]/10 dark:bg-[#223023]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block text-xs font-mono tracking-[0.35em] uppercase text-[#223023] dark:text-[#88b08a]">
            {text.eyebrow}
          </span>

          <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight">
            {text.titleFirst}{' '}
            <span className="text-[#223023] dark:text-[#5a805d]">
              {text.titleHighlight}
            </span>
          </h2>

          <p className="font-sans text-slate-600 dark:text-slate-300 text-base font-light leading-relaxed">
            {text.intro}
          </p>
        </div>

        {/* Tech Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPillars.map((tech, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-[#0e1610] border border-black/5 dark:border-white/10 hover:border-[#223023]/50 dark:hover:border-[#3d563e] transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div className="p-3.5 rounded-xl bg-[#223023]/10 dark:bg-[#223023]/40 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              <span className="text-[10px] font-mono tracking-widest text-[#223023] dark:text-[#88b08a] uppercase block mb-1">
                {tech.subtitle}
              </span>

              <h3 className="font-cinzel text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {tech.title}
              </h3>

              <p className="font-sans text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Banner Callout */}
        <div
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#223023] to-[#121a13] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10"
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest block">
              {text.academy}
            </span>

            <h3 className="font-cinzel text-2xl md:text-3xl font-bold">
              {text.academyTitle}
            </h3>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {text.academyDescription}
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('contact');

              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white text-[#223023] hover:bg-slate-100 font-mono text-xs uppercase tracking-widest rounded-lg font-bold transition-all shadow-lg whitespace-nowrap"
          >
            {text.briefing}
          </button>
        </div>
      </div>
    </section>
  );
              }
