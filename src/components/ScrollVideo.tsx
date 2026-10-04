import { useEffect, useRef, useState } from 'react';

const DESKTOP_BREAKPOINT = 768;
const DESKTOP_FRAMES = 200;
const MOBILE_FRAMES = 300;
const CONCURRENT_LOADS = 24;

const TEXTS = [
  {
    start: 0.05,
    end: 0.22,
    title: 'ENGINEERED FOR MOTION',
    subtitle: 'Every line. Every detail. Built around movement.',
  },
  {
    start: 0.32,
    end: 0.5,
    title: 'PRECISION / POWER / CONTROL',
    subtitle: 'Performance shaped by engineering.',
  },
  {
    start: 0.58,
    end: 0.76,
    title: 'BUILT WITHOUT COMPROMISE',
    subtitle: 'Where technology meets automotive character.',
  },
  {
    start: 0.84,
    end: 0.98,
    title: 'THE ART OF PERFORMANCE',
    subtitle: 'Designed to move. Made to be remembered.',
  },
];

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const scrollLockYRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const readyRef = useRef(false);
  const lastFrameRef = useRef(-1);
  const lastTextIndexRef = useRef(-1);

  const [activeText, setActiveText] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [loadedPercent, setLoadedPercent] = useState(0);
  const [preloadComplete, setPreloadComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
    const totalFrames = isDesktop ? DESKTOP_FRAMES : MOBILE_FRAMES;
    const folder = isDesktop ? '/scroll-frames-desktop/' : '/scroll-frames/';
    const images = new Array<HTMLImageElement>(totalFrames);
    imagesRef.current = images;

    let nextFrameToLoad = 0;
    let activeLoads = 0;
    let loadedCount = 0;
    let cancelled = false;

    const frameUrl = (index: number) =>
      folder + 'frame_' + String(index + 1).padStart(4, '0') + '.webp';

    const drawFrame = (frameIndex: number) => {
      const image = images[frameIndex];
      if (!image || !image.complete || !image.naturalWidth) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (lastFrameRef.current === frameIndex) return;

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      lastFrameRef.current = frameIndex;
    };

    const startNextLoads = () => {
      while (
        !cancelled &&
        activeLoads < CONCURRENT_LOADS &&
        nextFrameToLoad < totalFrames
      ) {
        const frameIndex = nextFrameToLoad;
        nextFrameToLoad += 1;
        activeLoads += 1;

        const image = new Image();
        image.decoding = 'async';
        image.loading = 'eager';

        if (frameIndex < 24) {
          image.fetchPriority = 'high';
        }

        image.onload = () => {
          activeLoads -= 1;

          if (cancelled) return;

          images[frameIndex] = image;
          loadedCount += 1;
          const percent = Math.min(
            100,
            Math.floor((loadedCount * 100) / totalFrames)
          );

          setLoadedPercent(percent);

          if (loadedCount === totalFrames) {
            readyRef.current = true;
            setPreloadComplete(true);
            setLoadedPercent(100);
            drawFrame(0);
          }

          startNextLoads();
        };

        image.onerror = () => {
          activeLoads -= 1;
          if (!cancelled) startNextLoads();
        };

        image.src = frameUrl(frameIndex);
      }
    };

    const updateTarget = () => {
      const section = document.querySelector(
        '[data-scroll-section]'
      ) as HTMLElement | null;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const sectionStarted = rect.top <= 0;
      const sectionActive = rect.bottom > window.innerHeight;

      const isLoaderActive =
        sectionStarted &&
        sectionActive &&
        !readyRef.current;

      if (isLoaderActive) {
        if (scrollLockYRef.current === null) {
          scrollLockYRef.current = window.scrollY + rect.top;
        }

        if (Math.abs(window.scrollY - scrollLockYRef.current) > 0) {
          window.scrollTo({
            top: scrollLockYRef.current,
            behavior: 'auto',
          });
        }

        targetProgressRef.current = 0;
        currentProgressRef.current = 0;
      } else if (readyRef.current) {
        scrollLockYRef.current = null;
        targetProgressRef.current = Math.max(
          0,
          Math.min(1, -rect.top / scrollDistance)
        );
      }

      setVisible(sectionStarted && sectionActive);
    };

    const animate = () => {
      const difference =
        targetProgressRef.current - currentProgressRef.current;

      currentProgressRef.current += difference * 0.12;
      const progress = currentProgressRef.current;

      if (readyRef.current) {
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.max(0, Math.floor(progress * (totalFrames - 1)))
        );

        drawFrame(frameIndex);
      }

      let textIndex = -1;
      TEXTS.forEach((text, index) => {
        if (progress >= text.start && progress <= text.end) {
          textIndex = index;
        }
      });

      if (lastTextIndexRef.current !== textIndex) {
        lastTextIndexRef.current = textIndex;
        setActiveText(textIndex);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      updateTarget();

      if (scrollLockYRef.current !== null) {
        window.scrollTo({
          top: scrollLockYRef.current,
          behavior: 'auto',
        });
      }
    };

    const preventScrollWhileLoading = (event: Event) => {
      if (scrollLockYRef.current === null || readyRef.current) return;

      event.preventDefault();
      window.scrollTo({
        top: scrollLockYRef.current,
        behavior: 'auto',
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (scrollLockYRef.current === null || readyRef.current) return;

      const blockedKeys = [
        'ArrowDown',
        'ArrowUp',
        'PageDown',
        'PageUp',
        ' ',
        'Home',
        'End',
      ];

      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
        window.scrollTo({
          top: scrollLockYRef.current,
          behavior: 'auto',
        });
      }
    };

    updateTarget();
    startNextLoads();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', preventScrollWhileLoading, {
      passive: false,
    });
    window.addEventListener('touchmove', preventScrollWhileLoading, {
      passive: false,
    });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      cancelled = true;

      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', preventScrollWhileLoading);
      window.removeEventListener('touchmove', preventScrollWhileLoading);
      window.removeEventListener('keydown', onKeyDown);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      imagesRef.current = [];
    };
  }, []);

  const showLoader = visible && !preloadComplete;

  return (
    <section
      data-scroll-section
      className="relative h-[1200vh] w-full bg-black"
    >
      <div
        className={`fixed inset-0 z-30 h-screen w-full overflow-hidden bg-black transition-opacity duration-300 ${
          visible
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-contain"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-6 top-1/2 hidden h-px w-16 bg-white/30 md:block" />

          <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              R2 / MOTION
            </span>
          </div>

          {TEXTS.map((text, index) => (
            <div
              key={text.title}
              className={`absolute bottom-16 left-6 max-w-md md:left-16 ${
                activeText === index && preloadComplete
                  ? 'opacity-100'
                  : 'pointer-events-none opacity-0'
              }`}
              style={{
                transform:
                  activeText === index && preloadComplete
                    ? 'translateY(-45px)'
                    : 'translateY(35px)',
                transition:
                  'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease',
              }}
            >
              <div className="mb-3 h-px w-12 bg-white/60" />
              <p className="mb-2 text-[10px] uppercase tracking-[0.4em] text-white/50">
                0{index + 1} / R2
              </p>
              <h2 className="text-xl font-light tracking-[0.12em] text-white md:text-3xl">
                {text.title}
              </h2>
              <p className="mt-3 text-xs leading-relaxed tracking-[0.08em] text-white/60 md:text-sm">
                {text.subtitle}
              </p>
            </div>
          ))}
        </div>

        {showLoader && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#070b08]/95">
            <div className="flex w-[280px] flex-col items-center text-center md:w-[360px]">
              <div className="mb-5 h-px w-12 bg-white/60" />
              <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-white/50">
                R2 / MOTION
              </p>
              <div className="mb-4 text-5xl font-light tracking-[0.08em] text-white md:text-6xl">
                {loadedPercent}%
              </div>
              <div className="h-px w-full overflow-hidden bg-white/10">
                <div
                  className="h-full bg-white/70 transition-[width] duration-75"
                  style={{ width: loadedPercent + '%' }}
                />
              </div>
              <p className="mt-4 text-[9px] uppercase tracking-[0.28em] text-white/40">
                Preparing the cinematic experience
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
