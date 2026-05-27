interface TrackToggleProps {
  activeTrack: 'business' | 'tech';
  onTrackChange: (track: 'business' | 'tech') => void;
}

export default function TrackToggle({ activeTrack, onTrackChange }: TrackToggleProps) {

  return (
    <div
      className="hidden xl:flex flex-row items-center absolute box-border rounded-full select-none z-[60] track-toggle-desktop"
      style={{
        padding: '6px',
        gap: '13px',
        width: 'fit-content',
        height: '54px',
        left: '544px',
        top: '104px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <button
        onClick={() => onTrackChange('business')}
        className="flex flex-col justify-center items-center transition-all duration-200 border-none cursor-pointer rounded-full outline-none"
        style={{
          padding: '10px 24px',
          width: '150px',
          height: '40px',
          background: activeTrack === 'business' ? '#FC6401' : 'transparent',
        }}
      >
        <span
          className="flex items-center justify-center text-center font-medium whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            lineHeight: '20px',
            color: activeTrack === 'business' ? '#F5F7FF' : '#A0A8B8',
          }}
        >
          Business Track
        </span>
      </button>

      <button
        onClick={() => onTrackChange('tech')}
        className="flex flex-col justify-center items-center transition-all duration-200 border-none cursor-pointer rounded-full outline-none"
        style={{
          padding: '10px 24px',
          width: '122px',
          height: '40px',
          background: activeTrack === 'tech' ? '#FC6401' : 'transparent',
        }}
      >
        <span
          className="flex items-center justify-center text-center font-medium whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            lineHeight: '20px',
            color: activeTrack === 'tech' ? '#F5F7FF' : '#A0A8B8',
          }}
        >
          Tech Track
        </span>
      </button>
    </div>
  );
}
