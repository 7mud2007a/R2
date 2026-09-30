import { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [carOpen, setCarOpen] = useState(false);

  const { isArabic } = useLanguage();

  const cars = [
    'Mercedes-AMG S 63 E PERFORMANCE',
    'BMW M4 CSL',
    'Toyota Supra MK4 Turbo',
    'Nissan GT-R R35',
  ];

  const text = isArabic
    ? {
        description:
          'قمة الفخامة في عالم السيارات الخارقة الكهربائية. صُممت في جنيف، وهُندست لتدوم إلى الأبد.',
        location: 'جنيف، سويسرا',
        privateAllocation: '[ تخصيص الكونسيرج الخاص ]',
        privateViewing: 'طلب معاينة خاصة',
        name: 'أدخل اسمك',
        email: 'أدخل عنوان بريدك الإلكتروني',
        selectVehicle: 'اختر سيارة',
        message: 'أخبرنا عن طلب المعاينة الخاصة بك...',
        submit: 'إرسال الاستفسار',
        success:
          'تم استلام طلبك. سيتواصل معك مشغلنا في جنيف قريبًا.',
        fleetModels: 'طرازات الأسطول',
        technology: 'التكنولوجيا',
        atelier: 'المشغل',
        contact: 'تواصل معنا',
        activeAerodynamics: 'الديناميكا الهوائية النشطة',
        neuralCockpit: 'نظام المقصورة العصبي',
        laserMatrix: 'إضاءة المصفوفة الليزرية',
        provingGrounds: 'منشآت الاختبار في جنيف',
        customization: 'التخصيص حسب الطلب',
        sustainability: 'تقرير الاستدامة',
        chronology: 'التسلسل الزمني',
        hours: 'الاثنين - الجمعة: 09:00 - 18:00 بتوقيت وسط أوروبا',
        appointment: 'بموعد مسبق فقط',
        rights: 'جميع الحقوق محفوظة.',
        craftedBy: 'تصميم وتطوير',
      }
    : {
        description:
          'The pinnacle of hyper-electric automotive luxury. Designed in Geneva, engineered for eternity.',
        location: 'Geneva, Switzerland',
        privateAllocation: '[ PRIVATE CONCIERGE ALLOCATION ]',
        privateViewing: 'Request Private Viewing',
        name: 'Enter your name',
        email: 'Enter your email address',
        selectVehicle: 'Select a vehicle',
        message: 'Tell us about your private viewing request...',
        submit: 'Submit Inquiry',
        success:
          'Your request has been received. Our Geneva Atelier will contact you shortly.',
        fleetModels: 'FLEET MODELS',
        technology: 'TECHNOLOGY',
        atelier: 'ATELIER',
        contact: 'CONTACT',
        activeAerodynamics: 'Active Aerodynamics',
        neuralCockpit: 'Neural Cockpit OS',
        laserMatrix: 'Laser Matrix Lighting',
        provingGrounds: 'Geneva Proving Grounds',
        customization: 'Bespoke Customization',
        sustainability: 'Sustainability Report',
        chronology: 'Chronology',
        hours: 'Mon - Fri: 09:00 - 18:00 CET',
        appointment: 'By Appointment Only',
        rights: 'All Rights Reserved.',
        craftedBy: 'Crafted by',
      };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mljdvpbe', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubscribed(true);
        form.reset();
        setEmail('');
        setSelectedCar('');
        setCarOpen(false);
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <footer
      id="contact"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative w-full bg-[#040604] text-white pt-20 pb-12 px-6 md:px-16 border-t border-[#223023]/60 transition-colors duration-300"
    >
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#223023]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2
              className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.25em] text-white"
              dir="ltr"
            >
              VELTRION <span className="text-[#88b08a]">MOTORS</span>
            </h2>

            <p className="font-sans text-xs text-slate-400 font-light leading-relaxed max-w-md">
              {text.description}
            </p>

            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-400 font-mono pt-2"
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#88b08a] shrink-0" />
                <span>{text.location}</span>
              </div>

              <div className="flex items-center gap-2" dir="ltr">
                <Mail className="w-3.5 h-3.5 text-[#88b08a] shrink-0" />

                <a
                  href="mailto:bznsman77@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bznsman77@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0e1610] p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#88b08a] uppercase block">
              {text.privateAllocation}
            </span>

            <h3 className="font-cinzel text-xl font-bold">
              {text.privateViewing}
            </h3>

            {subscribed ? (
              <div
                className="p-4 rounded-xl bg-[#223023] border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-3"
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />

                <span>{text.success}</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={text.name}
                  dir={isArabic ? 'rtl' : 'ltr'}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#223023] transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder={text.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#223023] transition-colors"
                />

                <input
                  type="hidden"
                  name="car"
                  value={selectedCar}
                />

                {/* Custom Vehicle Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCarOpen((open) => !open)}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-[#223023] transition-all flex items-center justify-between gap-3"
                    aria-haspopup="listbox"
                    aria-expanded={carOpen}
                  >
                    <span
                      className={
                        selectedCar ? 'text-white' : 'text-slate-500'
                      }
                    >
                      {selectedCar || text.selectVehicle}
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 text-[#88b08a] transition-transform duration-300 shrink-0 ${
                        carOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {carOpen && (
                    <div className="absolute left-0 right-0 bottom-full mb-2 z-50 overflow-hidden rounded-lg border border-white/10 bg-[#0b100c] shadow-2xl shadow-black/50 backdrop-blur-xl">
                      <div className="p-1.5">
                        {cars.map((car) => (
                          <button
                            key={car}
                            type="button"
                            onClick={() => {
                              setSelectedCar(car);
                              setCarOpen(false);
                            }}
                            className={`w-full px-3 py-3 rounded-md text-xs transition-all duration-200 ${
                              selectedCar === car
                                ? 'bg-[#223023] text-white'
                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                            dir="ltr"
                          >
                            {car}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <textarea
                  name="message"
                  required
                  placeholder={text.message}
                  rows={4}
                  dir={isArabic ? 'rtl' : 'ltr'}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#223023] transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={!selectedCar}
                  className="px-6 py-3 bg-[#223023] hover:bg-[#2c3e2e] disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
                >
                  <span>{text.submit}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      isArabic ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-mono border-b border-white/10">
          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.fleetModels}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="#cars"
                  className="hover:text-[#88b08a] transition-colors"
                  dir="ltr"
                >
                  Mercedes-AMG S 63 E PERFORMANCE
                </a>
              </li>

              <li>
                <a
                  href="#cars"
                  className="hover:text-[#88b08a] transition-colors"
                  dir="ltr"
                >
                  BMW M4 CSL
                </a>
              </li>

              <li>
                <a
                  href="#cars"
                  className="hover:text-[#88b08a] transition-colors"
                  dir="ltr"
                >
                  Toyota Supra MK4 Turbo
                </a>
              </li>

              <li>
                <a
                  href="#cars"
                  className="hover:text-[#88b08a] transition-colors"
                  dir="ltr"
                >
                  Nissan GT-R R35
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.technology}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="#technology"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {isArabic ? 'منظومة الدفع الكمومية' : 'Quantum Powertrain'}
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.activeAerodynamics}
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.neuralCockpit}
                </a>
              </li>

              <li>
                <a
                  href="#technology"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.laserMatrix}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.atelier}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.provingGrounds}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.customization}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.sustainability}
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-[#88b08a] transition-colors"
                >
                  {text.chronology}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-400 uppercase tracking-widest mb-4">
              {text.contact}
            </h4>

            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2" dir="ltr">
                <Phone className="w-3 h-3 text-[#88b08a] shrink-0" />
                <span>+41 22 819 0000</span>
              </li>

              <li>
                <span>{text.hours}</span>
              </li>

              <li>
                <span>{text.appointment}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div dir={isArabic ? 'rtl' : 'ltr'}>
            &copy; {new Date().getFullYear()} Veltrion Motors AG. {text.rights}
          </div>

          <div className="flex items-center gap-2 group" dir={isArabic ? 'rtl' : 'ltr'}>
            <span className="text-slate-400 font-light">
              {text.craftedBy}
            </span>

            <a
              href="https://sevenmud-web.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#223023]/60 hover:bg-[#223023] text-emerald-300 font-bold border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 shadow-sm"
              dir="ltr"
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
