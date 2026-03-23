import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, MapPin, Calendar } from "lucide-react";

const NosProjets: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
            SOPI – Promotion Immobilière
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-3">
            Nos projets immobiliers – Résidences Oussama
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            SOPI développe la série de résidences Oussama avec une planification claire des livraisons,
            garantissant visibilité, qualité d’exécution et accompagnement à chaque étape.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Oussama I */}
            <article className="bg-slate-50 rounded-3xl border border-slate-100 p-8 hover:shadow-lg transition-shadow">
        <div className="relative h-56 overflow-hidden rounded-2xl">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade.jpg"
            alt="Résidence Oussama I"
            className="w-full h-full object-cover"
          />
        </div>              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest">
                <Clock size={16} />
                En cours • Appartements disponibles
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-4">
                Résidence Oussama I
              </h2>

              <p className="text-slate-600 mt-3 leading-relaxed">
                Programme en cours de réalisation, avec encore quelques appartements disponibles.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Calendar size={18} className="text-sopi-teal" />
                  Livraison prévue : <span className="text-slate-900 font-bold">2027</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <MapPin size={18} className="text-sopi-teal" />
                  La Nouvelle Soukra, Tunis
                </div>
              </div>

          <div className="mt-6">
            <Link
              to="/appartements?projet=oussama-1"
              className="bg-sopi-teal text-white px-6 py-3 rounded-2xl font-bold hover:bg-sopi-teal-dark transition-all text-center"
            >
              Voir les appartements
            </Link>
          </div>
            </article>

            {/* Oussama II (featured) */}
            <article className="bg-white rounded-3xl border border-sopi-teal/25 p-8 shadow-lg hover:shadow-xl transition-shadow ring-1 ring-sopi-teal/15">
         <div className="relative h-56 overflow-hidden rounded-2xl">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
            alt="Résidence Oussama I"
            className="w-full h-full object-cover"
          />
        </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sopi-teal/10 text-sopi-teal text-xs font-bold uppercase tracking-widest">
                <Sparkles size={16} />
                Disponible
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-4">
                Résidence Oussama II
              </h2>

              <p className="text-slate-600 mt-3 leading-relaxed">
              Prochain projet de la série Oussama, actuellement en phase de conception.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Calendar size={18} className="text-sopi-teal" />
                  Livraison prévue : <span className="text-slate-900 font-bold">2028</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <MapPin size={18} className="text-sopi-teal" />
                  La Nouvelle Soukra, Tunis
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/appartements?projet=oussama-2"
                  className="bg-sopi-teal text-white px-6 py-3 rounded-2xl font-bold hover:bg-sopi-teal-dark transition-all text-center"
                >
                  Voir les appartements
                </Link>

                <Link
                  to="/residence/oussama-2"
                  className="bg-white border-2 border-sopi-teal text-sopi-teal px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  Découvrir le projet <ArrowRight size={18} />
                </Link>
              </div>
            </article>

            {/* Oussama III */}
            <article className="bg-slate-50 rounded-3xl border border-slate-100 p-8 hover:shadow-lg transition-shadow">
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <img
              src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
              alt="Concept architectural Résidence Oussama III"
              className="w-full h-full object-cover blur-[2px] scale-105"
            />

            <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-[11px] uppercase tracking-[0.25em] font-semibold opacity-90">
                  Concept architectural
                </p>
                <p className="mt-2 text-lg font-serif font-bold">
                  Projet en préparation
                </p>
              </div>
            </div>
          </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest">
                <Clock size={16} />
                À venir
              </div>

              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-4">
                Résidence Oussama III
              </h2>

              <p className="text-slate-600 mt-3 leading-relaxed">
                Prochain projet de la série Oussama.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <Calendar size={18} className="text-sopi-teal" />
                  Livraison prévue : <span className="text-slate-900 font-bold">2029</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-semibold">
                  <MapPin size={18} className="text-sopi-teal" />
                  Tunis (emplacement communiqué au lancement)
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sopi-peach/30 rounded-[3rem] p-10 md:p-14 border border-sopi-peach">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-sopi-teal">
              Vous souhaitez être conseillé sur le meilleur choix ?
            </h3>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              Nos équipes vous orientent selon votre budget, la typologie recherchée et votre horizon de livraison
              (2027, 2028 ou 2029).
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?interest=achat"
                className="bg-sopi-teal text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-sopi-teal-dark transition-all"
              >
                Planifier une visite
              </Link>
              <Link
                to="/appartements"
                className="bg-white border-2 border-sopi-teal text-sopi-teal px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Consulter les appartements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosProjets;
