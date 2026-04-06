import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Calendar,
  Phone,
  Shield,
  Car,
  Clock,
  Dumbbell,
  Trees,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { PROJECT_INFO } from '../data';

type GalleryItem = { src: string; alt: string; tag: string };

const NosProjets: React.FC = () => {
  const mapLink = 'https://maps.app.goo.gl/AjhE7eEizaKe4QBZ8?g_st=ic';
  const apartmentsLink = '/appartements?projet=oussama-2';

  const photoBase =
    'https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2';

  const gallery: GalleryItem[] = useMemo(
    () => [
      { src: `${photoBase}/facade.jpg`, alt: 'Façade - Résidence Oussama 2', tag: 'Entrée principale' },
      { src: `${photoBase}/globale.jpg`, alt: 'Accueil - Résidence Oussama 2', tag: 'Vue d’ensemble' },
      { src: `${photoBase}/facade3.jpg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Façade de la résidence' },
      { src: `${photoBase}/piscine.jpg`, alt: 'Piscine - Résidence Oussama 2', tag: 'Piscine' },
            { src: `${photoBase}/accueil.jpg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Hall d’entrée' },

      { src: `${photoBase}/salledesport.jpeg`, alt: 'Salle de sport - Résidence Oussama 2', tag: 'Salle de sport' },
      { src: `${photoBase}/exterieur.jpg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Espaces extérieurs' },
            { src: `${photoBase}/piscine1.jpg`, alt: 'Jardins - Résidence Oussama 2', tag: 'Espaces extérieurs' },

      { src: `${photoBase}/salledesport2.jpeg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Salle de sport' },
      { src: `${photoBase}/accueil.jpg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Hall d’entrée' },
      { src: `${photoBase}/interieur.jpg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Entrée du bloc' },
      { src: `${photoBase}/entree.jpeg`, alt: 'Intérieur - Résidence Oussama 2', tag: 'Hall d’entrée' },
    ],
    [photoBase]
  );

  const galleryOussama1: GalleryItem[] = useMemo(
    () => [
      {
        src: 'https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade.jpg',
        alt: 'Façade - Résidence Oussama 1',
        tag: 'Entrée principale',
      },
      {
        src: 'https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade5.jpg',
        alt: 'Entrée - Résidence Oussama 1',
        tag: 'Vue d’ensemble',
      },
      {
        src: 'https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade3.jpg',
        alt: 'Vue extérieure - Résidence Oussama 1',
        tag: 'Espaces extérieurs',
      },
      {
        src: 'https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade2.jpg',
        alt: 'Cadre de vie - Résidence Oussama 1',
        tag: 'Façade de la résidence',
      },
    ],
    []
  );

  const features = [
    { icon: <Trees size={28} />, title: 'Piscine centrale' },
    { icon: <Shield size={28} />, title: 'Sécurité 24/7' },
    { icon: <Car size={28} />, title: 'Parking sous-sol' },
    { icon: <Dumbbell size={28} />, title: 'Salle de sport' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState<GalleryItem[]>(gallery);

  const openLightbox = (galleryItems: GalleryItem[], index: number) => {
    setActiveGallery(galleryItems);
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + activeGallery.length) % activeGallery.length);

  const next = () =>
    setActiveIndex((i) => (i + 1) % activeGallery.length);

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
  }, [lightboxOpen, activeGallery.length]);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
                Résidence Signature SOPI
              </span>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-4 mb-6">
                Un cadre de vie moderne à La Nouvelle Soukra.
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
Résidence Oussama II propose des appartements modernes dans un environnement sécurisé, pensé pour le confort au quotidien et la qualité de vie.
              </p>

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
                    <p className="font-bold text-slate-900">S+1, S+2 et S+3</p>
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
              onClick={() => openLightbox(gallery, 0)}
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
              Accueil, jardins, piscine et espaces de vie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <button
              type="button"
              onClick={() => openLightbox(gallery, 1)}
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
                    onClick={() => openLightbox(gallery, index)}
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

      {/* LOCATION */}
      <section className="py-24 bg-sopi-teal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Un emplacement stratégique à La Nouvelle Soukra
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">03 min</p>
                  <p className="text-xs uppercase text-white/60">Monoprix ElWahat</p>
                </div>
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">10 min</p>
                  <p className="text-xs uppercase text-white/60">Berges du Lac</p>
                </div>
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">15 min</p>
                  <p className="text-xs uppercase text-white/60">La Marsa</p>
                </div>
                <div className="border-l-2 border-sopi-peach pl-4">
                  <p className="font-bold text-2xl">15 min</p>
                  <p className="text-xs uppercase text-white/60">Aéroport de Tunis Carthage</p>
                </div>
              </div>

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 text-sopi-peach font-bold hover:text-white transition-colors"
              >
                Voir sur Google Maps
                <MapPin size={20} />
              </a>


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

      {/* Oussama Series (Projects) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
              Nos projets
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">
              La série de résidences Oussama
            </h2>
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              SOPI développe actuellement la série de résidences Oussama, avec une planification claire des livraisons
              et une continuité de projets sur plusieurs années.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* OUSSAMA I */}
            <article className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={galleryOussama1[0].src}
                  alt={galleryOussama1[0].alt}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute top-5 left-5 bg-white/90 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-700">
                  En cours
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-slate-900">
                  Résidence Oussama I
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Programme en cours de réalisation, avec encore quelques appartements disponibles.
                </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Calendar size={18} className="text-sopi-teal" />
                  Livraison prévue : <span className="text-slate-900 font-bold">2027</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <MapPin size={18} className="text-sopi-teal" />
                  La Nouvelle Soukra
                </div>
              </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {galleryOussama1.slice(0, 3).map((img, index) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => openLightbox(galleryOussama1, index)}
                      className="overflow-hidden rounded-xl border border-slate-200"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-24 w-full object-cover hover:scale-[1.03] transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => openLightbox(galleryOussama1, 0)}
                  className="mt-4 text-sm font-bold text-sopi-teal border-b border-sopi-teal pb-1"
                >
                  Voir toutes les photos
                </button>

                <div className="mt-6">
                  <Link
                    to="/appartements?projet=oussama-1"
                    className="inline-flex items-center justify-center rounded-xl bg-sopi-teal text-white px-6 py-3 font-bold hover:opacity-90"
                  >
                    Voir les appartements
                  </Link>
                </div>
              </div>
            </article>

            {/* OUSSAMA III */}
            <article className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
                  alt="Résidence Oussama III"
                  className="w-full h-full object-cover blur-[2px] scale-105"
                />

                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-[11px] uppercase tracking-[0.25em] font-semibold opacity-90">
                      Concept architectural
                    </p>
                    <p className="mt-2 text-lg font-serif font-bold">
                      Projet en préparation
                    </p>
                  </div>
                </div>

                <div className="absolute top-5 left-5 bg-white/90 px-3 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-700">
                  À venir
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-serif font-bold text-slate-900">
                  Résidence Oussama III
                </h3>

                <p className="text-slate-600 mt-3 leading-relaxed">
                  Prochain projet de la série Oussama, actuellement en phase de conception.
                </p>
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Calendar size={18} className="text-sopi-teal" />
                  Livraison prévue : <span className="text-slate-900 font-bold">2029</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <MapPin size={18} className="text-sopi-teal" />
                  La Nouvelle Soukra
                </div>
              </div>
              </div>
            </article>
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
                Réservez votre visite dès maintenant
              </h2>
              <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                Un conseiller dédié vous accompagne pour choisir votre appartement et organiser une visite privée, sans engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a
  href="tel:+21627604160"
  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all"
>
  <Phone size={24} />
  +216 27 604 160
</a>
              </div>
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
                {activeGallery[activeIndex]?.tag} • {activeIndex + 1}/{activeGallery.length}
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
                src={activeGallery[activeIndex]?.src}
                alt={activeGallery[activeIndex]?.alt}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default NosProjets;