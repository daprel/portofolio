import { activityTypes } from "../../data/activityTypes";

// Solid navy pill naming the kind of activity (Internship, Competition, ...).
export default function ActivityBadge({ activity, className = "" }) {
  const label = activityTypes[activity];
  if (!label) return null;

  return (
    <span className={`inline-flex items-center rounded-full bg-primary text-white border border-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 ${className}`}>
      {label}
    </span>
  );
}
