import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/nosprojets' },
    { name: 'Appartements', path: '/appartements' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex h-full items-center justify-between">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-transparent">
                <img
                  src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/logo.jpg"
                  alt="SOPI - Oussema Promotion Immobilière"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight leading-none text-sopi-teal">
                  SOPI
                </span>
                <span className="text-[10px] uppercase tracking-tight font-bold text-slate-500">
                  Société Oussema De Promotion Immobilière
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-semibold transition-colors ${
                      active
                        ? 'text-sopi-teal'
                        : 'text-slate-700 hover:text-sopi-teal'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className={`inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  isActive('/contact')
                    ? 'bg-sopi-teal-dark text-white'
                    : 'bg-sopi-teal text-white hover:bg-sopi-teal-dark'
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Ouvrir le menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {[...navLinks, { name: 'Contact', path: '/contact' }].map((link) => {
            const active = isActive(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-xl px-4 py-4 text-base font-semibold transition-colors ${
                  active
                    ? 'bg-slate-50 text-sopi-teal'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;