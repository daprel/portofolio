import { motion } from 'framer-motion';

export default function ToolCard({ tool, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
            <img
              src={tool.logoSrc}
              alt={tool.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200">
            {tool.tag}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors mb-0.5">
          {tool.name}
        </h3>

        <div className="text-[11px] font-semibold text-primary-light mb-2">
          {tool.category}
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {tool.desc}
        </p>
      </div>
    </motion.div>
  );
}
