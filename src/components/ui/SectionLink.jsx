import { scrollToSection } from '../../utils/scroll';

// Anchor to a section on the current page that scrolls with the navbar offset applied.
export default function SectionLink({ to, children, ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection(to);
  };

  return (
    <a href={`#${to}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
