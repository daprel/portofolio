import { motion } from "framer-motion";
import { ZoomIn, CheckCircle2 } from "lucide-react";
import Tag from "../ui/Tag";
import BrandLogo from "../ui/BrandLogo";
import ProjectLocation from "./ProjectLocation";

// Large highlight layout used at the top of every showcase section.
// With `images` it shows a gallery beside the details; without, it becomes a full-width text card.
// Every content prop is optional, so projects, papers and IPR filings can all use it.
export default function FeaturedShowcase({
  images = [],
  onZoom,
  pills,
  title,
  location,
  badge,
  summary,
  problem,
  solution,
  impact,
  deliverables = [],
  tags = [],
  footer,
}) {
  const hasMedia = images.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden bg-white p-6 md:p-7 rounded-2xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors ${
        hasMedia ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : ""
      }`}
    >
      {hasMedia ? (
        <MediaGallery images={images} title={title} onZoom={onZoom} />
      ) : (
        <BrandLogo
          variant="icon"
          decorative
          className="absolute -right-8 -bottom-10 h-44 w-auto opacity-[0.05] pointer-events-none"
        />
      )}

      <div className={`relative flex flex-col justify-between h-full ${hasMedia ? "lg:col-span-5" : ""}`}>
        <div>
          {pills && <div className="flex flex-wrap items-center gap-1.5 mb-2">{pills}</div>}

          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-1.5 leading-snug">
            {title}
          </h3>

          <ProjectLocation location={location} className="mb-2.5" />

          {badge && (
            <div className="inline-flex items-center gap-1.5 mb-3 text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime flex-shrink-0"></span>
              <span>{badge}</span>
            </div>
          )}

          {summary && (
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {summary}
            </p>
          )}

          {(problem || solution) && (
            <div className={`mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs gap-3 ${hasMedia ? "space-y-2" : "grid grid-cols-1 md:grid-cols-2"}`}>
              {problem && (
                <div>
                  <span className="font-bold text-amber-800 uppercase tracking-wider block mb-0.5">Problem:</span>
                  <p className="text-slate-700 leading-relaxed">{problem}</p>
                </div>
              )}
              {solution && (
                <div>
                  <span className="font-bold text-primary uppercase tracking-wider block mb-0.5">Solution:</span>
                  <p className="text-slate-700 leading-relaxed">{solution}</p>
                </div>
              )}
            </div>
          )}

          {impact && (
            <p className="mb-4 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
              <span className="font-bold text-primary">Outcome: </span>
              {impact}
            </p>
          )}

          {deliverables.length > 0 && (
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Deliverables:
              </span>
              <ul className="space-y-1 text-xs text-slate-700">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-light flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {footer}
        </div>

        {tags.length > 0 && (
          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function MediaGallery({ images, title, onZoom }) {
  const [cover] = images;

  return (
    <div className="lg:col-span-7 flex flex-col gap-3">
      <div className="rounded-xl overflow-hidden shadow-2xs border border-slate-200 bg-slate-900 relative aspect-video group">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <button
          onClick={() => onZoom(cover)}
          className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition cursor-pointer"
          title="Enlarge"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((img) => (
            <div
              key={img}
              onClick={() => onZoom(img)}
              className="rounded-lg overflow-hidden border border-slate-200 h-20 bg-slate-900 cursor-pointer relative group"
            >
              <img
                src={img}
                alt="Thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <ZoomIn className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
