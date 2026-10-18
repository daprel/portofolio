import { ExternalLink } from "lucide-react";

// Link to https://doi.org/<doi>; renders nothing when the paper has no DOI.
export default function DoiLink({ doi, className = "" }) {
  if (!doi) return null;

  return (
    <a
      href={`https://doi.org/${doi}`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 text-[11px] font-mono text-primary-light hover:text-primary hover:underline break-all ${className}`}
    >
      <ExternalLink className="w-3 h-3 flex-shrink-0" />
      <span>DOI: {doi}</span>
    </a>
  );
}
