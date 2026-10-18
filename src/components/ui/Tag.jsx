// Rounded pill used for project tags/methodologies across cards, modals and showcases.
const SIZES = {
  sm: 'text-[10.5px] px-2.5 py-0.5',
  md: 'text-xs px-3 py-1',
};

export default function Tag({ children, size = 'sm' }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-primary/5 text-primary font-semibold border border-primary/15 ${SIZES[size]}`}>
      {children}
    </span>
  );
}
