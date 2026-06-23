import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const basePath = import.meta.env.BASE_URL;
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Profile', id: 'profile' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
    { name: 'Highlights', id: 'highlights' },
  ];

  useEffect(() => {
    if (location.pathname === '/highlights') {
      setActiveSection('highlights');
      return;
    }

    const handleScroll = () => {
      const sections = links.filter(l => l.id !== 'highlights').map(link => document.getElementById(link.id));
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
  }, [location.pathname]);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (id === 'highlights') {
      navigate('/highlights');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

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
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 transition-all duration-300">
      <div className="w-full max-w-6xl bg-primary/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-full px-6 py-2 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-4"
        >
          <img src={`${basePath}img/logo_daprel_transparent.png`} alt="Logo Daprel" className="h-10 md:h-12 w-auto object-cover drop-shadow-md" />
          <div className="text-lg md:text-xl font-extrabold text-white tracking-wider drop-shadow-md">Daprel Portfolio</div>
        </motion.div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-1 lg:gap-2 text-white font-bold">
          {links.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:text-white ${
                activeSection === item.id ? 'text-white' : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/20 shadow-inner rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Burger Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="md:hidden absolute top-[110%] left-4 right-4 bg-primary/60 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden z-40"
          >
            <nav className="flex flex-col p-3 gap-1 text-white font-bold">
              {links.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block px-5 py-3 rounded-2xl transition-all ${
                    activeSection === item.id ? 'bg-white/20 border border-white/30' : 'hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
