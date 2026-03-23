import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '21627604160';
const PHONE_E164 = '+21627604160';
const EMAIL = 'contact@sopi.tn';
const mapLink = "https://maps.app.goo.gl/k1neeF9x8uWpCQeC8?g_st=ic";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const fullName = String(form.get('fullName') || '');
    const phone = String(form.get('phone') || '');
    const email = String(form.get('email') || '');
    const type = String(form.get('type') || '');
    const message = String(form.get('message') || '');

    const text =
      `Bonjour SOPI,%0A` +
      `Je souhaite être rappelé(e).%0A%0A` +
      `Nom: ${encodeURIComponent(fullName)}%0A` +
      `Téléphone: ${encodeURIComponent(phone)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Type de bien: ${encodeURIComponent(type)}%0A` +
      `Précisions: ${encodeURIComponent(message || '-')}%0A`;

    // Ouvre WhatsApp Web / app
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sopi-teal font-bold uppercase tracking-[0.2em] text-xs">Société Oussema Promotion Immobilière</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-4 mb-6">Parlons de votre futur logement</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Visite privée, présentation des plans et accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif font-bold mb-8 text-sopi-teal">Nos coordonnées</h3>

              <div className="space-y-8">
                <a href={`tel:${PHONE_E164}`} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-sopi-peach/30 rounded-2xl flex items-center justify-center text-sopi-teal shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Standard téléphonique</p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-sopi-teal transition-colors">+216 27 604 160</p>
                    <p className="text-sm text-slate-500">Ouvert de 9h à 18h</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Ventes & WhatsApp</p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">+216 27 604 160</p>
                    <p className="text-sm text-slate-500">Assistance rapide</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-sopi-teal/10 rounded-2xl flex items-center justify-center text-sopi-teal shrink-0 group-hover:bg-sopi-teal group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Email</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-sopi-teal transition-colors">{EMAIL}</p>
                    <p className="text-sm text-slate-500">Réponse sous 24h ouvrées</p>
                  </div>
                </a>

                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex gap-6 group">
                  <div className="w-14 h-14 bg-sopi-teal/10 rounded-2xl flex items-center justify-center text-sopi-teal shrink-0 group-hover:bg-sopi-teal group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Siège Social SOPI</p>
                    <p className="text-lg font-bold text-slate-900 leading-tight group-hover:text-sopi-teal transition-colors">
                      B09, La perle Bleue, Le Relais, la Marsa
                    </p>
                    <p className="text-xs text-blue-600 font-bold mt-1">Ouvrir l'itinéraire</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl shadow-sopi-teal/5 relative border border-slate-100">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-sopi-peach text-sopi-teal rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-sopi-teal mb-4">Demande prête</h2>
                  <p className="text-slate-600 text-lg mb-8">
                    WhatsApp s’est ouvert avec votre message prérempli. Envoyez-le pour être rappelé(e).
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all"
                    >
                      Ouvrir WhatsApp
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-sopi-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-sopi-teal-dark transition-all"
                    >
                      Modifier
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nom Complet</label>
                      <input
                        name="fullName"
                        required
                        type="text"
                        placeholder="M. / Mme Nom"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Téléphone</label>
                      <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="+216 -- --- ---"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Type de bien souhaité</label>
                    <select
                      name="type"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all appearance-none cursor-pointer"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>Sélectionnez une option</option>
                      <option value="S+1">S+1</option>
                      <option value="S+2">S+2</option>
                      <option value="S+3">S+3</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Précisions (facultatif)</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Comment pouvons-nous vous aider ?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-sopi-teal hover:bg-sopi-teal-dark text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-sopi-teal/20 transition-all flex items-center justify-center gap-3 group"
                    >
                      Envoyer via WhatsApp
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-6 px-8 leading-tight">
                      En cliquant, WhatsApp s’ouvre avec votre message prérempli. Réponse sous 24h ouvrées.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;