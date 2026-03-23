
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Sparkles, Clock, ArrowRight, Calendar, Phone, Award, Users, Building2, CheckCircle2, Star, MessageCircle, HelpCircle, Play, Film } from 'lucide-react';
import { APARTMENTS, PROJECT_INFO, COMPANY_STATS, COMPANY_STRENGTHS, TESTIMONIALS, FAQ_HOME } from '../data';
import ApartmentCard from '../components/ApartmentCard';

const Home: React.FC = () => {
  const featuredApartments = APARTMENTS.slice(0, 3);
  const mapLink = "https://maps.app.goo.gl/k1neeF9x8uWpCQeC8?g_st=ic";

  return (
    <div className="bg-white">
      {/* Hero Section - Using the Aerial View Render Concept */}
            <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
                  alt="Résidence Oussama 2 - Vue Aérienne" 
                  className="w-full h-full object-cover scale-105 animate-[pulse_15s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sopi-teal/90 via-sopi-teal/40 to-transparent"></div>
              </div>
      
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-1.5 bg-sopi-peach text-sopi-teal rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-lg">
                    Société Oussema Promotion Immobilière
                  </span>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    SOPI, promoteur immobilier de confiance <span className="text-sopi-peach italic"> </span>
                  </h1>
                  <p className="text-xl text-white/90 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                  Depuis 2015, SOPI conçoit et développe des projets immobiliers alliant maîtrise du foncier, architecture contemporaine et sécurité patrimoniale durable.                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                    <Link to="/nosprojets" className="bg-sopi-peach hover:bg-white text-sopi-teal px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 transition-all flex items-center justify-center gap-2">
                      Découvrir nos projets
                      <ArrowRight size={20} />
                    </Link>

                  </div>
                </div>
              </div>
      

            </section>

      {/* Highlights Section based on renders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/piscine1.jpg"
                      className="rounded-3xl shadow-xl w-full h-80 object-cover"
                    />
                    <img 
                      src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade2.jpg"
                      className="rounded-3xl shadow-xl w-full h-80 object-cover mt-12"
                    />
                 </div>
                 <div className="absolute -bottom-20 -right-6 bg-sopi-teal text-white p-8 rounded-3xl hidden md:block">
                    <p className="text-4xl font-serif font-bold italic mb-1">SOPI</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-sopi-peach">Promotion de Prestige</p>
                 </div>
              </div>
              <div>
                 <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs mb-4 block">Concept Architectural</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Qui sommes-nous</h2>
                 <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                <strong>Chez SOPI, nous concevons chaque projet comme un engagement à long terme.</strong> </p>
                 <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                   Promoteur immobilier indépendant, SOPI développe des résidences à forte valeur ajoutée, alliant confort au quotidien, durabilité des constructions et sécurité de l’investissement.    </p>             
                 <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-2 h-2 bg-sopi-teal rounded-full"></div>
                       Expertise locale et maîtrise stratégique du foncier
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-2 h-2 bg-sopi-teal rounded-full"></div>
                       Architecture moderne & finitions durables
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-2 h-2 bg-sopi-teal rounded-full"></div>
                       Engagement contractuel sur les délais et la qualité
                    </li>
                 </ul>
                 <Link to="/residence" className="inline-flex items-center gap-2 text-sopi-teal font-bold border-b-2 border-sopi-teal pb-1 hover:text-sopi-teal-dark transition-colors">
                    Explorer nos projets
                    <ArrowRight size={18} />
                 </Link>
              </div>
           </div>
        </div>
      </section>



      {/* SOPI en Chiffres */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">SOPI en Chiffres</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Des réalisations concrètes, construites dans la durée</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sopi-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-sopi-teal" size={40} />
              </div>
              <p className="text-5xl font-serif font-bold text-sopi-teal mb-2">{COMPANY_STATS.projectsDelivered}</p>
              <p className="text-slate-600 font-bold">projets résidentiels livrés</p>
              <p className="text-slate-400 font-bold">dans des emplacements stratégiques en Tunisie</p>

            </div>

            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sopi-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-sopi-teal" size={40} />
              </div>
              <p className="text-5xl font-serif font-bold text-sopi-teal mb-2">{COMPANY_STATS.satisfiedClients}+</p>
              <p className="text-slate-600 font-bold">clients accompagnés</p>
              <p className="text-slate-400 font-bold">dans leurs projets d’acquisition et d’investissement</p>
            </div>

            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sopi-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-sopi-teal" size={40} />
              </div>
              <p className="text-5xl font-serif font-bold text-sopi-teal mb-2">{new Date().getFullYear() - COMPANY_STATS.founded}+</p>
              <p className="text-slate-600 font-bold">années d’expérience</p>
              <p className="text-slate-400 font-bold">en promotion immobilière résidentielle</p>
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

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Oussama I */}
      <article className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
        <div className="h-56">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade.jpg"
            alt="Résidence Oussama I"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest">
            <Clock size={16} className="text-slate-600" />
            En cours • Appartements disponibles
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
            Résidence Oussama I
          </h3>

          <p className="text-slate-600 mt-3 leading-relaxed">
            Programme en cours de réalisation, avec encore quelques appartements disponibles.
            
          </p>

          <p className="text-slate-500 mt-4 font-medium">
            Livraison prévue : <strong>2027</strong>
          </p>

          <div className="mt-6">
            <Link
              to="/appartements?projet=oussama-1"
              className="bg-sopi-teal text-white px-6 py-3 rounded-2xl font-bold hover:bg-sopi-teal-dark transition-all text-center"
            >
              Voir les appartements
            </Link>
          </div>
        </div>
      </article>

      {/* Oussama II (featured) */}
      <article className="bg-white rounded-3xl border border-sopi-teal/25 shadow-lg hover:shadow-xl transition-shadow overflow-hidden ring-1 ring-sopi-teal/20">
        <div className="h-56">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
            alt="Résidence Oussama II"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sopi-teal/10 text-sopi-teal text-xs font-bold uppercase tracking-widest">
            <Sparkles size={16} className="text-sopi-teal" />
            Disponible
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
            Résidence Oussama II
          </h3>

          <p className="text-slate-600 mt-3 leading-relaxed">
                Projet actuellement en commercialisation, avec des lots disponibles.
          </p>

          <p className="text-slate-500 mt-4 font-medium">
            Livraison prévue : <strong>2028</strong>
          </p>

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
        </div>
      </article>

      {/* Oussama III */}
      <article className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">

        <div className="relative h-56 overflow-hidden">

          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
            alt="Résidence Oussama III"
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

        <div className="p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest">
            <Clock size={16} className="text-amber-700" />
            À venir
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
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
                  Tunis (emplacement communiqué au lancement)
                </div>
              </div>
        </div>
      </article>
    </div>
  </div>
</section>



{/* FAQ Rapide */}
<section className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
        Questions Fréquentes
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">
        FAQ Rapide
      </h2>
    </div>

    <div className="space-y-6">
      <details className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sopi-teal transition-all">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="text-lg font-bold text-slate-900">
            Quels sont les projets actuellement disponibles chez SOPI ?
          </h4>
          <ArrowRight className="text-sopi-teal group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-slate-600 mt-4 leading-relaxed">
          SOPI commercialise actuellement des appartements au sein des Résidences Oussama I et Oussama II.
          Le projet Oussama III est en préparation et fera l’objet d’un lancement prochain.
        </p>
      </details>

      <details className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sopi-teal transition-all">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="text-lg font-bold text-slate-900">
            Quelles sont les dates de livraison prévues ?
          </h4>
          <ArrowRight className="text-sopi-teal group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-slate-600 mt-4 leading-relaxed">
          La livraison de la Résidence Oussama I est prévue en 2027, celle de la Résidence Oussama II en 2028,
          et la Résidence Oussama III en 2029.
        </p>
      </details>

      <details className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sopi-teal transition-all">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="text-lg font-bold text-slate-900">
            Proposez-vous des facilités de paiement ?
          </h4>
          <ArrowRight className="text-sopi-teal group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Oui, SOPI propose des plans de paiement adaptés à chaque projet.
          Nos conseillers vous accompagnent pour définir une solution conforme à votre budget.
        </p>
      </details>

      <details className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sopi-teal transition-all">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="text-lg font-bold text-slate-900">
            Puis-je visiter ou consulter les plans avant de réserver ?
          </h4>
          <ArrowRight className="text-sopi-teal group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Bien sûr. Il est possible de visiter nos bureaux commerciaux et de consulter les plans détaillés
          des appartements disponibles sur rendez-vous.
        </p>
      </details>

      <details className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sopi-teal transition-all">
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <h4 className="text-lg font-bold text-slate-900">
            Quelles garanties sont offertes après la livraison ?
          </h4>
          <ArrowRight className="text-sopi-teal group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-slate-600 mt-4 leading-relaxed">
          SOPI assure un service après-vente structuré ainsi que les garanties légales liées à la construction,
          afin d’assurer la sérénité de ses clients après la remise des clés.
        </p>
      </details>
    </div>

    <div className="mt-12 text-center">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-sopi-teal font-bold border-b-2 border-sopi-teal pb-1 hover:text-sopi-teal-dark transition-colors"
      >
        Vous avez d'autres questions ? Contactez-nous
        <ArrowRight size={18} />
      </Link>
    </div>
  </div>
</section>

      {/* Final Conversion CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-sopi-peach/30 rounded-[3rem] p-12 md:p-20 border border-sopi-peach">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-sopi-teal mb-8">Réservez votre visite ou anticipez votre futur investissement.</h2>
            <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
        Nos conseillers vous accompagnent dans l’acquisition d’un appartement au sein des
        <strong> Résidences Oussama I et II</strong>, et vous informent en priorité sur le
        lancement de la <strong>Résidence Oussama III</strong>.          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-sopi-teal text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-sopi-teal-dark transition-all shadow-xl shadow-sopi-teal/20">
                Contactez-nous
              </Link>

            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
