import React, { useRef, useState, useCallback } from 'react';

interface MobileMarqueeProps {
  children: React.ReactNode;
  /** Animation duration in seconds (default 30) */
  speed?: number;
  /** Gap between items in px (default 16) */
  gap?: number;
  /** Additional className for the outer wrapper */
  className?: string;
}

/**
 * MobileMarquee — continuous horizontal scroll with touch-drag support.
 * 
 * - Renders children twice for seamless infinite loop
 * - CSS animation scrolls left continuously
 * - Touch/mouse drag pauses animation, translates manually
 * - On release, resumes from current position
 * - Edge fade masks via CSS mask-image
 * - Only active on screens < 768px (controlled by parent via CSS)
 */
export default function MobileMarquee({
  children,
  speed = 30,
  gap = 16,
  className = '',
}: MobileMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    currentTranslateX: 0,
    lastTranslateX: 0,
  });

  // Get current translateX from computed style
  const getCurrentTranslateX = useCallback(() => {
    if (!trackRef.current) return 0;
    const style = window.getComputedStyle(trackRef.current);
    const matrix = style.transform;
    if (matrix === 'none' || !matrix) return 0;
    // matrix(a, b, c, d, tx, ty) — tx is the translateX
    const values = matrix.match(/matrix.*\((.+)\)/);
    if (values && values[1]) {
      const parts = values[1].split(', ');
      return parseFloat(parts[4]) || 0;
    }
    return 0;
  }, []);

  // Pause animation and capture current position
  const pauseAnimation = useCallback(() => {
    if (!trackRef.current) return;
    const currentX = getCurrentTranslateX();
    dragState.current.currentTranslateX = currentX;
    dragState.current.lastTranslateX = currentX;
    trackRef.current.style.animationPlayState = 'paused';
    trackRef.current.style.transform = `translateX(${currentX}px)`;
    trackRef.current.style.animation = 'none';
  }, [getCurrentTranslateX]);

  // Resume animation from current position
  const resumeAnimation = useCallback(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const totalWidth = el.scrollWidth / 2; // Half because content is duplicated
    const currentX = dragState.current.currentTranslateX;
    
    // Normalize position — wrap around if dragged past boundaries
    let normalizedX = currentX % totalWidth;
    if (normalizedX > 0) normalizedX -= totalWidth;
    
    // Calculate remaining percentage of animation
    const progress = Math.abs(normalizedX) / totalWidth;

    // Set starting position and restart animation
    el.style.transform = `translateX(${normalizedX}px)`;
    
    // Force reflow
    void el.offsetHeight;
    
    // Apply animation from current position
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = `mobile-marquee-scroll ${speed}s linear infinite`;
    el.style.animationDelay = `-${progress * speed}s`;
    el.style.animationPlayState = 'running';
    // Clear the inline transform so animation takes over
    el.style.transform = '';
  }, [speed]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.touches[0].clientX;
    pauseAnimation();
  }, [pauseAnimation]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.touches[0].clientX - dragState.current.startX;
    const newX = dragState.current.lastTranslateX + deltaX;
    dragState.current.currentTranslateX = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    resumeAnimation();
  }, [resumeAnimation]);

  // Mouse handlers (for desktop testing)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.clientX;
    pauseAnimation();
    e.preventDefault();
  }, [pauseAnimation]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.clientX - dragState.current.startX;
    const newX = dragState.current.lastTranslateX + deltaX;
    dragState.current.currentTranslateX = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    resumeAnimation();
  }, [isDragging, resumeAnimation]);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    resumeAnimation();
  }, [isDragging, resumeAnimation]);

  return (
    <div
      className={`mobile-marquee-wrapper ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="mobile-marquee-track"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Original content */}
        <div className="mobile-marquee-set" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        {/* Duplicated content for seamless loop */}
        <div className="mobile-marquee-set" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
