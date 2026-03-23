import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const PHONE_NUMBER = '+21627604160';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);

  const navLinks = [
    { name: 'Nos Projets', path: '/nosprojets' },
    { name: 'Appartements', path: '/appartements' },
    { name: 'Résidence Oussama II', path: '/residence' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const textColor = !scrolled && isHome ? 'text-white' : 'text-slate-700';
  const brandTextColor = !scrolled && isHome ? 'text-white' : 'text-sopi-teal';
  const subTextColor = !scrolled && isHome ? 'text-white/80' : 'text-slate-500';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                !scrolled && isHome ? 'bg-white' : 'bg-transparent'
              }`}
            >
              <img
                src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/logo.jpg"
                alt="SOPI - Oussema Promotion Immobilière"
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className={`text-2xl font-serif font-bold tracking-tight leading-none ${brandTextColor}`}>
                SOPI
              </span>
              <span className={`text-[8px] uppercase tracking-tighter font-bold ${subTextColor}`}>
                Oussema Promotion Immobilière
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold hover:text-sopi-teal transition-colors ${textColor}`}
              >
                {link.name}
              </Link>
            ))}


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${!scrolled && isHome ? 'text-white' : 'text-slate-900'}`}
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
<div className="md:hidden bg-white fixed inset-0 z-50 flex flex-col pt-24 px-8 pb-10 space-y-8 overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top duration-300">          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-slate-900"
            aria-label="Fermer le menu"
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-sopi-teal border-b border-slate-100 pb-4"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA -> Call */}

        </div>
      )}
    </nav>
  );
};

export default Navbar;