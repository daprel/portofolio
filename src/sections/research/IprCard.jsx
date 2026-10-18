import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function IprCard({ ipr }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition"
    >
      <div className="p-2 bg-slate-100 rounded-lg text-primary w-max mb-2.5 border border-slate-200">
        <Award className="w-4 h-4" />
      </div>
      <span className="text-[10px] font-bold uppercase text-slate-500">{ipr.type}</span>
      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-1 mb-2 leading-snug">{ipr.title}</h4>
      <div className="text-xs font-mono text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200 mb-1.5">
        No: {ipr.number}
      </div>
      <div className="text-[10px] text-slate-400">Filing Date: {ipr.date}</div>
    </motion.article>
  );
}
