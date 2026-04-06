
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
      alt="Résidence Oussama 2 - Vue extérieure" 
      className="w-full h-full object-cover scale-105 animate-[pulse_15s_ease-in-out_infinite]"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-sopi-teal/75 via-sopi-teal/35 to-transparent"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
    <div className="max-w-2xl">
      <span className="inline-block px-4 py-1.5 bg-sopi-peach text-sopi-teal rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-lg">
        Promoteur immobilier
      </span>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
        Des logements modernes, pensés pour votre quotidien
      </h1>

      <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
        Découvrez des résidences confortables, durables et bien situées, conçues pour répondre à vos besoins.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
        <Link
          to="/appartements"
          className="bg-sopi-peach hover:bg-white text-sopi-teal px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/10 transition-all flex items-center justify-center gap-2"
        >
          Voir nos appartements
          <ArrowRight size={20} />
        </Link>

        <Link
          to="/contact"
          className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
        >
          Nous contacter
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
                      src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade4.jpg"
                      className="rounded-3xl shadow-xl w-full h-80 object-cover"
                    />
                    <img 
                      src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/piscine1.jpg"
                      className="rounded-3xl shadow-xl w-full h-80 object-cover mt-12"
                    />
                 </div>
                 <div className="absolute -bottom-20 -right-6 bg-sopi-teal text-white p-5 rounded-3xl hidden md:block">
                    <p className="text-4xl font-serif font-bold italic mb-1">SOPI</p>
                    <p className="text-xs uppercase font-bold tracking-widest text-sopi-peach">Promoteur immobilier</p>
                 </div>
              </div>
              <div>
                 <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs mb-4 block">À propos de SOPI</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Des résidences conçues pour durer</h2>
                 <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                <strong>Chez SOPI, chaque projet est pensé comme un engagement durable.</strong> </p>
                 <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Nous développons des résidences modernes, conçues pour le confort au quotidien et la valeur à long terme.
                    </p>             
                 <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-2 h-2 bg-sopi-teal rounded-full"></div>
                       Maîtrise du foncier et expertise locale
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-2 h-2 bg-sopi-teal rounded-full"></div>
                       Résidences modernes aux finitions durables
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <div className="w-2 h-2 bg-sopi-teal rounded-full"></div>
                       Respect des délais et de la qualité
                    </li>
                 </ul>
                 <Link to="/nosprojets" className="inline-flex items-center gap-2 text-sopi-teal font-bold border-b-2 border-sopi-teal pb-1 hover:text-sopi-teal-dark transition-colors">
                    Voir nos projets
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">SOPI en chiffres</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sopi-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-sopi-teal" size={40} />
              </div>
              <p className="text-5xl font-serif font-bold text-sopi-teal mb-2">{COMPANY_STATS.projectsDelivered}</p>
              <p className="text-slate-600 font-bold">projets résidentiels livrés</p>

            </div>

            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sopi-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-sopi-teal" size={40} />
              </div>
              <p className="text-5xl font-serif font-bold text-sopi-teal mb-2">{COMPANY_STATS.satisfiedClients}+</p>
              <p className="text-slate-600 font-bold">clients accompagnés</p>
            </div>

            <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sopi-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-sopi-teal" size={40} />
              </div>
              <p className="text-5xl font-serif font-bold text-sopi-teal mb-2">{new Date().getFullYear() - COMPANY_STATS.founded}+</p>
              <p className="text-slate-600 font-bold">années d’expérience</p>
            </div>
          </div>
        </div>
      </section>

{/* Oussama Series (Projects) */}
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
        Nos projets
      </span>

      <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">
        Nos résidences à La Nouvelle Soukra
      </h2>

      <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
        Découvrez la série de résidences Oussama, des projets modernes conçus pour offrir confort,
        qualité et cadre de vie durable.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Oussama I */}
      <article className="bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">

        <div className="h-56">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-1/facade.jpg"
            alt="Résidence Oussama I"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sopi-teal/10 text-sopi-teal text-xs font-bold uppercase tracking-widest">
            <Sparkles size={16} />
            Disponibilités limitées
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
            Résidence Oussama I
          </h3>

          <p className="text-slate-600 mt-3 leading-relaxed">
            Première résidence de la série Oussama, actuellement en cours de réalisation,
            avec un nombre limité d’appartements disponibles.
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

          <div className="mt-6">
            <Link
              to="/appartements?projet=oussama-1"
              className="bg-sopi-teal text-white px-6 py-3 rounded-2xl font-bold hover:bg-sopi-teal-dark transition-all w-full text-center block"
            >
              Voir les disponibilités
            </Link>
          </div>
        </div>
      </article>


      {/* Oussama II (featured) */}
      <article className="bg-white rounded-3xl border-2 border-sopi-teal shadow-xl overflow-hidden scale-[1.02]">

        <div className="h-56">
          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
            alt="Résidence Oussama II"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sopi-teal/10 text-sopi-teal text-xs font-bold uppercase tracking-widest">
            <Sparkles size={16} />
            En cours
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
            Résidence Oussama II
          </h3>

          <p className="text-slate-600 mt-3 leading-relaxed">
            Résidence en cours de réalisation, située dans la continuité de la résidence Oussama I,
            avec des appartements modernes et des prestations de qualité.
          </p>

          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-600 font-semibold">
              <Calendar size={18} className="text-sopi-teal" />
              Livraison prévue : <span className="text-slate-900 font-bold">2028</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-semibold">
              <MapPin size={18} className="text-sopi-teal" />
              La Nouvelle Soukra
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/appartements?projet=oussama-2"
              className="bg-sopi-teal text-white px-6 py-3 rounded-2xl font-bold hover:bg-sopi-teal-dark transition-all w-full text-center block"
            >
              Voir les disponibilités
            </Link>
          </div>
        </div>
      </article>


      {/* Oussama III */}
      <article className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">

        <div className="relative h-56 overflow-hidden">

          <img
            src="https://pucnaybubqtzroujukeb.supabase.co/storage/v1/object/public/apartments/oussama-2/facade.jpg"
            alt="Résidence Oussama III"
            className="w-full h-full object-cover blur-[2px] scale-105"
          />

          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-[11px] uppercase tracking-[0.25em] font-semibold opacity-90">
                Projet en préparation
              </p>
            </div>
          </div>

        </div>

        <div className="p-8">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest">
            <Clock size={16} />
            À venir
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
            Résidence Oussama III
          </h3>

          <p className="text-slate-600 mt-3 leading-relaxed">
            Prochain projet en cours de conception, dans la continuité du même ensemble résidentiel.
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


{/* FAQ Rapide */}
<section className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-sopi-teal font-bold uppercase tracking-widest text-xs">
        Questions Fréquentes
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">
        Vos questions, nos réponses
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
          La livraison de la résidence Oussama I est prévue au 2ème semestre 2027,
          celle de la résidence Oussama II au 2ème semestre 2028,
          et celle de la résidence Oussama III au 2ème semestre 2029.
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
          Oui. Vous pouvez consulter les plans détaillés des appartements disponibles
          et obtenir toutes les informations nécessaires avant toute réservation.
        </p>
      </details>
            <details className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sopi-teal transition-all">
        <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
          <h4 className="text-lg font-bold text-slate-900">
            Peut-on visiter avant de prendre une décision ?
          </h4>
          <ArrowRight className="text-sopi-teal shrink-0 group-open:rotate-90 transition-transform" />
        </summary>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Oui. Il est possible de prendre rendez-vous pour visiter et échanger avec notre équipe
          avant de finaliser votre choix.
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
            SOPI assure un suivi après livraison ainsi que les garanties légales liées à la construction,
          afin d’accompagner ses clients après la remise des clés.
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



      
    </div>
  );
};

export default Home;
