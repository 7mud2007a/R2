import { useState } from 'react';
import { ArrowUpRight, Gauge, Zap, Shield, ChevronRight, X, SlidersHorizontal } from 'lucide-react';

export interface CarModel {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  hp: number;
  acceleration: string;
  topSpeed: string;
  range: string;
  drivetrain: string;
  imagePlaceholder: string;
  badge: string;
  description: string;
  features: string[];
}

const CARS_FLEET: CarModel[] = [
  {
    id: 'veltrion-v12-hyper-gt',
    name: 'Veltrion V12 Hyper GT',
    tagline: 'The Ultimate Grand Tourer Redefined',
    category: 'Hyper GT',
    price: '$3,850,000',
    hp: 1450,
    acceleration: '1.85s',
    topSpeed: '265 MPH',
    range: '520 Miles',
    drivetrain: 'Quad-Motor All-Wheel Drive',
    imagePlaceholder: '/images/cars/v12-hyper-gt.jpg',
    badge: 'FLAGSHIP',
    description: 'Combining quad quantum electric motors with a lightweight carbon-fiber monocoque chassis, the V12 Hyper GT offers unmatched track agility and grand touring tranquility.',
    features: ['Active Aero Wing', 'Acoustic Glass System', 'Quantum Torque Vectoring', 'Bespoke Saddle Leather']
  },
  {
    id: 'veltrion-apex-gtr',
    name: 'Veltrion Apex GTR',
    tagline: 'Track-Focused Aerodynamic Perfection',
    category: 'Hypercar',
    price: '$4,200,000',
    hp: 1650,
    acceleration: '1.68s',
    topSpeed: '280 MPH',
    range: '410 Miles',
    drivetrain: 'Carbon-Vectoring Quad Drive',
    imagePlaceholder: '/images/cars/apex-gtr.jpg',
    badge: 'LIMITED (1 OF 25)',
    description: 'Designed exclusively for motorsport enthusiasts seeking extreme cornering g-forces, active ground effect venturis, and raw electric power delivery.',
    features: ['Magnesium Monoblock Wheels', 'Titanium Roll Cage', 'Downforce Generator', 'Race HUD Telemetry']
  },
  {
    id: 'veltrion-phantom-s',
    name: 'Veltrion Phantom S',
    tagline: 'Ultra-Luxury Electric Saloon',
    category: 'Luxury Saloon',
    price: '$2,100,000',
    hp: 1100,
    acceleration: '2.4s',
    topSpeed: '210 MPH',
    range: '620 Miles',
    drivetrain: 'Dual-Motor Rear-Biased AWD',
    imagePlaceholder: '/images/cars/phantom-s.jpg',
    badge: 'EXECUTIONS',
    description: 'An oasis of silent luxury featuring air-suspension levitation technology, executive rear reclining suites, and autonomous highway cruising capabilities.',
    features: ['Active Noise Cancellation', 'Executive Seating', 'Zero-Gravity Suspension', 'Silk & Carbon Interior']
  },
  {
    id: 'veltrion-aero-roster',
    name: 'Veltrion Aero Roadster',
    tagline: 'Open-Air Electric Performance',
    category: 'Roadster',
    price: '$2,950,000',
    hp: 1280,
    acceleration: '1.95s',
    topSpeed: '245 MPH',
    range: '480 Miles',
    drivetrain: 'Tri-Motor AWD',
    imagePlaceholder: '/images/cars/aero-roadster.jpg',
    badge: 'CONCEPT PROTOTYPE',
    description: 'A wind-sculpted open roadster delivering visceral acceleration, removable glass canopy, and acoustic air-channeling technology.',
    features: ['Electromorphic Glass Canopy', 'Ultra-Rigid Carbon Tub', 'Laser Matrix Headlights', 'Bespoke Chrono Gauge']
  }
];

export default function CarsSection() {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hyper GT', 'Hypercar', 'Luxury Saloon', 'Roadster'];

  const filteredCars = activeCategory === 'All'
    ? CARS_FLEET
    : CARS_FLEET.filter(car => car.category === activeCategory);

  return (
    <section id="cars" className="relative py-28 px-6 md:px-16 w-full bg-white dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-[#223023] dark:text-[#88b08a] mb-3">
            [ FLEET PORTFOLIO ]
          </span>
          <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight">
            THE <span className="text-[#223023] dark:text-[#5a805d]">VELTRION</span> FLEET
          </h2>
          <p className="font-sans text-slate-600 dark:text-slate-300 max-w-xl text-base mt-4 font-light">
            Each vehicle is crafted with bespoke artisan precision, high-density battery architectures, and unmatched hyper-electric power.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#0e1610] border border-black/5 dark:border-white/10 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#223023] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="group relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#0e1610] border border-black/10 dark:border-white/10 hover:border-[#223023]/60 dark:hover:border-[#3d563e] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            {/* Top Badge & Price */}
            <div className="p-6 md:p-8 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded bg-[#223023] text-white text-[10px] font-mono tracking-widest uppercase">
                {car.badge}
              </span>
              <span className="font-cinzel font-bold text-lg text-slate-900 dark:text-white">
                {car.price}
              </span>
            </div>

            {/* Car Image Placeholder Container */}
            <div className="relative w-full aspect-[16/9] px-6 my-2 flex items-center justify-center overflow-hidden">
              {/* Dynamic Luxury Car Render Vector Graphic */}
              <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-transparent via-[#223023]/10 to-transparent rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out">
                <svg className="w-full h-44 text-[#223023] dark:text-[#425d43] opacity-85" viewBox="0 0 600 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Streamlined Body */}
                  <path d="M 50 160 C 90 160, 140 150, 180 110 C 220 70, 340 50, 440 65 C 500 75, 540 110, 570 160 Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
                  <path d="M 120 110 L 220 65 L 380 65 L 450 110 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" />
                  {/* Wheels */}
                  <circle cx="150" cy="160" r="32" stroke="currentColor" strokeWidth="3" fill="#070b08" />
                  <circle cx="150" cy="160" r="18" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="470" cy="160" r="32" stroke="currentColor" strokeWidth="3" fill="#070b08" />
                  <circle cx="470" cy="160" r="18" stroke="#d4af37" strokeWidth="2" />
                  <line x1="20" y1="192" x2="580" y2="192" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                </svg>
                {/* Overlay Text indicating image placeholder */}
                <div className="absolute bottom-2 right-4 text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded">
                  Image Placeholder Ready
                </div>
              </div>
            </div>

            {/* Car Name & Tagline */}
            <div className="p-6 md:p-8 pt-2 space-y-4">
              <div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold tracking-wide text-slate-900 dark:text-white group-hover:text-[#223023] dark:group-hover:text-[#769d78] transition-colors">
                  {car.name}
                </h3>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-1">
                  {car.tagline}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 dark:border-white/10 text-center">
                <div className="p-2 rounded bg-white/50 dark:bg-black/20">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">HORSEPOWER</span>
                  <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">{car.hp} HP</span>
                </div>
                <div className="p-2 rounded bg-white/50 dark:bg-black/20">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">0-60 MPH</span>
                  <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">{car.acceleration}</span>
                </div>
                <div className="p-2 rounded bg-white/50 dark:bg-black/20">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">RANGE</span>
                  <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">{car.range}</span>
                </div>
              </div>

              {/* View Specification Button */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCar(car)}
                  className="w-full py-3.5 px-4 bg-[#223023] hover:bg-[#2c3e2e] text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                >
                  <span>Configure & Specifications</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Car Modal Detailed View */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0e1610] border border-black/20 dark:border-white/20 p-6 md:p-10 text-slate-900 dark:text-white shadow-2xl">

            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-slate-900 dark:text-white" />
            </button>

            <span className="px-3 py-1 rounded bg-[#223023] text-white text-[10px] font-mono tracking-widest uppercase">
              {selectedCar.badge}
            </span>

            <h3 className="font-cinzel text-3xl md:text-4xl font-extrabold mt-3">
              {selectedCar.name}
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
              {selectedCar.tagline}
            </p>

            <div className="my-6 p-6 rounded-xl bg-slate-100 dark:bg-[#070b08] border border-black/5 dark:border-white/5">
              <p className="text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                {selectedCar.description}
              </p>
            </div>

            {/* Spec Matrix Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                <Gauge className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />
                <span className="block text-[10px] font-mono text-slate-400">POWER OUTPUT</span>
                <span className="text-base font-mono font-bold">{selectedCar.hp} HP</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                <Zap className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />
                <span className="block text-[10px] font-mono text-slate-400">0-60 MPH</span>
                <span className="text-base font-mono font-bold">{selectedCar.acceleration}</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                <SlidersHorizontal className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />
                <span className="block text-[10px] font-mono text-slate-400">TOP SPEED</span>
                <span className="text-base font-mono font-bold">{selectedCar.topSpeed}</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                <Shield className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />
                <span className="block text-[10px] font-mono text-slate-400">RANGE</span>
                <span className="text-base font-mono font-bold">{selectedCar.range}</span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mb-8">
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3">
                KEY BESPOKE FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCar.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-sans text-slate-700 dark:text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-[#223023] dark:text-[#88b08a]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reserve Action CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10 dark:border-white/10">
              <div>
                <span className="block text-[10px] font-mono text-slate-400 uppercase">ESTIMATED STARTING PRICE</span>
                <span className="font-cinzel text-2xl font-bold">{selectedCar.price}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedCar(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#223023] hover:bg-[#2c3e2e] text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all"
              >
                Reserve Allocation
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
