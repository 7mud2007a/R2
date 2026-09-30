import { useState } from 'react';
import mercedesS63 from '../assets/cars/Mercedes-benz_amg_s63.jpg';
import bmwM4CSL from '../assets/cars/bmw_m4_csl.jpg';
import supraMK4 from '../assets/cars/Toyota_supra_mk4.jpg';
import nissanGTR from '../assets/cars/nissan_gt-r_r35.jpg';
import {
  ArrowUpRight,
  Gauge,
  Zap,
  Shield,
  ChevronRight,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
    id: 'mercedes-amg-s-63-e-performance',
    name: 'Mercedes-AMG S 63 E PERFORMANCE',
    tagline: 'High-Performance Luxury Sedan',
    category: 'Luxury Saloon',
    price: 'PRICE ON REQUEST',
    hp: 791,
    acceleration: '3.3s',
    topSpeed: '180 MPH',
    range: 'AMG 4MATIC+',
    drivetrain: 'AMG Performance 4MATIC+',
    imagePlaceholder: mercedesS63,
    badge: 'FLAGSHIP',
    description:
      'The Mercedes-AMG S 63 E PERFORMANCE combines a handcrafted 4.0L V8 biturbo engine with an AMG-specific electric drive unit to deliver dominant power, first-class executive luxury, and high-performance hybrid engineering.',
    features: [
      'Handcrafted 4.0L V8 Biturbo Hybrid',
      'AMG ACTIVE RIDE CONTROL',
      'Rear-Axle Steering',
      'Bespoke Executive Lounge Cabin',
    ],
  },
  {
    id: 'bmw-m4-csl',
    name: 'BMW M4 CSL',
    tagline: 'Lightweight M Performance',
    category: 'Hypercar',
    price: 'PRICE ON REQUEST',
    hp: 550,
    acceleration: '3.7s',
    topSpeed: '191 MPH',
    range: 'RWD Track Spec',
    drivetrain: 'Rear-Wheel Drive',
    imagePlaceholder: bmwM4CSL,
    badge: 'LIMITED',
    description:
      'A track-honed masterpiece engineered with extreme lightweight carbon-fiber construction, a high-revving M TwinPower Turbo inline-6 engine, and uncompromised circuit aerodynamics.',
    features: [
      'Carbon Fiber Reinforced Plastic Hood & Roof',
      'M Carbon Full Bucket Seats',
      'Track-Tuned M Precision Strut',
      'Titanium Exhaust Silencer',
    ],
  },
  {
    id: 'toyota-supra-mk4-turbo',
    name: 'Toyota Supra MK4 Turbo',
    tagline: 'The Legendary 2JZ Performance Icon',
    category: 'Hypercar',
    price: 'PRICE ON REQUEST',
    hp: 320,
    acceleration: '4.6s',
    topSpeed: '155 MPH',
    range: 'RWD Legend',
    drivetrain: 'Rear-Wheel Drive',
    imagePlaceholder: supraMK4,
    badge: 'LEGENDARY',
    description:
      'The iconic fourth-generation Supra MK4 Turbo powered by the legendary 2JZ-GTE sequential twin-turbo inline-6, delivering timeless Japanese sports car heritage and unmatched tuning potential.',
    features: [
      '2JZ-GTE Twin-Turbocharged Inline-6',
      'Getrag 6-Speed Manual Transmission',
      'Cockpit-Oriented Dashboard Layout',
      'Active Aerodynamic Rear Wing',
    ],
  },
  {
    id: 'nissan-gt-r-r35',
    name: 'Nissan GT-R R35',
    tagline: 'Twin-Turbocharged Japanese Performance',
    category: 'Hypercar',
    price: 'PRICE ON REQUEST',
    hp: 565,
    acceleration: '2.9s',
    topSpeed: '195 MPH',
    range: 'ATTESA AWD',
    drivetrain: 'ATTESA E-TS AWD',
    imagePlaceholder: nissanGTR,
    badge: 'ICON',
    description:
      'The pinnacle of Japanese supercar engineering featuring a handcrafted VR38DETT twin-turbo V6 engine, advanced ATTESA E-TS all-wheel drive, and precise track-tested launch control.',
    features: [
      'Takumi Handbuilt VR38DETT Twin-Turbo V6',
      'ATTESA E-TS All-Wheel Drive System',
      'Brembo Monoblock Braking System',
      'Bilstein DampTronic Adaptive Suspension',
    ],
  },
];

const CAR_TRANSLATIONS: Record<
  string,
  {
    tagline: string;
    category: string;
    badge: string;
    description: string;
    features: string[];
  }
> = {
  'mercedes-amg-s-63-e-performance': {
    tagline: 'سيدان فاخرة عالية الأداء',
    category: 'سيدان فاخرة',
    badge: 'الرائدة',
    description:
      'تجمع Mercedes-AMG S 63 E PERFORMANCE بين محرك V8 بيتوربو سعة 4.0 لتر مصنوع يدويًا ووحدة دفع كهربائية مخصصة من AMG، لتقدم قوة هائلة وفخامة تنفيذية من الدرجة الأولى وهندسة هجينة عالية الأداء.',
    features: [
      'محرك V8 بيتوربو هجين مصنوع يدويًا سعة 4.0 لتر',
      'نظام AMG ACTIVE RIDE CONTROL',
      'توجيه المحور الخلفي',
      'مقصورة Executive Lounge مخصصة',
    ],
  },
  'bmw-m4-csl': {
    tagline: 'أداء M خفيف الوزن',
    category: 'هايبركار',
    badge: 'محدودة',
    description:
      'تحفة هندسية مهيأة للحلبات، صُممت بهيكل فائق الخفة من ألياف الكربون، ومحرك M TwinPower Turbo سداسي الأسطوانات عالي الدوران، وديناميكا هوائية مخصصة للأداء على الحلبة دون أي تنازلات.',
    features: [
      'غطاء سقف وغطاء محرك من ألياف الكربون المقواة',
      'مقاعد M Carbon الرياضية الكاملة',
      'دعامة M Precision مضبوطة للحلبة',
      'كاتم عادم من التيتانيوم',
    ],
  },
  'toyota-supra-mk4-turbo': {
    tagline: 'أيقونة الأداء الأسطورية بمحرك 2JZ',
    category: 'هايبركار',
    badge: 'أسطورية',
    description:
      'الجيل الرابع الأيقوني من Supra MK4 Turbo، مدفوع بمحرك 2JZ-GTE الأسطوري سداسي الأسطوانات مع شاحنَي توربو متتابعين، ليقدم إرث السيارات الرياضية اليابانية وإمكانات تعديل استثنائية.',
    features: [
      'محرك 2JZ-GTE سداسي الأسطوانات مزدوج التوربو',
      'ناقل حركة يدوي Getrag بست سرعات',
      'تصميم لوحة قيادة موجه للسائق',
      'جناح خلفي ديناميكي هوائي نشط',
    ],
  },
  'nissan-gt-r-r35': {
    tagline: 'أداء ياباني مزدوج التوربو',
    category: 'هايبركار',
    badge: 'أيقونة',
    description:
      'قمة هندسة السيارات الخارقة اليابانية، بمحرك VR38DETT V6 مزدوج التوربو مصنوع يدويًا، ونظام دفع متقدم ATTESA E-TS بجميع العجلات، ونظام تحكم بالإطلاق تم اختباره بدقة على الحلبات.',
    features: [
      'محرك VR38DETT V6 مزدوج التوربو مصنوع يدويًا',
      'نظام ATTESA E-TS للدفع بجميع العجلات',
      'نظام مكابح Brembo Monoblock',
      'تعليق Bilstein DampTronic متكيف',
    ],
  },
};

export default function CarsSection() {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { isArabic } = useLanguage();

  const text = isArabic
    ? {
        portfolio: '[ أسطول السيارات ]',
        fleet: 'أسطول',
        veltrion: 'VELTRION',
        description:
          'كل سيارة مصممة بدقة حرفية استثنائية، وهندسة متقدمة، وأداء لا مثيل له يجمع بين الفخامة والقوة.',
        all: 'الكل',
        hypercar: 'هايبركار',
        luxury: 'سيدان فاخرة',
        horsepower: 'القوة',
        acceleration: '0-60 ميل/س',
        drivetrain: 'نظام الدفع',
        configure: 'التخصيص والمواصفات',
        close: 'إغلاق النافذة',
        powerOutput: 'إخراج القوة',
        topSpeed: 'السرعة القصوى',
        keyFeatures: 'أهم التجهيزات المخصصة',
        estimatedPrice: 'السعر الابتدائي التقديري',
        reserve: 'طلب تخصيص',
        priceOnRequest: 'السعر عند الطلب',
      }
    : {
        portfolio: '[ FLEET PORTFOLIO ]',
        fleet: 'THE',
        veltrion: 'VELTRION',
        description:
          'Each vehicle is crafted with bespoke artisan precision, high-density battery architectures, and unmatched hyper-electric power.',
        all: 'All',
        hypercar: 'Hypercar',
        luxury: 'Luxury Saloon',
        horsepower: 'HORSEPOWER',
        acceleration: '0-60 MPH',
        drivetrain: 'DRIVETRAIN',
        configure: 'Configure & Specifications',
        close: 'Close modal',
        powerOutput: 'POWER OUTPUT',
        topSpeed: 'TOP SPEED',
        keyFeatures: 'KEY BESPOKE FEATURES',
        estimatedPrice: 'ESTIMATED STARTING PRICE',
        reserve: 'Reserve Allocation',
        priceOnRequest: 'PRICE ON REQUEST',
      };

  const categories = [
    { value: 'All', label: text.all },
    { value: 'Hypercar', label: text.hypercar },
    { value: 'Luxury Saloon', label: text.luxury },
  ];

  const filteredCars =
    activeCategory === 'All'
      ? CARS_FLEET
      : CARS_FLEET.filter((car) => car.category === activeCategory);

  const getCarText = (car: CarModel) => {
    if (!isArabic) {
      return {
        tagline: car.tagline,
        category: car.category,
        badge: car.badge,
        description: car.description,
        features: car.features,
      };
    }

    return CAR_TRANSLATIONS[car.id];
  };

  return (
    <section
      id="cars"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-28 px-6 md:px-16 w-full bg-white dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-[#223023] dark:text-[#88b08a] mb-3">
            {text.portfolio}
          </span>

          <h2 className="font-cinzel text-4xl sm:text-6xl font-extrabold tracking-tight">
            {isArabic ? (
              <>
                <span className="text-[#223023] dark:text-[#5a805d]">
                  {text.veltrion}
                </span>{' '}
                {text.fleet}
              </>
            ) : (
              <>
                {text.fleet}{' '}
                <span className="text-[#223023] dark:text-[#5a805d]">
                  {text.veltrion}
                </span>{' '}
                FLEET
              </>
            )}
          </h2>

          <p className="font-sans text-slate-600 dark:text-slate-300 max-w-xl text-base mt-4 font-light">
            {text.description}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#0e1610] border border-black/5 dark:border-white/10 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-[#223023] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCars.map((car) => {
          const carText = getCarText(car);

          return (
            <div
              key={car.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#0e1610] border border-black/10 dark:border-white/10 hover:border-[#223023]/60 dark:hover:border-[#3d563e] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Top Badge & Price */}
              <div className="p-6 md:p-8 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded bg-[#223023] text-white text-[10px] font-mono tracking-widest uppercase">
                  {carText.badge}
                </span>

                <span className="font-cinzel font-bold text-lg text-slate-900 dark:text-white">
                  {isArabic ? text.priceOnRequest : car.price}
                </span>
              </div>

              {/* Car Image */}
              <div className="relative w-full aspect-[16/9] px-6 my-2 flex items-center justify-center overflow-hidden">
                <img
                  src={car.imagePlaceholder}
                  alt={car.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Car Name & Tagline */}
              <div className="p-6 md:p-8 pt-2 space-y-4">
                <div>
                  <h3 className="font-cinzel text-2xl md:text-3xl font-bold tracking-wide text-slate-900 dark:text-white group-hover:text-[#223023] dark:group-hover:text-[#769d78] transition-colors">
                    {car.name}
                  </h3>

                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-1">
                    {carText.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 dark:border-white/10 text-center">
                  <div className="p-2 rounded bg-white/50 dark:bg-black/20">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      {text.horsepower}
                    </span>
                    <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                      {car.hp} HP
                    </span>
                  </div>

                  <div className="p-2 rounded bg-white/50 dark:bg-black/20">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      {text.acceleration}
                    </span>
                    <span className="text-sm font-bold font-mono text-slate-900 dark:text-white">
                      {car.acceleration}
                    </span>
                  </div>

                  <div className="p-2 rounded bg-white/50 dark:bg-black/20">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">
                      {text.drivetrain}
                    </span>
                    <span className="text-sm font-bold font-mono text-slate-900 dark:text-white truncate block">
                      {car.drivetrain}
                    </span>
                  </div>
                </div>

                {/* View Specification Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCar(car)}
                    className="w-full py-3.5 px-4 bg-[#223023] hover:bg-[#2c3e2e] text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                  >
                    <span>{text.configure}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Car Modal Detailed View */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0e1610] border border-black/20 dark:border-white/20 p-6 md:p-10 text-slate-900 dark:text-white shadow-2xl"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {(() => {
              const carText = getCarText(selectedCar);

              return (
                <>
                  {/* Close Modal Button */}
                  <button
                    onClick={() => setSelectedCar(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                    aria-label={text.close}
                  >
                    <X className="w-5 h-5 text-slate-900 dark:text-white" />
                  </button>

                  <span className="px-3 py-1 rounded bg-[#223023] text-white text-[10px] font-mono tracking-widest uppercase">
                    {carText.badge}
                  </span>

                  <h3 className="font-cinzel text-3xl md:text-4xl font-extrabold mt-3">
                    {selectedCar.name}
                  </h3>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                    {carText.tagline}
                  </p>

                  <div className="my-6 p-6 rounded-xl bg-slate-100 dark:bg-[#070b08] border border-black/5 dark:border-white/5">
                    <p className="text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                      {carText.description}
                    </p>
                  </div>

                  {/* Spec Matrix Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                      <Gauge className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.powerOutput}
                      </span>

                      <span className="text-base font-mono font-bold">
                        {selectedCar.hp} HP
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                      <Zap className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.acceleration}
                      </span>

                      <span className="text-base font-mono font-bold">
                        {selectedCar.acceleration}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                      <SlidersHorizontal className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.topSpeed}
                      </span>

                      <span className="text-base font-mono font-bold">
                        {selectedCar.topSpeed}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 text-center">
                      <Shield className="w-5 h-5 text-[#223023] dark:text-[#88b08a] mx-auto mb-1" />

                      <span className="block text-[10px] font-mono text-slate-400">
                        {text.drivetrain}
                      </span>

                      <span className="text-xs font-mono font-bold">
                        {selectedCar.drivetrain}
                      </span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3">
                      {text.keyFeatures}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {carText.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs font-sans text-slate-700 dark:text-slate-300"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-[#223023] dark:text-[#88b08a]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reserve Action CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10 dark:border-white/10">
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 uppercase">
                        {text.estimatedPrice}
                      </span>

                      <span className="font-cinzel text-2xl font-bold">
                        {isArabic ? text.priceOnRequest : selectedCar.price}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCar(null);

                        const el = document.getElementById('contact');

                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#223023] hover:bg-[#2c3e2e] text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all"
                    >
                      {text.reserve}
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
