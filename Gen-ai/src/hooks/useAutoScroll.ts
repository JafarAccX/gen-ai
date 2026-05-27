import { useEffect, useRef, useState } from 'react';

export function useAutoScroll(speed = 40) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      if (!isInteracting && scrollRef.current) {
        const delta = (time - lastTime) / 1000;
        const el = scrollRef.current;
        const maxScroll = el.scrollWidth - el.clientWidth;

        el.scrollLeft += speed * delta;

        // When reaching end, instantly jump to start and keep going
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = 0;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting, speed]);

  const handlers = {
    onTouchStart: () => setIsInteracting(true),
    onTouchEnd: () => setIsInteracting(false),
    onMouseDown: () => setIsInteracting(true),
    onMouseUp: () => setIsInteracting(false),
    onMouseLeave: () => setIsInteracting(false),
  };

  return { scrollRef, handlers };
}
