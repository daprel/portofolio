import { ChevronRight } from "lucide-react";
import { skillCategories } from "../../../data/skills";

export default function SkillsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {skillCategories.map((cat) => (
        <div
          key={cat.category}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs"
        >
          <h4 className="text-sm font-bold text-primary mb-3 pb-2 border-b border-slate-100">
            {cat.category}
          </h4>
          <ul className="space-y-2">
            {cat.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-slate-700"
              >
                <ChevronRight className="w-3.5 h-3.5 text-primary-light flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
