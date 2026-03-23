import { Request, Response } from "express";
import {
  listApartments,
  getApartmentById,
  createApartment,
  updateApartment,
  deleteApartment,
} from "../services/apartments.service";
type Params = { id: string };

export async function getAll(req: Request<Params>, res: Response) {
  try {
    const { project_id, type, status } = req.query;

    const data = await listApartments({
      project_id: project_id as string | undefined,
      type: type as string | undefined,
      status: status as string | undefined,
    });

    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getOne(
  req: Request<{ projectId: string; idAppartement: string }>,
  res: Response
) {
  try {
    const { projectId, idAppartement } = req.params;

    const apt = await getApartmentById(projectId, idAppartement);

    if (!apt) {
      return res.status(404).json({ message: "Appartement introuvable" });
    }

    res.json(apt);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export async function create(req: Request<Params>, res: Response) {
  try {
    const created = await createApartment(req.body);
    res.status(201).json(created);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function update(req: Request<Params>, res: Response) {
  try {
    const updated = await updateApartment(req.params.id, req.body);
    res.json(updated);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}

export async function remove(req: Request<Params>, res: Response) {
  try {
    await deleteApartment(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
}
