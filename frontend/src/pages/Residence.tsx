import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Calendar,
  HelpCircle,
  Phone,
  Mail,
  AlertCircle,
  ShieldCheck,
  Trees,
  Shield,
  Car,
  Zap,
  Wifi,
  Dumbbell,
  Coffee,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import PanoramaViewer from '../components/PanoramaViewer';
import { PROJECT_INFO, FAQ_RESIDENCE } from '../data';

type GalleryItem = { src: string; alt: string; tag: string };

const Residence: React.FC = () => {
  const mapLink = "https://maps.app.goo.gl/k1neeF9x8uWpCQeC8?g_st=ic";

  const apartmentsLink = "/appartements?projet=oussama-2";


  const photoBase = "https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2";

  const gallery: GalleryItem[] = useMemo(() => ([
    { src: `${photoBase}/facade.jpg`, alt: "Façade - Résidence Oussama 2", tag: "Architecture" },
    { src: `${photoBase}/accueil.jpg`, alt: "Accueil - Résidence Oussama 2", tag: "Accueil" },
    { src: `${photoBase}/piscine.jpg`, alt: "Piscine - Résidence Oussama 2", tag: "Piscine" },
    { src: `${photoBase}/salledesport.jpeg`, alt: "Salle de sport - Résidence Oussama 2", tag: "Salle de sport" },
    { src: `${photoBase}/piscine1.jpg`, alt: "Jardins - Résidence Oussama 2", tag: "Jardins" },
    { src: `${photoBase}/interieur.jpg`, alt: "Intérieur - Résidence Oussama 2", tag: "Intérieurs" },
  ]), [photoBase]);

  const features = [
    { icon: <Trees size={28} />, title: "Piscine centrale" },
    { icon: <Shield size={28} />, title: "Sécurité 24/7" },
    { icon: <Car size={28} />, title: "Parking sous-sol"},
    { icon: <Dumbbell size={28} />, title: "Salle de sport" },
  ];

  // --- Lightbox state ---
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveIndex((i) => (i + 1) % gallery.length);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, gallery.length]);

  return (
    <div className="pt-24 pb-24 bg-white">

      {/* HERO */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
                Résidence Signature SOPI
              </span>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-4 mb-6">
                Un cadre de vie haut standing à La Nouvelle Soukra.
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Résidence Oussama II est une résidence sécurisée pensée pour le confort,
            la sérénité et la valorisation patrimoniale, au cœur d’un quartier en pleine expansion.              </p>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Localisation</p>
                    <p className="font-bold text-slate-900">{PROJECT_INFO.location}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Livraison</p>
                    <p className="font-bold text-slate-900">{PROJECT_INFO.deliveryDate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Typologies</p>
                    <p className="font-bold text-slate-900">S+1 à S+3</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 bg-sopi-teal text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-sopi-teal-dark transition-all"
                  >
                    Planifier une visite
                  </Link>

                  <Link
                    to={apartmentsLink}
                    className="flex-1 bg-sopi-peach text-sopi-teal px-6 py-4 rounded-xl font-bold text-center hover:bg-white transition-all border border-sopi-peach"
                  >
                    Voir les lots disponibles
                  </Link>
                </div>

                <p className="text-[12px] text-slate-400 text-center mt-4">
                  Réponse rapide • Conseiller dédié • Sans engagement
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white text-left"
              aria-label="Ouvrir la galerie"
            >
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sopi-teal/10" />
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-sopi-teal border border-white/50">
                Explorer la galerie
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* GALERIE PHOTO (cliquable) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">Galerie</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3">
              Découvrez la Résidence Oussama II
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4">
Accueil, jardins, piscine et espaces de vie.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <button
              type="button"
              onClick={() => openLightbox(1)}
              className="md:col-span-7 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm group relative text-left"
            >
              <img
                src={gallery[1].src}
                alt={gallery[1].alt}
                className="w-full h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-sopi-teal border border-white/50">
                {gallery[1].tag}
              </div>
            </button>

            <div className="md:col-span-5 grid grid-cols-2 gap-6">
              {gallery.slice(2, 6).map((img, i) => {
                const index = i + 2;
                return (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm group relative text-left"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[200px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-bold text-sopi-teal border border-white/50">
                      {img.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to={apartmentsLink}
              className="inline-flex items-center gap-2 text-sopi-teal font-bold border-b-2 border-sopi-teal pb-1 hover:text-sopi-teal-dark transition-colors"
            >
              Voir les lots disponibles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">Prestations</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6">
              Un standing pensé pour durer
            </h2>
            <p className="text-slate-500">
              Des choix durables qui protègent votre confort et la valeur de votre investissement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-sopi-teal hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sopi-teal mb-6 group-hover:scale-110 transition-transform origin-left">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION (ta version) */}
      <section className="py-24 bg-sopi-teal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Idéalement situé à La Nouvelle Soukra.
              </h2>
              <p className="text-sopi-peach/80 text-lg mb-8">
                Des choix durables qui protègent votre confort et la valeur de votre investissement.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">03 min</p>
                  <p className="text-xs uppercase text-white/60">Monoprix ElWahat</p>
                </div>
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">15 min</p>
                  <p className="text-xs uppercase text-white/60">La Marsa</p>
                </div>
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">15 min</p>
                  <p className="text-xs uppercase text-white/60">Aéroport de Tunis Carthage</p>
                </div>
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">10 min</p>
                  <p className="text-xs uppercase text-white/60">Berges du Lac</p>
                </div>
              </div>

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 text-sopi-peach font-bold hover:text-white transition-colors"
              >
                Voir l'emplacement exact
                <MapPin size={20} />
              </a>

              {/* ✅ CTA contextuel (après localisation) */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to={apartmentsLink}
                  className="flex-1 bg-sopi-peach text-sopi-teal px-6 py-4 rounded-xl font-bold text-center hover:bg-white transition-all shadow-lg"
                >
                  Voir les lots disponibles
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all"
                >
                  Planifier une visite
                </Link>
              </div>
            </div>

            <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="Localisation"
                className="w-full h-full object-cover grayscale opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sopi-peach text-sopi-teal p-6 rounded-full animate-bounce shadow-2xl shadow-black/50"
                >
                  <MapPin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sopi-teal to-sopi-teal-dark rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sopi-peach/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Parlons de votre projet.
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Nos conseillers SOPI vous accompagnent pour vous présenter les lots disponibles,
              répondre à vos questions et organiser une visite privée, sans engagement.              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">


                <a
                  href="tel:+21671000000"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
                >
                  <Phone size={24} />
                  +216 27 604 160
                </a>
              </div>

              <div className="mt-10">
                <Link
                  to={apartmentsLink}
                  className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-white/40 pb-1 hover:border-white transition-colors"
                >
                  Voir les appartements disponibles
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-white text-sm font-bold">
                {gallery[activeIndex]?.tag} • {activeIndex + 1}/{gallery.length}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="text-white/80 hover:text-white transition"
                aria-label="Fermer"
              >
                <X size={28} />
              </button>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={gallery[activeIndex]?.src}
                alt={gallery[activeIndex]?.alt}
                className="w-full max-h-[75vh] object-contain"
              />

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3 rounded-full"
                aria-label="Précédent"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3 rounded-full"
                aria-label="Suivant"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <p className="text-white/70 text-center text-sm mt-4">
              Astuce : flèches du clavier ← → • Échap pour fermer
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Residence;
