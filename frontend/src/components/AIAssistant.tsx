
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { PROJECT_INFO, APARTMENTS } from '../data';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Bienvenue chez SOPI ! Je suis votre conseiller virtuel pour nos projets immobiliers aux Berges du Lac. Comment puis-je vous accompagner dans votre recherche ?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      
      const systemInstruction = `
        Tu es l'assistant virtuel expert de "SOPI" (Société Oussema Promotion Immobilière).
        Informations du siège : Rue du Lac Windermere, Tunis.
        Informations actuelles : ${JSON.stringify(PROJECT_INFO)}
        Lots disponibles : ${JSON.stringify(APARTMENTS)}
        
        Tes missions :
        1. Incarner le prestige et le sérieux de la promotion immobilière SOPI.
        2. Répondre aux questions sur les surfaces, prix et statuts.
        3. Promouvoir l'emplacement premium aux Berges du Lac.
        4. Inciter l'utilisateur à venir visiter notre bureau de vente ou à demander un rappel.
        5. Ton ton est institutionnel, chaleureux et précis. Réponds en Français.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ parts: [{ text: `${m.role === 'bot' ? 'Assistant' : 'Utilisateur'}: ${m.text}` }] })), { parts: [{ text: userMsg }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "Pardon, je n'ai pas pu traiter votre demande. N'hésitez pas à contacter nos conseillers au siège.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Nos lignes sont actuellement saturées. Appelez-nous directement au +216 71 000 000 pour une assistance immédiate." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 bg-sopi-teal text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 border border-white/10"
      >
        <div className="relative">
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-sopi-peach rounded-full border-2 border-sopi-teal animate-pulse"></span>
        </div>
        <span className="font-bold text-sm hidden md:inline">Conseiller SOPI</span>
      </button>

      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 md:inset-auto md:bottom-24 md:right-8 md:w-96 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col border border-slate-100 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-sopi-teal p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sopi-peach text-sopi-teal rounded-xl flex items-center justify-center font-bold">S</div>
              <div>
                <p className="text-white font-bold text-sm">Assistant SOPI</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-white/60 text-[8px] font-bold uppercase tracking-widest">Siège Social</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-5 overflow-y-auto space-y-4 bg-slate-50 max-h-[400px]"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-sopi-teal text-white' : 'bg-white text-slate-700 shadow-sm border border-slate-100'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-sopi-teal" />
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Analyse de l'inventaire...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre message..."
                className="w-full bg-slate-100 border-none rounded-xl pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-sopi-teal outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="absolute right-2 top-2 w-8 h-8 bg-sopi-teal text-white rounded-lg flex items-center justify-center hover:bg-sopi-teal-dark disabled:bg-slate-300 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
