export default function AboutSection() {
  const milestones = [
    { year: '2021', title: 'Founded in Geneva', desc: 'Conceived by former Formula 1 aerodynamicists and luxury timepiece artisans.' },
    { year: '2023', title: 'Quantum Battery Breakthrough', desc: 'Achieved world record energy density of 520 Wh/kg in solid-state testing.' },
    { year: '2024', title: 'M5 CS Transformation Prototyping', desc: 'Unveiled modular chassis assembly architecture with instant X-ray telemetry.' },
    { year: '2025', title: 'Global Fleet Delivery', desc: 'Commencing limited delivery of hand-assembled Hyper GT vehicles.' }
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-16 w-full bg-white dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5">

      <div className="max-w-7xl mx-auto space-y-20">

        {/* Brand Philosophy Intro */}
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-mono tracking-[0.35em] uppercase text-[#223023] dark:text-[#88b08a]">
              [ HERITAGE & VISION ]
            </span>

            <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              THE ART OF <br />
              <span className="text-[#223023] dark:text-[#5a805d]">AUTOMOTIVE</span> PERFECTION
            </h2>

            <p className="font-sans text-slate-600 dark:text-slate-300 text-base font-light leading-relaxed">
              At Veltrion Motors, we believe luxury is not merely defined by opulent materials, but by the emotional resonance of perfect engineering. Every vehicle that leaves our Geneva atelier is a bespoke work of industrial sculpture.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/10 dark:border-white/10">
              <div>
                <span className="font-cinzel text-3xl font-extrabold text-[#223023] dark:text-[#88b08a]">
                  100%
                </span>
                <span className="block text-xs font-mono text-slate-500 uppercase mt-1">
                  Hand-Crafted Assembly
                </span>
              </div>

              <div>
                <span className="font-cinzel text-3xl font-extrabold text-[#223023] dark:text-[#88b08a]">
                  25
                </span>
                <span className="block text-xs font-mono text-slate-500 uppercase mt-1">
                  Bespoke Allocations / Year
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Timeline Milestones */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#223023] dark:text-[#88b08a] uppercase tracking-widest block mb-2">
              [ CHRONOLOGY ]
            </span>

            <h3 className="font-cinzel text-3xl font-bold">
              OUR JOURNEY TO SUPREMACY
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
