import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sopi-teal text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
        <Link to="/" className="flex items-center gap-3 mb-4">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/logo.jpg"
            alt="SOPI - Oussema Promotion Immobilière"
            className="h-12 w-auto object-contain"
          />
        </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Promoteur immobilier indépendant basé à La Marsa.
              Résidences durables, architecture moderne et engagement contractuel.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3 mb-4">
              <a
                href="https://www.instagram.com/sopi_immobiliere/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SOPI"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sopi-peach hover:text-sopi-teal transition-all"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61587593563745"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook SOPI"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sopi-peach hover:text-sopi-teal transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>

            <p className="text-white/40 text-xs">
              Société tunisienne indépendante – Depuis 2015
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sopi-peach font-bold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/residence" className="hover:text-sopi-peach">La Résidence</Link></li>
              <li><Link to="/appartements" className="hover:text-sopi-peach">Stock disponible</Link></li>
              <li><Link to="/contact" className="hover:text-sopi-peach">Prendre rendez-vous</Link></li>
              <li><Link to="/#faq" className="hover:text-sopi-peach">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sopi-peach font-bold mb-4">Contact</h4>

            <ul className="space-y-4 text-sm text-white/70 mb-6">
              <li className="flex gap-3">
                <MapPin size={18} className="text-sopi-peach shrink-0 mt-1" />
                <a
                  href="https://maps.app.goo.gl/k1neeF9x8uWpCQeC8?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  B09, La Perle Bleue, Le Relais<br />La Marsa
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-sopi-peach shrink-0" />
                <a href="tel:+21627604160" className="hover:text-white">
                  +216 27 604 160
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-sopi-peach shrink-0" />
                <a href="mailto:contact@sopi.tn" className="hover:text-white">
                  contact@sopi.tn
                </a>
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-xs text-white/40 gap-3">
          <p>
            © 2025 Société Oussema Promotion Immobilière (SOPI). Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sopi-peach">Mentions légales</a>
            <a href="#" className="hover:text-sopi-peach">Confidentialité</a>
            <a href="#" className="hover:text-sopi-peach">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;