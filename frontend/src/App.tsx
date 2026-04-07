import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import Home from './pages/Home';
import ApartmentsList from './pages/ApartmentsList';
import ApartmentDetail from './pages/ApartmentDetail';
import Contact from './pages/Contact';
import NosProjets from './pages/nosprojets';
import ScrollToTop from "./components/ScrollToTop";

//import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <Router>
      <Navbar />
        <ScrollToTop />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosprojets" element={<NosProjets />} />
          <Route path="/appartements" element={<ApartmentsList />} />
          <Route path="/appartements/:projectId/:idAppartement" element={<ApartmentDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <StickyCTA />
      {/* <AIAssistant /> */}
    </Router>
  );
}

export default App;