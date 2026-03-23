import { Request, Response } from "express";
import { chatWithGemini } from "../services/ai.service";

export async function chat(req: Request, res: Response) {
  try {
    const { userMessage } = req.body;
    if (!userMessage) return res.status(400).json({ message: "Message requis" });

    const reply = await chatWithGemini(userMessage);
    res.json({ reply });
  } catch (err: any) {
    res.status(500).json({ message: "Erreur du service IA" });
  }
}
