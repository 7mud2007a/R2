'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export default function AnimatedNavbar({ onNavigate }: NavbarProps) {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const openTl = useRef<gsap.core.Timeline | null>(null);
  const closeTl = useRef<gsap.core.Timeline | null>(null);

  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, isArabic } = useLanguage();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    openTl.current = gsap.timeline({ paused: true });
    closeTl.current = gsap.timeline({ paused: true });

    const getOrigin = () => {
      return window.innerWidth <= 640 ? '36px 36px' : '60px 60px';
    };

    const origin = getOrigin();

    gsap.set(el.querySelector('nav'), {
      clipPath: `circle(0px at ${origin})`,
    });

    openTl.current
      .set(el.querySelector('.btn'), { pointerEvents: 'none' })
      .to(
        el.querySelector('nav'),
        {
          clipPath: `circle(200% at ${getOrigin()})`,
          duration: 1.5,
          ease: 'power4.out',
        },
        0
      )
      .to(
        el.querySelectorAll('nav li'),
        {
          x: 0,
          opacity: 1,
          pointerEvents: 'all',
          duration: 1.25,
          stagger: 0.1,
          ease: 'elastic.out(1.15, .95)',
        },
        0
      )
      .to(
        el.querySelector('.btn .close'),
        {
          opacity: 1,
          yPercent: -125,
          duration: 1,
          ease: 'power4.out',
        },
        0
      )
      .to(
        el.querySelector('.btn .line'),
        {
          opacity: 0,
          yPercent: -125,
          duration: 1,
          ease: 'power4.out',
        },
        0
      )
      .set(el.querySelector('.btn'), { pointerEvents: 'all' });

    closeTl.current
      .set(el.querySelector('.btn'), { pointerEvents: 'none' })
      .to(
        el.querySelectorAll('nav li'),
        {
          x: -200,
          opacity: 0,
          pointerEvents: 'none',
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
        },
        0
      )
      .to(
        el.querySelector('nav'),
        {
          clipPath: `circle(0px at ${getOrigin()})`,
          duration: 1.2,
          ease: 'power4.out',
        },
        '-=1'
      )
      .to(
        el.querySelector('.btn--bg'),
        {
          scale: 0.9,
          duration: 0.25,
          ease: 'elastic.out',
        },
        '-=.9'
      )
      .to(
        el.querySelector('.btn--bg'),
        {
          scale: 1,
          duration: 0.25,
          ease: 'elastic.out',
        },
        '-=.5'
      )
      .to(
        el.querySelector('.btn .close'),
        {
          opacity: 0,
          yPercent: 125,
          duration: 1,
          ease: 'power4.out',
        },
        0
      )
      .to(
        el.querySelector('.btn .line'),
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: 'power4.out',
        },
        0
      )
      .set(el.querySelector('.btn'), { pointerEvents: 'all' });

    return () => {
      openTl.current?.kill();
      closeTl.current?.kill();
    };
  }, []);

  const handleToggleClick = () => {
    if (!active) {
      openTl.current?.seek(0).play();
    } else {
      closeTl.current?.seek(0).play();
    }

    setActive(!active);
  };

  const handleNavClick = (sectionId: string) => {
    if (active) {
      closeTl.current?.seek(0).play();
      setActive(false);
    }

    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const labels = isArabic
    ? {
        home: 'الرئيسية',
        cars: 'السيارات',
        technology: 'التكنولوجيا',
        about: 'عن الشركة',
        contact: 'تواصل معنا',
        inquire: 'استفسار',
        switchToEnglish: 'التبديل إلى الإنجليزية',
        switchToArabic: 'التبديل إلى العربية',
        toggleTheme: 'تبديل المظهر',
        navigation: 'تبديل قائمة التنقل',
      }
    : {
        home: 'Home',
        cars: 'Cars',
        technology: 'Technology',
        about: 'About',
        contact: 'Contact',
        inquire: 'Inquire',
        switchToEnglish: 'Switch to English',
        switchToArabic: 'Switch to Arabic',
        toggleTheme: 'Toggle Theme',
        navigation: 'Toggle Navigation Menu',
      };

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full max-w-full z-50 pointer-events-none box-border"
      ref={containerRef}
      dir="ltr"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Krona+One&display=swap");

        .anim-nav-container button.btn {
          border: none;
          background: none;
          cursor: pointer;
          position: fixed;
          left: 60px;
          top: 60px;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          border-radius: 20px;
          z-index: 60;
          outline: none;
          pointer-events: auto;
        }

        @media (max-width: 640px) {
          .anim-nav-container button.btn {
            left: 36px;
            top: 36px;
            width: 44px;
            height: 44px;
          }
        }

        .anim-nav-container button.btn .icons {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .anim-nav-container button.btn .icons svg {
          position: absolute;
          width: 50%;
          height: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          fill: #ffffff;
        }

        .anim-nav-container button.btn .icons svg.close {
          opacity: 0;
          transform: translate(-50%, -50%) translateY(125%);
        }

        .anim-nav-container button.btn .btn--bg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: #223023;
          border-radius: 25%;
          box-shadow: 0 8px 25px rgba(34, 48, 35, 0.4);
          transition: background 0.3s ease;
        }

        .anim-nav-container button.btn:hover .btn--bg {
          background: #2c3e2e;
        }

        .anim-nav-container nav {
          position: fixed;
          inset: 0;
          width: 100%;
          max-width: 100%;
          height: 100dvh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background: #223023;
          clip-path: circle(0px at 60px 60px);
          -webkit-clip-path: circle(0px at 60px 60px);
          z-index: 50;
          pointer-events: auto;
          box-sizing: border-box;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .anim-nav-container nav {
            clip-path: circle(0px at 36px 36px);
            -webkit-clip-path: circle(0px at 36px 36px);
          }
        }

        .anim-nav-container nav ul {
          margin-left: 12vw;
          list-style: none;
          padding-right: 20px;
        }

        @media (max-width: 768px) {
          .anim-nav-container nav ul {
            margin-left: 8vw;
          }
        }

        @media (max-width: 480px) {
          .anim-nav-container nav ul {
            margin-left: 6vw;
          }
        }

        .anim-nav-container nav ul li {
          position: relative;
          padding: 12px 0;
          cursor: pointer;
          transform: translateX(-200px);
          opacity: 0;
          pointer-events: none;
        }

        .anim-nav-container nav ul li span {
          font-size: clamp(1.8rem, 6vw, 4.5rem);
          font-family: "Krona One", sans-serif;
          font-weight: 700;
          opacity: 0.35;
          transition: all 0.3s ease;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .anim-nav-container nav ul li::before {
          content: "";
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translate(-50%, -50%) translateX(-50%);
          width: 25px;
          height: 8px;
          border-radius: 10px;
          background: #ffffff;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }

        .anim-nav-container nav ul li:hover::before {
          opacity: 1;
          transform: translate(-50%, -50%) translateX(0);
        }

        .anim-nav-container nav ul li:hover span {
          opacity: 1;
          letter-spacing: 0.02em;
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }
      `,
        }}
      />

      <div className="anim-nav-container relative w-full max-w-full h-full box-border">
        <div
          className="fixed top-0 left-0 right-0 h-16 sm:h-20 md:h-24 px-3 sm:px-6 md:px-14 flex items-center justify-between z-40 pointer-events-auto backdrop-blur-md bg-white/30 dark:bg-[#070b08]/30 border-b border-black/5 dark:border-white/5 transition-colors duration-300 w-full max-w-full box-border"
          dir="ltr"
        >
          <div className="w-12 sm:w-16 md:w-20 flex-shrink-0"></div>

          <div
            className="flex items-center justify-center cursor-pointer min-w-0 px-1 overflow-hidden"
            onClick={() => handleNavClick('hero')}
          >
            <span className="font-cinzel text-xs sm:text-lg md:text-2xl font-bold tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.25em] text-slate-900 dark:text-white transition-colors duration-300 whitespace-nowrap truncate">
              VELTRION{' '}
              <span className="text-[#223023] dark:text-[#5a7d5c]">
                MOTORS
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Language + Theme Controls — side by side */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="group flex items-center gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-900 dark:text-white transition-all duration-300 border border-black/10 dark:border-white/10"
                title={
                  language === 'EN'
                    ? labels.switchToArabic
                    : labels.switchToEnglish
                }
                aria-label={
                  language === 'EN'
                    ? labels.switchToArabic
                    : labels.switchToEnglish
                }
              >
                <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest">
                  {language}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-900 dark:text-white transition-all duration-300 border border-black/10 dark:border-white/10"
                title={labels.toggleTheme}
                aria-label={labels.toggleTheme}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                )}
              </button>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:block px-4 md:px-5 py-2 text-[10px] md:text-xs font-semibold tracking-widest text-white uppercase bg-[#223023] hover:bg-[#2c3e2e] rounded-md transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {labels.inquire}
            </button>
          </div>
        </div>

        <button
          className="btn"
          onClick={handleToggleClick}
          aria-label={labels.navigation}
        >
          <div className="btn--bg" />

          <div className="icons">
            <svg viewBox="0 0 448 512" className="line">
              <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>

            <svg viewBox="0 0 320 512" className="close">
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75 0-45.25 0s-12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </div>
        </button>

        <nav dir={isArabic ? 'rtl' : 'ltr'}>
          <ul>
            <li onClick={() => handleNavClick('hero')}>
              <span>{labels.home}</span>
            </li>

            <li onClick={() => handleNavClick('cars')}>
              <span>{labels.cars}</span>
            </li>

            <li onClick={() => handleNavClick('technology')}>
              <span>{labels.technology}</span>
            </li>

            <li onClick={() => handleNavClick('about')}>
              <span>{labels.about}</span>
            </li>

            <li onClick={() => handleNavClick('contact')}>
              <span>{labels.contact}</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
