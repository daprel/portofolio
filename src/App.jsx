import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
