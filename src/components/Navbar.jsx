import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-primary p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <img src={`${basePath}img/logo_daprel_transparent.png`} alt="Logo Daprel" className="h-[80px] w-auto object-cover" />
          <div className="text-2xl font-bold text-white px-4">Daprel Portfolio</div>
        </motion.div>
        
        <nav className="flex flex-col sm:flex-row p-2 text-white text-center font-bold gap-2">
          {links.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.path}
                  className={`border p-2 rounded m-1 h-10 min-w-[100px] flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-accent border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'border-transparent hover:bg-accent hover:border-white/50'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
