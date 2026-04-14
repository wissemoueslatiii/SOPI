import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sopi-teal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/logo.jpg"
                alt="SOPI - Oussema Promotion Immobilière"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-white/80 text-sm leading-7 mb-5 max-w-sm">
              Promoteur immobilier à La Marsa.
              Nous concevons des résidences modernes, durables et pensées pour votre qualité de vie.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 mb-5">
              <a
                href="https://www.instagram.com/sopi_immobiliere/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SOPI"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61587593563745"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook SOPI"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>

            <p className="text-white/50 text-xs">
              Société tunisienne indépendante — Depuis 2017
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sopi-peach font-bold mb-4">Explorer</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Acceuil
                </Link>
              </li>
              <li>
                <Link to="/nosprojets" className="hover:text-white transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/appartements" className="hover:text-white transition-colors">
                  Appartements disponibles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Prendre rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sopi-peach font-bold mb-4">Contact</h4>

            <ul className="space-y-4 text-sm text-white/80 mb-6">
              <li className="flex gap-3">
                <MapPin size={18} className="text-sopi-peach shrink-0 mt-1" />
                <a
                  href="https://maps.app.goo.gl/FaJ7vG5MzWWwHTUZA?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  B09, La Perle Bleue, Le Relais<br />La Marsa
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-sopi-peach shrink-0" />
                <a href="tel:+21627604160" className="hover:text-white transition-colors">
                  +216 27 604 160
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-sopi-peach shrink-0" />
                <a href="mailto:contact@sopi-immobilier.com" className="hover:text-white transition-colors">
                  contact@sopi-immobilier.com
                </a>
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-white/50 gap-3">
          <p>
            © 2026 SOPI. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;