import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import BrandLogo from '../ui/BrandLogo';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollSection, setScrollSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const openLink = useSectionNavigation();

  // On a separate route (a nav item with `path`) that item is active; on home it follows the scroll.
  const routeLink = navLinks.find((link) => link.path === location.pathname);
  const activeSection = routeLink ? routeLink.id : scrollSection;

  useEffect(() => {
    if (routeLink) return;

    const sectionLinks = navLinks.filter((link) => !link.path);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 120;

      for (const { id } of sectionLinks) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setScrollSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [routeLink]);

  const handleClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    openLink(link);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 pt-3 pb-2">
      <div className={`mx-auto max-w-6xl rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border border-slate-200"
          : "bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-xs"
      }`}>
        {/* Logo (white-background version) */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={(e) => handleClick(e, navLinks[0])}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <BrandLogo variant="horizontal" className="h-8 md:h-9 w-auto" />
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 font-semibold text-xs sm:text-sm">
          {navLinks.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-100/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{item.name}</span>
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile Burger Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 p-2 focus:outline-none hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden mt-2 mx-auto max-w-6xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl overflow-hidden p-3"
          >
            <nav className="flex flex-col gap-1 font-semibold text-sm">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item)}
                    className={`px-4 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-primary font-bold'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
