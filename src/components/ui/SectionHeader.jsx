import { motion } from 'framer-motion';

// Centered section heading: eyebrow pill, title and an optional description.
// Extra content (e.g. filter pills) can be passed as children.
export default function SectionHeader({ icon: Icon, eyebrow, title, description, as = 'h2', className = 'mb-12', children }) {
  const Title = as === 'h1' ? motion.h1 : motion.h2;

  return (
    <header className={`${className} text-center`}>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
        {Icon && <Icon className="w-3.5 h-3.5 text-primary-light" />}
        <span>{eyebrow}</span>
      </div>

      <Title
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary"
      >
        {title}
      </Title>

      {description && (
        <p className="mt-3.5 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}

      {children}
    </header>
  );
}
