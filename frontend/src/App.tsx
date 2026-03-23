import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Home from './pages/Home';
import Residence from './pages/Residence';
import ApartmentsList from './pages/ApartmentsList';
import ApartmentDetail from './pages/ApartmentDetail';
import Contact from './pages/Contact';
import NosProjets from './pages/nosprojets';
import AIAssistant from './components/AIAssistant';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen relative">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosprojets" element={<NosProjets />} />
            <Route path="/residence" element={<Residence />} />
            <Route path="/appartements" element={<ApartmentsList />} />
            <Route path="/appartements/:projectId/:idAppartement" element={<ApartmentDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
        <AIAssistant />
      </div>
    </HashRouter>
  );
};

export default App;
