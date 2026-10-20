import { Award } from "lucide-react";
import { personalInfo } from "../../../data/profile";
import { intellectualProperty } from "../../../data/credentials";

export default function EducationTab() {
  const { education } = personalInfo;

  return (
    <div className="space-y-5">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 p-2.5 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
            <img src={education.logo} alt={education.institution} className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
              {education.period}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              {education.degree}
            </h4>
            <div className="text-sm font-semibold text-slate-700">
              {education.institution} • GPA:{" "}
              <span className="text-primary font-bold">
                {personalInfo.gpa}
              </span>
            </div>

            <div className="mt-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed text-slate-700">
              <strong className="text-slate-900 block mb-0.5">
                Undergraduate Thesis (WebGIS & EPR Policy):
              </strong>
              {education.thesis}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
        <h4 className="text-base font-bold text-slate-900 mb-3.5 flex items-center gap-2">
          <Award className="w-5 h-5 text-accent" />
          <span>Registered Patents & Intellectual Property Rights (DGIP Indonesia)</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {intellectualProperty.map((ipr) => (
            <div
              key={ipr.number}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition"
            >
              <div className="text-[10px] font-bold uppercase text-accent mb-1">
                {ipr.type}
              </div>
              <h5 className="text-xs font-bold text-slate-900 leading-snug mb-1.5">
                {ipr.title}
              </h5>
              <div className="text-[11px] font-mono text-slate-600">
                {ipr.number}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Filing Date: {ipr.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
