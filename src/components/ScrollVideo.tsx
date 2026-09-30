import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 300;

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
  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);

  const [activeText, setActiveText] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;

    const framePath = (index: number) =>
      `/scroll-frames/frame_${String(index + 1).padStart(4, '0')}.webp`;

    const drawFrame = (index: number) => {
      const image = images[index];

      if (!image || !image.complete || image.naturalWidth === 0) return;
      if (currentFrameRef.current === index) return;

      currentFrameRef.current = index;

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
    };

    const loadFrame = (index: number) => {
      if (index < 0 || index >= FRAME_COUNT || images[index]) return;

      const image = new Image();
      image.src = framePath(index);

      image.onload = () => {
        if (index === 0 && currentFrameRef.current === -1) {
          drawFrame(0);
        }
      };

      images[index] = image;
    };

    // Preload first frames
    for (let i = 0; i < 30; i++) {
      loadFrame(i);
    }

    const update = () => {
      const section = document.querySelector(
        '[data-scroll-section]'
      ) as HTMLElement | null;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      // Section starts
      const sectionStarted = rect.top <= 0;

      // Section still active
      const sectionActive = rect.bottom > window.innerHeight;

      // Keep the visual fixed only while inside this section
      setVisible(sectionStarted && sectionActive);

      // Calculate progress through the section
      const progress = Math.max(
        0,
        Math.min(
          1,
          -rect.top / scrollDistance
        )
      );

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * (FRAME_COUNT - 1))
      );

      // Load frames around current position
      for (
        let i = frameIndex - 5;
        i <= frameIndex + 12;
        i++
      ) {
        loadFrame(i);
      }

      drawFrame(frameIndex);

      let textIndex = -1;

      TEXTS.forEach((text, index) => {
        if (
          progress >= text.start &&
          progress <= text.end
        ) {
          textIndex = index;
        }
      });

      setActiveText(textIndex);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    update();

    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      onScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      );

      window.removeEventListener(
        'resize',
        onScroll
      );

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      data-scroll-section
      className="relative h-[700vh] w-full bg-black"
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
              className={`absolute bottom-16 left-6 max-w-md transition-all duration-700 md:left-16 ${
                activeText === index
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
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
      </div>
    </section>
  );
}
