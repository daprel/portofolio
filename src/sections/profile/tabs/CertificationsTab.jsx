import { ShieldCheck } from "lucide-react";
import { certifications } from "../../../data/credentials";

export default function CertificationsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start gap-4 hover:border-slate-300 transition-colors shadow-2xs"
        >
          <div className="w-14 h-14 p-2 bg-white rounded-xl text-primary border border-slate-200 flex items-center justify-center flex-shrink-0">
            {cert.logo ? (
              <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" loading="lazy" />
            ) : (
              <ShieldCheck className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {cert.category}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1.5 leading-snug">
              {cert.name}
            </h4>
            <div className="text-xs text-slate-500 mt-0.5">
              Issuer: {cert.issuer}
            </div>
            <div className="inline-block mt-2.5 text-xs font-mono font-bold bg-slate-100 text-primary px-2.5 py-0.5 rounded-md border border-slate-200">
              {cert.credentialId}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
