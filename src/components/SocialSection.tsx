'use client';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dev7mud?stkn=MWV1OHk3OGIwYmxvbQ==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon-svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    name: 'Twitter',
    url: 'https://x.com/x5vxc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="social-icon-svg">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="social-icon-svg">
        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.511a3.002 3.002 0 00-2.11 2.107C0 8.025 0 12 0 12s0 3.975.502 5.837a3.003 3.003 0 002.11 2.107C4.475 20.455 12 20.455 12 20.455s7.525 0 9.388-.511a3.003 3.003 0 002.11-2.107C24 15.975 24 12 24 12s0-3.975-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: 'Website',
    url: 'https://sevenmud-web.onrender.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon-svg">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="social-icon-svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: 'Telegram',
    url: 'https://telegram.org',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="social-icon-svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12a.4.4 0 01.12.25c0 .04.01.16 0 .24z"/>
      </svg>
    )
  },
  {
    name: 'Buy me a Coffee',
    url: 'https://buymeacoffee.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon-svg">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  }
];

export default function AnimatedNavList() {
  return (
    <section id="social" className="relative py-24 px-6 w-full bg-slate-50 dark:bg-[#070b08] text-slate-900 dark:text-white transition-colors duration-300 border-t border-black/5 dark:border-white/5">

      {/* Title */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono text-[#223023] dark:text-[#88b08a] uppercase tracking-[0.35em] block mb-2">
          [ CONNECT & FOLLOW ]
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight">
          CONNECT WITH <span className="text-[#223023] dark:text-[#5a805d]">VELTRION</span>
        </h2>
      </div>

      <div className="navlist-page-wrapper">
        <style dangerouslySetInnerHTML={{ __html: `
          .navlist-page-wrapper {
            min-height: 420px;
            width: 100%;
            display: grid;
            place-items: center;
            background: transparent;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          }

          .navlist-page-wrapper * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          .navlist-box {
            filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25));
            width: 100%;
            max-width: 16rem;
          }

          .navlist-ul {
            position: relative;
            list-style: none;
            padding-left: 0;
            border-radius: 1rem;
            transform-style: preserve-3d;
            perspective: 1000px;
            font: lighter 1rem Helvetica, sans-serif;
          }

          .navlist-li {
            height: 3.2rem;
            display: flex;
            background: #ffffff;
            box-shadow: inset 0 0 1rem -0.5rem rgba(0,0,0,0.125);
            transition: transform 0.35s, box-shadow 0.35s, background 0.35s, border-color 0.35s;
            transform: translate3d(0, 0, 0);
            opacity: 0;
            animation:
                firstShow 0.5s ease-in-out,
                show 0.15s linear forwards;
            border: 1px solid rgba(34, 48, 35, 0.12);
          }

          .dark .navlist-li {
            background: #0e1610;
            border-color: rgba(255, 255, 255, 0.08);
          }

          .navlist-li:nth-child(1) { animation-delay: 0.50s; }
          .navlist-li:nth-child(2) { animation-delay: 0.60s; }
          .navlist-li:nth-child(3) { animation-delay: 0.70s; }
          .navlist-li:nth-child(4) { animation-delay: 0.80s; }
          .navlist-li:nth-child(5) { animation-delay: 0.90s; }
          .navlist-li:nth-child(6) { animation-delay: 1.00s; }
          .navlist-li:nth-child(7) { animation-delay: 1.10s; }

          .navlist-li:first-child {
            border-radius: 1rem 1rem 0 0;
          }

          .navlist-li:last-child {
            border-radius: 0 0 1rem 1rem;
          }

          /* 3D Wave Pop Forward selectors */
          .navlist-li:hover,
          .navlist-li:focus-within {
            transform: translate3d(0, 0, 3rem);
            z-index: 10;
            background: #223023;
          }

          .dark .navlist-li:hover,
          .dark .navlist-li:focus-within {
            background: #223023;
          }

          .navlist-li:hover .navlist-link,
          .navlist-li:focus-within .navlist-link {
            color: #ffffff;
          }

          .navlist-li:hover .social-icon-svg,
          .navlist-li:focus-within .social-icon-svg {
            color: #ffffff !important;
            stroke: #ffffff;
          }

          .navlist-li:hover + .navlist-li,
          .navlist-li:focus-within + .navlist-li,
          .navlist-li:has(+ .navlist-li:hover),
          .navlist-li:has(+ .navlist-li:focus-within) {
            box-shadow: inset 0 1rem 1rem -1rem rgba(0, 0, 0, 0.18);
            transform: translate3d(0, 0, 2rem);
            z-index: 5;
          }

          .navlist-li:has(+ .navlist-li:hover),
          .navlist-li:has(+ .navlist-li:focus-within) {
            box-shadow: inset 0 -1rem 1rem -1rem rgba(0, 0, 0, 0.18);
          }

          .navlist-li:hover + .navlist-li + .navlist-li,
          .navlist-li:focus-within + .navlist-li + .navlist-li {
            box-shadow: inset 0 1rem 0.5rem -0.75rem rgba(0, 0, 0, 0.12);
            z-index: 2;
          }

          .navlist-li:has(+ .navlist-li + .navlist-li:hover),
          .navlist-li:has(+ .navlist-li + .navlist-li:focus-within) {
            box-shadow: inset 0 -1rem 0.5rem -0.75rem rgba(0, 0, 0, 0.12);
            z-index: 2;
          }

          .navlist-link {
            font-size: 0.95rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            flex: 1;
            padding: 0 1.25rem;
            text-decoration: none;
            color: #000000;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .dark .navlist-link {
            color: #ffffff;
          }

          .navlist-icon-container {
            margin-right: 0.75em;
            width: 1.25rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .social-icon-svg {
            color: #000000 !important;
            transition: color 0.3s ease;
          }

          .dark .social-icon-svg {
            color: #ffffff !important;
          }

          @keyframes firstShow {
            0%,
            100% {
              transform: perspective(1000px) translate3d(0, 0, 0em);
            }
            50% {
              transform: perspective(1000px) translate3d(0, 0, 3em);
            }
          }

          @keyframes show {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion) {
            .navlist-page-wrapper * {
              transition-duration: 0s !important;
              animation-duration: 0s !important;
            }
          }
        ` }} />

        <nav className="navlist-box" aria-labelledby="nav-title-social">
          <ul className="navlist-ul">
            {socialLinks.map((link) => (
              <li key={link.name} className="navlist-li">
                <a
                  href={link.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navlist-link"
                >
                  <span className="navlist-icon-container">{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
