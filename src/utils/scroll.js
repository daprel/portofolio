// Height of the fixed navbar, so sections are not hidden underneath it.
const NAVBAR_OFFSET = 80;

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  window.scrollTo({ top: element.offsetTop - NAVBAR_OFFSET, behavior: 'smooth' });
}
