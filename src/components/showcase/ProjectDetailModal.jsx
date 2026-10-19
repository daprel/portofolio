import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Maximize2, X } from "lucide-react";
import Tag from "../ui/Tag";
import BrandLogo from "../ui/BrandLogo";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import ProjectLocation from "./ProjectLocation";
import ActivityBadge from "./ActivityBadge";
import CategoryBadge from "./CategoryBadge";
import DoiLink from "./DoiLink";

// Case study modal. Renders nothing while `project` is null.
export default function ProjectDetailModal({ project, onClose, onZoom }) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <ActivityBadge activity={project.activity} />
                  <CategoryBadge category={project.category} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {project.title}
                </h3>
                <div className="text-xs text-slate-500 font-semibold mt-1">
                  {project.badge}
                </div>
                <ProjectLocation location={project.location} className="mt-1.5" />
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Documentation Gallery
                </h4>
                {project.images.length === 0 && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 h-44">
                    <ImagePlaceholder />
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.images.map((img) => (
                    <div
                      key={img}
                      className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-44 cursor-pointer relative group"
                      onClick={() => onZoom(img)}
                    >
                      <img
                        src={img}
                        alt="Documentation"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                        <Maximize2 className="w-4 h-4" /> Click to enlarge
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>Challenge & Problem</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                )}

                {project.solution && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                )}
              </div>
              )}

              {project.impact && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Outcome & Formal Recognition
                </h4>
                <p className="text-slate-800 text-sm font-medium">
                  {project.impact}
                </p>
                <DoiLink doi={project.doi} className="mt-2" />
              </div>
              )}

              {project.deliverables.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables
                </h4>
                <ul className="space-y-1.5">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-light flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Methodologies & Tool Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} size="md">{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                <BrandLogo variant="icon" decorative className="h-4 w-auto" />
                <span>Daprel Portfolio · Case Study</span>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 transition cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
