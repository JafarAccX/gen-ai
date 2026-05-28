import React from 'react';
import { SiOpenai, SiGoogle, SiMeta, SiHuggingface, SiGithub, SiDatadog, SiZapier, SiMake, SiNotion } from 'react-icons/si';
import { FaRobot, FaMicrophone, FaCode, FaChartLine, FaMagic, FaChartBar, FaCogs, FaCubes } from 'react-icons/fa';

// Map out the 6 categories and curate the state-of-the-art tools for each
const toolCategories = [
  {
    title: 'Foundation Models',
    tools: [
      { name: 'GPT-4o', icon: SiOpenai },
      { name: 'Gemini 1.5', icon: SiGoogle },
      { name: 'Llama 3', icon: SiMeta },
      { name: 'Claude 3.5', icon: FaRobot },
      { name: 'Mistral', icon: FaMagic },
    ]
  },
  {
    title: 'Agent Frameworks',
    tools: [
      { name: 'LangChain', icon: FaCubes },
      { name: 'AutoGen', icon: FaCogs },
      { name: 'CrewAI', icon: FaRobot },
      { name: 'HuggingFace', icon: SiHuggingface },
      { name: 'LlamaIndex', icon: FaCode },
    ]
  },
  {
    title: 'Voice AI',
    tools: [
      { name: 'ElevenLabs', icon: FaMicrophone },
      { name: 'Whisper', icon: SiOpenai },
      { name: 'PlayHT', icon: FaMagic },
      { name: 'AssemblyAI', icon: FaCode },
      { name: 'Vapi', icon: FaRobot },
    ]
  },
  {
    title: 'Vibe Coding',
    tools: [
      { name: 'Cursor', icon: FaCode },
      { name: 'Copilot', icon: SiGithub },
      { name: 'Devin', icon: FaRobot },
      { name: 'Codeium', icon: FaCogs },
      { name: 'Replit', icon: FaCubes },
    ]
  },
  {
    title: 'Eval & Observability',
    tools: [
      { name: 'LangSmith', icon: FaChartLine },
      { name: 'W&B', icon: FaChartBar },
      { name: 'Datadog', icon: SiDatadog },
      { name: 'Prometheus', icon: FaChartLine },
      { name: 'Arize AI', icon: FaMagic },
    ]
  },
  {
    title: 'Automation & No-Code',
    tools: [
      { name: 'Zapier', icon: SiZapier },
      { name: 'Make', icon: SiMake },
      { name: 'Notion AI', icon: SiNotion },
      { name: 'Bubble', icon: FaCubes },
      { name: 'Flowise', icon: FaCogs },
    ]
  }
];

function ToolMarqueeTrack({ 
  category, 
  rowIndex 
}: { 
  category: typeof toolCategories[0]; 
  rowIndex: number;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragState = React.useRef({
    startX: 0,
    currentTranslateX: 0,
    lastTranslateX: 0,
  });

  const speed = rowIndex % 2 === 0 ? 40 : 45;

  const getCurrentTranslateX = React.useCallback(() => {
    if (!trackRef.current) return 0;
    const style = window.getComputedStyle(trackRef.current);
    const matrix = style.transform;
    if (matrix === 'none' || !matrix) return 0;
    const values = matrix.match(/matrix.*\((.+)\)/);
    if (values && values[1]) {
      const parts = values[1].split(', ');
      return parseFloat(parts[4]) || 0;
    }
    return 0;
  }, []);

  const pauseAnimation = React.useCallback(() => {
    if (!trackRef.current) return;
    const currentX = getCurrentTranslateX();
    dragState.current.currentTranslateX = currentX;
    dragState.current.lastTranslateX = currentX;
    trackRef.current.style.animationPlayState = 'paused';
    trackRef.current.style.transform = `translateX(${currentX}px)`;
    trackRef.current.style.animation = 'none';
  }, [getCurrentTranslateX]);

  const resumeAnimation = React.useCallback(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const totalWidth = el.scrollWidth / 2;
    const currentX = dragState.current.currentTranslateX;
    let normalizedX = currentX % totalWidth;
    if (normalizedX > 0) normalizedX -= totalWidth;
    const progress = Math.abs(normalizedX) / totalWidth;

    el.style.transform = `translateX(${normalizedX}px)`;
    void el.offsetHeight;
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = `scroll-left ${speed}s linear infinite`;
    el.style.animationDelay = `-${progress * speed}s`;
    el.style.animationPlayState = 'running';
    el.style.transform = '';
  }, [speed]);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.touches[0].clientX;
    pauseAnimation();
  }, [pauseAnimation]);

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.touches[0].clientX - dragState.current.startX;
    const newX = dragState.current.lastTranslateX + deltaX;
    dragState.current.currentTranslateX = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [isDragging]);

  const handleTouchEnd = React.useCallback(() => {
    setIsDragging(false);
    resumeAnimation();
  }, [resumeAnimation]);

  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.clientX;
    pauseAnimation();
  }, [pauseAnimation]);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const deltaX = e.clientX - dragState.current.startX;
    const newX = dragState.current.lastTranslateX + deltaX;
    dragState.current.currentTranslateX = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [isDragging]);

  const handleMouseUpOrLeave = React.useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      resumeAnimation();
    }
  }, [isDragging, resumeAnimation]);

  return (
    <div
      className="tool-stack-marquee-container"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px 0px',
        width: '970px',
        height: '108px',
        background: 'rgba(0, 0, 0, 0.01)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: 'inset 80px 0px 40px -20px #0A0A0A, inset -80px 0px 40px -20px #0A0A0A',
        borderRadius: '4px',
        flex: 'none',
        order: 1,
        flexGrow: 1,
        overflow: 'hidden',
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div
        ref={trackRef}
        className="animate-scroll-left"
        style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: 'max-content',
          alignItems: 'center',
          animationDuration: `${speed}s`,
          animationDirection: 'normal',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        {[...category.tools, ...category.tools].map((tool, index) => (
          <div
            key={`${rowIndex}-${index}`}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 24px',
              width: '194px',
              height: '68px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              flex: 'none',
              marginRight: '20px',
              gap: '12px',
              transition: 'all 0.3s ease',
            }}
            className="hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1 cursor-pointer"
          >
            <tool.icon size={22} color="rgba(255, 255, 255, 0.8)" />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16.7px',
                lineHeight: '28px',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.36px',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolStackGrid() {
  return (
    <div
      className="responsive-section tool-stack-grid-section"
      style={{
        position: 'absolute',
        width: '1301px',
        left: 'calc(50% - 1301px/2 + 0.5px)',
        top: '7640px', // Placed dynamically below ToolStackHeader
        display: 'flex',
        flexDirection: 'column',
        gap: '24px', // Gap between rows
        zIndex: 10,
      }}
    >
      {toolCategories.map((category, rowIndex) => (
        <div
          key={rowIndex}
          className="tool-stack-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            width: '1301px',
            height: '111px',
          }}
        >
          {/* Left Side: Category Title */}
          <div
            className="tool-stack-category-left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: '21px',
              width: '331px',
              height: '111px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <h2
              className="tool-stack-category-title"
              style={{
                width: '331px',
                height: 'auto',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                letterSpacing: '-0.96px',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              {category.title}
            </h2>
          </div>

          {/* Right Side: Animated Marquee Track of Tools */}
          <ToolMarqueeTrack category={category} rowIndex={rowIndex} />
        </div>
      ))}
    </div>
  );
}
