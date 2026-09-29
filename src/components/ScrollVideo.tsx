import { useEffect, useRef } from 'react';

const FRAME_COUNT = 300;

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let currentFrame = -1;

    const getFramePath = (index: number) =>
      `/scroll-frames/frame_${String(index + 1).padStart(4, '0')}.webp`;

    const drawFrame = (index: number) => {
      if (index === currentFrame) return;

      const image = images[index];
      if (!image || !image.complete) return;

      currentFrame = index;

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
    };

    // Preload frames
    for (let i = 0; i < FRAME_COUNT; i++) {
      const image = new Image();
      image.src = getFramePath(i);

      image.onload = () => {
        if (i === 0) drawFrame(0);
      };

      images.push(image);
    }

    const handleScroll = () => {
      const section = canvas.parentElement;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

const progress = Math.min(
  1,
  Math.max(0, (-rect.top / scrollableDistance) * 0.5)
);
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * (FRAME_COUNT - 1))
      );

      drawFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
