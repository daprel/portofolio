import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';

// Returns a handler that opens a nav link: a route (`link.path`) or a section on the home page.
export function useSectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (link) => {
    if (link.path) {
      navigate(link.path);
      window.scrollTo(0, 0);
      return;
    }

    // Coming from another route: wait for the home page to mount before scrolling.
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(link.id), 100);
      return;
    }

    // Short delay lets an open mobile menu collapse first.
    setTimeout(() => scrollToSection(link.id), 50);
  };
}
