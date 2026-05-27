export default function TrackBadge() {
  return (
    <div
      className="hidden lg:flex flex-row items-start box-border rounded-[25px] select-none pointer-events-none z-[60] whitespace-nowrap"
      style={{
        padding: '4px 12px',
        width: 'fit-content',
        height: '25px',
        margin: '16px auto 0',
        background: 'rgba(252, 100, 1, 0.05)',
        border: '1px solid rgba(252, 100, 1, 0.25)',
      }}
    >
      <span
        className="flex items-center text-center font-normal tracking-[0.5px] uppercase font-['Inter']"
        style={{
          fontSize: '10px',
          lineHeight: '15px',
          color: '#FC6401',
        }}
      >
        · Ultimate · 16 Weeks · Business Track
      </span>
    </div>
  );
}
