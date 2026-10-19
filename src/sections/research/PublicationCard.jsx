import { motion } from "framer-motion";
import DoiLink from "../../components/showcase/DoiLink";

export default function PublicationCard({ publication }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center rounded-full bg-primary/5 text-primary border border-primary/15 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5">
            {publication.type}
          </span>
          <span className="text-xs text-slate-400 font-mono">{publication.year}</span>
        </div>
        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
          {publication.title}
        </h4>
        <p className="text-xs text-slate-500 italic mb-3">{publication.conference}</p>
        <DoiLink doi={publication.doi} className="mb-3" />
      </div>

      <div className="pt-2.5 border-t border-slate-100 text-xs font-semibold text-primary">
        Index: {publication.indexed}
      </div>
    </motion.article>
  );
}
