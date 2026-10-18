// Green pill naming the project's field; sits next to ActivityBadge.
export default function CategoryBadge({ category, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-primary/5 text-primary border border-primary/15 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 ${className}`}>
      {category}
    </span>
  );
}
