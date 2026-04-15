import React from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '21627604160';
const PHONE_E164 = '+21627604160';
const EMAIL = 'contact@sopi-immobiliere.com';
const mapLink = 'https://maps.app.goo.gl/FaJ7vG5MzWWwHTUZA?g_st=ic';

// EmailJS
const EMAILJS_SERVICE_ID = 'service_edsrhpf';
const EMAILJS_TEMPLATE_ID = 'template_eeo0qlp';
const EMAILJS_PUBLIC_KEY = 'bEwW_7kqm3OgzhjGn';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get('fullName') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      type: String(formData.get('type') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      setSending(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error('Erreur EmailJS:', err);
      setError("Une erreur s'est produite lors de l'envoi du message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sopi-teal font-bold uppercase tracking-[0.2em] text-xs">
            Société Oussema De Promotion Immobilière
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mt-4 mb-6">
            Parlons de votre futur logement
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Visite privée, présentation des plans et accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif font-bold mb-8 text-sopi-teal">
                Nos coordonnées
              </h3>

              <div className="space-y-8">
                <a href={`tel:${PHONE_E164}`} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-sopi-peach/30 rounded-2xl flex items-center justify-center text-sopi-teal shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Standard téléphonique
                    </p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-sopi-teal transition-colors">
                      +216 27 604 160
                    </p>
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
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Ventes & WhatsApp
                    </p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                      +216 27 604 160
                    </p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL}`} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-sopi-teal/10 rounded-2xl flex items-center justify-center text-sopi-teal shrink-0 group-hover:bg-sopi-teal group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Email
                    </p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-sopi-teal transition-colors">
                      {EMAIL}
                    </p>
                  </div>
                </a>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-sopi-teal/10 rounded-2xl flex items-center justify-center text-sopi-teal shrink-0 group-hover:bg-sopi-teal group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Siège Social SOPI
                    </p>
                    <p className="text-lg font-bold text-slate-900 leading-tight group-hover:text-sopi-teal transition-colors">
                      B09, La perle Bleue, Le Relais, la Marsa
                    </p>
                    <p className="text-xs text-blue-600 font-bold mt-1">
                      Ouvrir l'itinéraire
                    </p>
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
                  <h2 className="text-3xl font-serif font-bold text-sopi-teal mb-4">
                    Message envoyé
                  </h2>
                  <p className="text-slate-600 text-lg mb-8">
                    Votre demande a bien été transmise. Un conseiller SOPI vous répondra
                    dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-sopi-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-sopi-teal-dark transition-all"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                        Nom complet
                      </label>
                      <input
                        name="fullName"
                        required
                        type="text"
                        placeholder="M. / Mme"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                        Téléphone
                      </label>
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
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Type de bien souhaité
                    </label>
                    <select
                      name="type"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-sopi-teal outline-none transition-all appearance-none cursor-pointer"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Choisissez le type d'appartement
                      </option>
                      <option value="S+1">S+1</option>
                      <option value="S+2">S+2</option>
                      <option value="S+3">S+3</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                      Précisions (facultatif)
                    </label>
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
                      disabled={sending}
                      className="w-full bg-sopi-teal hover:bg-sopi-teal-dark disabled:opacity-70 text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-sopi-teal/20 transition-all flex items-center justify-center gap-3 group"
                    >
                      {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-6 px-8 leading-tight">
                      En cliquant, votre message est envoyé directement par email à notre équipe.
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