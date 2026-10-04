import { useEffect, useRef, useState } from 'react';

const MOBILE_FRAME_COUNT = 300;
const DESKTOP_FRAME_COUNT = 200;
const DESKTOP_BREAKPOINT = 768;

const TEXTS = [
  {
    start: 0.05,
    end: 0.22,
    title: 'ENGINEERED FOR MOTION',
    subtitle: 'Every line. Every detail. Built around movement.',
  },
  {
    start: 0.32,
    end: 0.50,
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
  const frameFolderRef = useRef('/scroll-frames/');

  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const lastTextIndexRef = useRef(-1);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const [activeText, setActiveText] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [preloadComplete, setPreloadComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
    });

    if (!ctx) return;

    const getIsDesktop = () =>
      window.innerWidth >= DESKTOP_BREAKPOINT;

    const getFrameCount = () =>
      getIsDesktop()
        ? DESKTOP_FRAME_COUNT
        : MOBILE_FRAME_COUNT;

    const setFrameFolder = () => {
      frameFolderRef.current = getIsDesktop()
        ? '/scroll-frames-desktop/'
        : '/scroll-frames/';
    };

    setFrameFolder();

    const images = imagesRef.current;

    const framePath = (index: number) =>
      `${frameFolderRef.current}frame_${String(index + 1).padStart(4, '0')}.webp`;

    const drawFrame = (index: number) => {
      const image = images[index];

      if (!image || !image.complete || image.naturalWidth === 0) {
        return;
      }

      if (currentFrameRef.current === index) {
        return;
      }

      currentFrameRef.current = index;

      if (
        canvas.width !== image.naturalWidth ||
        canvas.height !== image.naturalHeight
      ) {
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
    };

    const loadFrame = (index: number) => {
      const frameCount = getFrameCount();

      if (
        index < 0 ||
        index >= frameCount ||
        images[index]
      ) {
        return;
      }

      const image = new Image();

      image.decoding = 'async';
      image.loading = 'eager';
      image.fetchPriority = index < 12 ? 'high' : 'auto';
      image.src = framePath(index);

      const markLoaded = () => {
        setLoadedFrames((loaded) => {
          const next = Math.min(frameCount, loaded + 1);
          if (next >= frameCount) setPreloadComplete(true);
          return next;
        });
      };

      image.onload = () => {
        markLoaded();
        if (index === 0 && currentFrameRef.current === -1) drawFrame(0);
      };

      image.onerror = markLoaded;

      images[index] = image;
    };

    /*
     * Load ALL frames immediately.
     *
     * The old version loaded only 10 frames at a time
     * using requestIdleCallback(). That caused the scroll
     * to reach frames that had not started loading yet.
     *
     * Starting every request immediately makes the browser
     * fetch the complete sequence as early as possible.
     */
    const preloadCount = getFrameCount();

    for (let i = 0; i < preloadCount; i++) {
      loadFrame(i);
    }

    const updateTarget = () => {
      const section = document.querySelector(
        '[data-scroll-section]'
      ) as HTMLElement | null;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const sectionStarted = rect.top <= 0;

      const sectionActive =
        rect.bottom > window.innerHeight;

      setVisible(
        sectionStarted && sectionActive
      );

      const progress = Math.max(
        0,
        Math.min(
          1,
          -rect.top / scrollDistance
        )
      );

      targetProgressRef.current = progress;
    };

    const animate = () => {
      const target =
        targetProgressRef.current;

      const current =
        currentProgressRef.current;

      const difference =
        target - current;

      /*
       * Faster response to finger/mouse movement.
       * The old 0.045 value made the animation feel
       * delayed behind the actual scroll.
       */
      currentProgressRef.current =
        current + difference * 0.12;

      const progress =
        currentProgressRef.current;

      const frameCount = getFrameCount();

      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(
          0,
          Math.floor(
            progress * (frameCount - 1)
          )
        )
      );

      /*
       * The complete sequence is already being loaded,
       * so we do not need to constantly start new image
       * requests while the user is scrolling.
       */
      if (preloadComplete) {
        drawFrame(frameIndex);
      }

      let textIndex = -1;

      TEXTS.forEach((text, index) => {
        if (
          progress >= text.start &&
          progress <= text.end
        ) {
          textIndex = index;
        }
      });

      if (
        lastTextIndexRef.current !== textIndex
      ) {
        lastTextIndexRef.current = textIndex;
        setActiveText(textIndex);
      }

      rafRef.current =
        requestAnimationFrame(animate);
    };

    const onScroll = () => {
      updateTarget();
    };

    const onResize = () => {
      const newIsDesktop = getIsDesktop();

      const newFolder = newIsDesktop
        ? '/scroll-frames-desktop/'
        : '/scroll-frames/';

      if (
        frameFolderRef.current !== newFolder
      ) {
        frameFolderRef.current = newFolder;

        imagesRef.current = [];

        currentFrameRef.current = -1;

        const newFrameCount = newIsDesktop
          ? DESKTOP_FRAME_COUNT
          : MOBILE_FRAME_COUNT;

        for (
          let i = 0;
          i < newFrameCount;
          i++
        ) {
          loadFrame(i);
        }
      }

      updateTarget();
    };

    updateTarget();

    rafRef.current =
      requestAnimationFrame(animate);

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      onResize
    );

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      );

      window.removeEventListener(
        'resize',
        onResize
      );

      if (rafRef.current !== null) {
        cancelAnimationFrame(
          rafRef.current
        );
      }
    };
  }, [preloadComplete]);

  const frameCount =
    typeof window !== 'undefined' && window.innerWidth >= DESKTOP_BREAKPOINT
      ? DESKTOP_FRAME_COUNT
      : MOBILE_FRAME_COUNT;

  const loadingPercent = Math.min(
    100,
    Math.round((loadedFrames / frameCount) * 100)
  );

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
              <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-white/50">R2 / MOTION</p>
              <div className="mb-4 text-5xl font-light tracking-[0.08em] text-white md:text-6xl">{loadingPercent}%</div>
              <div className="h-px w-full overflow-hidden bg-white/10">
                <div className="h-full bg-white/70 transition-[width] duration-200" style={{ width: loadingPercent + '%' }} />
              </div>
              <p className="mt-4 text-[9px] uppercase tracking-[0.28em] text-white/40">Preparing the cinematic experience</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
        }
