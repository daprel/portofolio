import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectHighlights from './pages/ProjectHighlights';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Profile />
              <Portfolio />
              <Contact />
            </>
          } />
          <Route path="/highlights" element={<ProjectHighlights />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
