// Decorative backdrop behind the hero portrait, drawn with CSS/SVG in navy tones with one green accent square.
// Sits behind its sibling portrait (which needs `relative z-10`).
export default function PortraitBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
      {/* Arch panel */}
      <div className="absolute inset-x-[8%] top-[12%] bottom-0 rounded-t-full bg-gradient-to-b from-primary/15 via-primary/5 to-slate-100/40 overflow-hidden">
        {/* Fine diagonal hatching inside the arch */}
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(135deg,transparent_0_10px,rgba(30,58,95,0.10)_10px_11px)]" />
      </div>

      {/* Dot grid, top right, fading out toward the portrait */}
      <div className="absolute -right-[4%] top-[14%] w-[42%] h-[38%] bg-[radial-gradient(circle,rgba(30,58,95,0.40)_1.4px,transparent_1.6px)] bg-[length:14px_14px] [mask-image:radial-gradient(ellipse_at_top_right,black_35%,transparent_75%)]" />

      {/* Concentric rings, left */}
      <svg viewBox="0 0 120 120" className="absolute -left-[6%] top-[38%] w-[34%] h-auto text-primary/30">
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Accent squares echoing the hero card */}
      <span className="absolute left-[6%] top-[16%] w-3.5 h-3.5 rounded-[3px] bg-primary" />
      <span className="absolute left-[6%] top-[16%] translate-x-5 w-3.5 h-3.5 rounded-[3px] bg-accent" />
    </div>
  );
}
