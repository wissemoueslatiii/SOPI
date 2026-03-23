import { GoogleGenAI } from "@google/genai";
import { supabaseAdmin } from "../config/supabase";

export async function chatWithGemini(userMessage: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("Cle API Gemini non configuree");

  const { data: apartments } = await supabaseAdmin
    .from("apartments")
    .select("id, type, surface, floor, price, status, view, project_id");

  const { data: projects } = await supabaseAdmin.from("projects").select("*");

  const contextText = `
Projets SOPI: ${JSON.stringify(projects ?? [])}
Appartements disponibles: ${JSON.stringify(apartments ?? [])}
  `.trim();

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: userMessage,
    config: {
      systemInstruction:
        `Tu es l'assistant virtuel de SOPI... Contexte: ${contextText}`,
      temperature: 0.7,
    },
  });

  return response.text || "Désolé, je n'ai pas pu générer une réponse.";
}
