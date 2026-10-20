import { keyStats } from '../../data/profile';

export default function KeyStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7 pt-6 border-t border-slate-200">
      {keyStats.map((stat) => (
        <div
          key={stat.label}
          className="bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
        >
          <div className="text-xl sm:text-2xl font-black text-accent">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
            {stat.label}
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-500">
            {stat.sub}
          </div>
        </div>
      ))}
    </div>
  );
}
