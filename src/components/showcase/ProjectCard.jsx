import { motion } from "framer-motion";
import { Maximize2, ArrowRight } from "lucide-react";
import Tag from "../ui/Tag";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import ProjectLocation from "./ProjectLocation";
import ActivityBadge from "./ActivityBadge";
import CategoryBadge from "./CategoryBadge";

const VISIBLE_TAGS = 3;

export default function ProjectCard({ project, onOpen, onZoom }) {
  const coverImage = project.images[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col group"
    >
      {/* Media header */}
      <div className={`relative h-48 w-full overflow-hidden ${coverImage ? "bg-slate-900" : ""}`}>
        {coverImage ? (
          <>
            <img
              src={coverImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <button
              onClick={() => onZoom(coverImage)}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-colors cursor-pointer"
              title="Zoom Image"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <ImagePlaceholder />
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-semibold px-3 py-1 shadow-2xs truncate max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
            {project.badge}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <ActivityBadge activity={project.activity} />
            <CategoryBadge category={project.category} />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          <ProjectLocation location={project.location} className="mb-2.5" />

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {project.impact && (
            <p className="mb-4 text-xs text-slate-700 leading-relaxed line-clamp-3">
              <span className="font-bold text-accent">Outcome: </span>
              {project.impact}
            </p>
          )}
        </div>

        {/* Footer: tags + action */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <button
            onClick={onOpen}
            className="w-full py-2 px-3.5 rounded-xl text-xs font-bold border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>View Case Study & Docs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
