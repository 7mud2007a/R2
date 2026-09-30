import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { isArabic } = useLanguage();

  const milestones = isArabic
    ? [
        {
          year: '2021',
          title: 'التأسيس في جنيف',
          desc: 'تأسست على يد خبراء سابقين في الديناميكا الهوائية للفورمولا 1 وحرفيي صناعة الساعات الفاخرة.',
        },
        {
          year: '2023',
          title: 'اختراق في تكنولوجيا البطاريات',
          desc: 'تحقيق رقم قياسي عالمي في كثافة الطاقة بلغ 520 واط/كغ خلال اختبارات الحالة الصلبة.',
        },
        {
          year: '2024',
          title: 'تطوير نموذج M5 CS',
          desc: 'الكشف عن بنية معيارية لتجميع الهيكل مع نظام بيانات فوري قائم على الأشعة السينية.',
        },
        {
          year: '2025',
          title: 'تسليم الأسطول عالميًا',
          desc: 'بدء عمليات التسليم المحدودة لسيارات Hyper GT المصنوعة يدويًا.',
        },
      ]
    : [
        {
          year: '2021',
          title: 'Founded in Geneva',
          desc: 'Conceived by former Formula 1 aerodynamicists and luxury timepiece artisans.',
        },
        {
          year: '2023',
          title: 'Quantum Battery Breakthrough',
          desc: 'Achieved world record energy density of 520 Wh/kg in solid-state testing.',
        },
        {
          year: '2024',
          title: 'M5 CS Transformation Prototyping',
          desc: 'Unveiled modular chassis assembly architecture with instant X-ray telemetry.',
        },
        {
          year: '2025',
          title: 'Global Fleet Delivery',
          desc: 'Commencing limited delivery of hand-assembled Hyper GT vehicles.',
        },
      ];

  const text = isArabic
    ? {
        heritage: '[ الإرث والرؤية ]',
        art: 'فن',
        automotive: 'هندسة السيارات',
        perfection: 'المثالية',
        description:
          'في Veltrion Motors، نؤمن بأن الفخامة لا تُقاس بالمواد الفاخرة وحدها، بل بالأثر العاطفي الناتج عن الهندسة المتقنة. كل سيارة تغادر مشغلنا في جنيف هي تحفة فنية مخصصة من النحت الصناعي.',
        handcrafted: 'تجميع مصنوع يدويًا',
        allocations: 'تخصيصات مخصصة / سنويًا',
        chronology: '[ التسلسل الزمني ]',
        journey: 'رحلتنا نحو القمة',
      }
    : {
        heritage: '[ HERITAGE & VISION ]',
        art: 'THE ART OF',
        automotive: 'AUTOMOTIVE',
        perfection: 'PERFECTION',
        description:
          'At Veltrion Motors, we believe luxury is not merely defined by opulent materials, but by the emotional resonance of perfect engineering. Every vehicle that leaves our Geneva atelier is a bespoke work of industrial sculpture.',
        handcrafted: 'Hand-Crafted Assembly',
        allocations: 'Bespoke Allocations / Year',
        chronology: '[ CHRONOLOGY ]',
        journey: 'OUR JOURNEY TO SUPREMACY',
      };

  return (
    <section
      id="about"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-28 px-6 md:px-16 w-full bg-white dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Brand Philosophy Intro */}
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-mono tracking-[0.35em] uppercase text-[#223023] dark:text-[#88b08a]">
              {text.heritage}
            </span>

            <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              {isArabic ? (
                <>
                  {text.art}
                  <br />
                  <span className="text-[#223023] dark:text-[#5a805d]">
                    {text.automotive}
                  </span>{' '}
                  {text.perfection}
                </>
              ) : (
                <>
                  {text.art} <br />
                  <span className="text-[#223023] dark:text-[#5a805d]">
                    {text.automotive}
                  </span>{' '}
                  {text.perfection}
                </>
              )}
            </h2>

            <p className="font-sans text-slate-600 dark:text-slate-300 text-base font-light leading-relaxed">
              {text.description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/10 dark:border-white/10">
              <div>
                <span className="font-cinzel text-3xl font-extrabold text-[#223023] dark:text-[#88b08a]">
                  100%
                </span>

                <span className="block text-xs font-mono text-slate-500 uppercase mt-1">
                  {text.handcrafted}
                </span>
              </div>

              <div>
                <span className="font-cinzel text-3xl font-extrabold text-[#223023] dark:text-[#88b08a]">
                  25
                </span>

                <span className="block text-xs font-mono text-slate-500 uppercase mt-1">
                  {text.allocations}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Timeline Milestones */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#223023] dark:text-[#88b08a] uppercase tracking-widest block mb-2">
              {text.chronology}
            </span>

            <h3 className="font-cinzel text-3xl font-bold">
              {text.journey}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0e1610] border border-black/5 dark:border-white/10 relative overflow-hidden group hover:border-[#223023] transition-colors"
              >
                <div className="text-4xl font-cinzel font-extrabold text-[#223023] dark:text-[#88b08a] mb-2">
                  {m.year}
                </div>

                <h4 className="font-cinzel text-base font-bold text-slate-900 dark:text-white mb-2">
                  {m.title}
                </h4>

                <p className="text-xs font-sans text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
