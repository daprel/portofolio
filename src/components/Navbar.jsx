import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const basePath = import.meta.env.BASE_URL;

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Profile', id: 'profile' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <img src={`${basePath}img/logo_daprel_transparent.png`} alt="Logo Daprel" className="h-12 md:h-16 w-auto object-cover" />
          <div className="text-xl md:text-2xl font-bold text-white tracking-wide">Daprel Portfolio</div>
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-2 text-white font-bold">
          {links.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id ? 'bg-accent border border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'border border-transparent hover:bg-accent hover:border-white/50'
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Burger Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2 gap-2 text-white font-bold">
              {links.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id ? 'bg-accent border border-white/50' : 'hover:bg-accent'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
