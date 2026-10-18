// Small left-aligned heading with a rule, separating highlights from the card grid.
export default function SubsectionHeading({ children, className = "mt-12 mb-6" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 whitespace-nowrap">
        {children}
      </h3>
      <span className="h-px flex-1 bg-slate-200"></span>
    </div>
  );
}
