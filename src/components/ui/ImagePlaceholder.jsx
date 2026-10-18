import { ImageOff } from 'lucide-react';
import BrandLogo from './BrandLogo';

// Stand-in for project media that is not available yet (e.g. ongoing projects). Fills its parent.
export default function ImagePlaceholder({ label = 'TBA', note = 'Documentation coming soon' }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-primary/5 via-slate-50 to-primary/10 overflow-hidden">
      <BrandLogo
        variant="icon"
        decorative
        className="absolute -right-6 -bottom-8 h-40 w-auto opacity-[0.07] pointer-events-none"
      />
      <ImageOff className="w-5 h-5 text-primary-light/70" />
      <span className="text-lg font-black tracking-[0.2em] text-primary/70">{label}</span>
      <span className="text-[11px] font-medium text-slate-500">{note}</span>
    </div>
  );
}
