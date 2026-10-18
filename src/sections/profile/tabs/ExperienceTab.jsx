import { Calendar, MapPin } from "lucide-react";
import { experiences } from "../../../data/experience";

export default function ExperienceTab() {
  return (
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3">
            <div>
              <div className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded mb-1 border border-slate-200">
                {exp.badge}
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {exp.role}
              </h4>
              <div className="flex flex-wrap items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold mt-0.5">
                <span className="text-primary">{exp.company}</span>
                <span>•</span>
                <span className="text-slate-500 text-xs font-normal">
                  {exp.division}
                </span>
              </div>
            </div>

            <div className="text-right flex flex-col sm:items-end text-xs text-slate-500 space-y-0.5">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {exp.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light mt-1.5 flex-shrink-0"></span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
