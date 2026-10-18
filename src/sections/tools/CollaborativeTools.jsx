import { Users } from 'lucide-react';
import { collaborativeTools } from '../../data/tools';

export default function CollaborativeTools() {
  return (
    <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="max-w-sm">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            <Users className="w-3.5 h-3.5 text-primary-light" />
            <span>Integrated Productivity</span>
          </div>
          <h4 className="text-base font-bold text-slate-900">
            Collaborative & Enterprise Tools
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Proficient in modern corporate communication and cross-functional operations:
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {collaborativeTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white px-3 py-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2.5 shadow-2xs hover:border-slate-300 hover:-translate-y-0.5 transition-all"
            >
              <img
                src={tool.logoSrc}
                alt=""
                className="w-9 h-9 object-contain"
                loading="lazy"
              />
              <span className="text-xs font-bold text-slate-900 text-center leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
