import { useState, useEffect, useRef } from 'react';
import { Layers, Sparkles } from 'lucide-react';

// Cinematic text overlay stages along progress 0..1
const CINE_TEXTS = [
  {
    range: [0.05, 0.25],
    title: "Engineering Beyond Limits",
    subtitle: "Every line drawn with mathematical clarity, every angle tuned for ultimate downforce.",
    stageName: "01 / SPOTLIGHT REVEAL"
  },
  {
    range: [0.28, 0.48],
    title: "Precision. Performance. Design.",
    subtitle: "Uncompromising carbon-ceramic brake systems paired with ultralight magnesium forging.",
    stageName: "02 / MECHANICAL ASSEMBLY"
  },
  {
    range: [0.52, 0.72],
    title: "Built With Uncompromising Detail",
    subtitle: "BMW M5 CS inspired architecture fused with Veltrion quantum powertrain technology.",
    stageName: "03 / X-RAY ENGINE VISUALIZATION"
  },
  {
    range: [0.76, 0.95],
    title: "Future Of Automotive Innovation",
    subtitle: "A masterpiece ready for the road. The pinnacle of human engineering realized.",
    stageName: "04 / COMPLETE VEHICLE"
  }
];

export default function CinematicExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [framesLoaded, setFramesLoaded] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // 1. Attempt to preload user frames from /frames/frame001.png .. frame030.png
  useEffect(() => {
    let loadedCount = 0;
    const totalFrames = 30;
    const loadedImages: HTMLImageElement[] = [];

    const loadFrame = (index: number) => {
      const img = new Image();
      const paddedNum = String(index).padStart(3, '0');
      img.src = `/frames/frame${paddedNum}.png`;
      img.onload = () => {
        loadedImages[index - 1] = img;
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages);
          setFramesLoaded(true);
        }
      };
      img.onerror = () => {
        // If frames are missing, fallback to interactive Canvas vector renderer
      };
    };

    for (let i = 1; i <= totalFrames; i++) {
      loadFrame(i);
    }
  }, []);

  // 2. Scroll listener to calculate progress across section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollHeight = containerRef.current.clientHeight - window.innerHeight;

      if (totalScrollHeight <= 0) return;

      // Distance from top of sticky section to top of viewport
      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollHeight));

      setProgress(rawProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Render Canvas frame or Canvas Fallback graphics based on progress
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    if (framesLoaded && images.length > 0) {
      // Draw preloaded frame image corresponding to scroll progress
      const frameIndex = Math.min(images.length - 1, Math.floor(progress * images.length));
      const currentImg = images[frameIndex];
      if (currentImg && currentImg.complete) {
        ctx.drawImage(currentImg, 0, 0, width, height);
        return;
      }
    }

    // --- FALLBACK CINEMATIC BMW M5 CS GRAPHICS RENDERER ---
    // Smooth dark luxury backdrop
    const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width / 1.2);
    bgGrad.addColorStop(0, '#101a12');
    bgGrad.addColorStop(0.5, '#0a0f0b');
    bgGrad.addColorStop(1, '#040604');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Grid Floor Perspective
    ctx.save();
    ctx.strokeStyle = 'rgba(34, 48, 35, 0.25)';
    ctx.lineWidth = 1;
    const horizon = height * 0.65;
    for (let x = -width; x <= width * 2; x += 60) {
      ctx.beginPath();
      ctx.moveTo(width / 2, horizon);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = horizon; y <= height; y += 25) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();

    // STAGE 1: Spotlight Appears (0.0 to 0.25)
    if (progress >= 0 && progress <= 0.3) {
      const spotlightOpacity = Math.min(1, progress * 4);
      const spotGrad = ctx.createRadialGradient(width / 2, horizon - 100, 10, width / 2, horizon, 320);
      spotGrad.addColorStop(0, `rgba(255, 255, 255, ${0.4 * spotlightOpacity})`);
      spotGrad.addColorStop(0.4, `rgba(34, 48, 35, ${0.6 * spotlightOpacity})`);
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = spotGrad;
      ctx.beginPath();
      ctx.ellipse(width / 2, horizon, 350, 90, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // STAGE 2: Wheel Reveal & Rotation (0.2 to 0.5)
    const wheelX1 = width * 0.32;
    const wheelX2 = width * 0.68;
    const wheelY = horizon - 20;
    const wheelRadius = 55;
    const rotationAngle = progress * Math.PI * 8; // Wheel turns as you scroll

    const drawWheel = (x: number, y: number, rot: number) => {
      ctx.save();
      ctx.translate(x, y);

      // Tire
      ctx.beginPath();
      ctx.arc(0, 0, wheelRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#111';
      ctx.fill();
      ctx.strokeStyle = '#223023';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Rim Gold/Bronze Accent (M5 CS style)
      ctx.beginPath();
      ctx.arc(0, 0, wheelRadius - 10, 0, Math.PI * 2);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Rotating Spokes
      ctx.rotate(rot);
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos((i * Math.PI * 2) / 5) * (wheelRadius - 12), Math.sin((i * Math.PI * 2) / 5) * (wheelRadius - 12));
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Hub Cap
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#223023';
      ctx.fill();
      ctx.restore();
    };

    if (progress > 0.15) {
      drawWheel(wheelX1, wheelY, rotationAngle);
      drawWheel(wheelX2, wheelY, rotationAngle);
    }

    // STAGE 3: Mechanical Car Assembly & Body Silhouette (0.35 to 0.8)
    if (progress > 0.3) {
      const assemblyProgress = Math.min(1, (progress - 0.3) / 0.4);

      ctx.save();
      ctx.strokeStyle = progress > 0.55 && progress < 0.75 ? '#00ffcc' : '#ffffff'; // X-Ray cyan highlight
      ctx.lineWidth = 3;

      // Chassis Body Lines
      ctx.beginPath();
      // Front bumper
      ctx.moveTo(wheelX1 - 100, wheelY + 10);
      ctx.lineTo(wheelX1 - 110, wheelY - 20);
      // Hood
      ctx.lineTo(wheelX1 - 20, wheelY - 55 * assemblyProgress);
      // Windshield
      ctx.lineTo(width / 2 - 40, wheelY - 110 * assemblyProgress);
      // Roof
      ctx.lineTo(width / 2 + 80, wheelY - 110 * assemblyProgress);
      // Rear window & Trunk
      ctx.lineTo(wheelX2 + 40, wheelY - 45 * assemblyProgress);
      // Rear bumper
      ctx.lineTo(wheelX2 + 100, wheelY + 10);

      ctx.stroke();

      // Body Gradient Fill for Complete Vehicle
      if (progress >= 0.7) {
        const bodyGrad = ctx.createLinearGradient(0, horizon - 120, 0, horizon + 20);
        bodyGrad.addColorStop(0, '#223023');
        bodyGrad.addColorStop(0.5, '#121c13');
        bodyGrad.addColorStop(1, '#080c09');
        ctx.fillStyle = bodyGrad;
        ctx.globalAlpha = Math.min(1, (progress - 0.7) * 3.3);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // X-Ray Tech Glow Lines
      if (progress > 0.52 && progress < 0.75) {
        ctx.strokeStyle = 'rgba(0, 255, 170, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);

        // Engine Bay Skeleton
        ctx.strokeRect(wheelX1 - 60, wheelY - 50, 100, 45);
        // Cabin Cage
        ctx.strokeRect(width / 2 - 30, wheelY - 100, 110, 80);
        ctx.setLineDash([]);
      }

      // Headlights Laser Beam (BMW Laserlight Signature)
      if (progress > 0.4) {
        const lightLength = 220 * Math.min(1, (progress - 0.4) * 2.5);
        const headGrad = ctx.createLinearGradient(wheelX1 - 110, wheelY - 20, wheelX1 - 110 - lightLength, wheelY);
        headGrad.addColorStop(0, 'rgba(255, 230, 120, 0.9)'); // Gold Laserlight CS style
        headGrad.addColorStop(1, 'rgba(255, 230, 120, 0)');

        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.moveTo(wheelX1 - 110, wheelY - 25);
        ctx.lineTo(wheelX1 - 110 - lightLength, wheelY - 60);
        ctx.lineTo(wheelX1 - 110 - lightLength, wheelY + 40);
        ctx.lineTo(wheelX1 - 110, wheelY - 10);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }

  }, [progress, framesLoaded, images]);

  // Find current text overlay
  const activeText = CINE_TEXTS.find(t => progress >= t.range[0] && progress <= t.range[1]);

  return (
    <section
      id="cinematic-experience"
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#070b08] text-white"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between items-center p-6 md:p-12">

        {/* Background Visual Canvas */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-contain max-w-7xl max-h-[85vh] drop-shadow-[0_0_50px_rgba(34,48,35,0.4)]"
          />
        </div>

        {/* Top Header Tagline & Progress Indicator */}
        <div className="relative z-10 w-full max-w-7xl flex items-center justify-between pointer-events-none">
          <div className="flex items-center space-x-3 bg-black/60 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#88b08a]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              BMW M5 CS TRANSFORM SEQUENCE
            </span>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-4 bg-black/60 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md">
            <Layers className="w-4 h-4 text-[#88b08a]" />
            <div className="w-28 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#223023] dark:bg-[#769d78] transition-all duration-150 ease-out"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="text-xs font-mono text-white/80 w-10 text-right">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>

        {/* Dynamic Cinematic Text Overlays */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-auto pointer-events-none min-h-[160px] flex items-center justify-center text-center">
          {activeText ? (
            <div className="space-y-4 animate-fade-in transition-all duration-500 transform translate-y-0">
              <span className="inline-block px-3 py-1 rounded bg-[#223023]/80 border border-white/20 text-[10px] font-mono tracking-[0.3em] text-emerald-300 uppercase">
                {activeText.stageName}
              </span>
              <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                {activeText.title}
              </h2>
              <p className="font-sans text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                {activeText.subtitle}
              </p>
            </div>
          ) : (
            <div className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em] opacity-40">
              [ Scroll to drive transformation sequence ]
            </div>
          )}
        </div>

        {/* Bottom Hint Banner */}
        <div className="relative z-10 w-full max-w-7xl flex justify-between items-end text-xs text-slate-400 font-mono pointer-events-none">
          <div className="hidden sm:block">
            FRAME SEQUENCE READY: <span className="text-emerald-400">/frames/frame001.png</span>
          </div>
          <div className="animate-pulse text-[#88b08a] ml-auto">
            SCROLL CONTROL ➔
          </div>
        </div>

      </div>
    </section>
  );
}
