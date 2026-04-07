import { Request, Response } from "express";
import { listProjects, getProjectById } from "../services/projects.service";

export async function getAll(_req: Request, res: Response) {
  try {
    const data = await listProjects();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getOne(req: Request, res: Response) {
  try {
    const id = req.params.id as string;
    const project = await getProjectById(id);
    if (!project) return res.status(404).json({ message: "Projet introuvable" });
    res.json(project);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
