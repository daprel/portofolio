import { MapPin } from "lucide-react";

// Location line with pin icon; renders nothing when the project has no location.
export default function ProjectLocation({ location, className = "" }) {
  if (!location) return null;

  return (
    <div className={`flex items-center gap-1.5 text-xs font-medium text-slate-500 ${className}`}>
      <MapPin className="w-3.5 h-3.5 text-accent-light flex-shrink-0" />
      <span>{location}</span>
    </div>
  );
}
