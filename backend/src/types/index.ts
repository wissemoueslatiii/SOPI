import { publicStorageUrl, publicStorageUrls } from "../utils/storage";

export interface ApartmentRow {
  id: string;
  type: string;
  bloc: string;
  etage: string;
  surface: number;
  surface_commune: number;
  floor: number;
  price: number | null;
  status: string;
  view: string;
  parking: boolean;
  balcon: boolean;
  description: string;
  main_image: string;
  gallery: string[];
  plan_image: string;
  panorama_url: string | null;
  project_id: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectRow {
  id: string;
  name: string;
  location: string;
  delivery_date: string;
  units_count: number;
  amenities: string[];
  panorama_url: string | null;
  status: string;
  created_at: string;
}

export interface ContactRow {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  property_type: string | null;
  message: string | null;
  source: string;
  status: string;
  created_at: string;
}

export interface LeadRow {
  id: string;
  contact_id: string | null;
  type: string;
  apartment_id: string | null;
  project_id: string | null;
  notes: string | null;
  scheduled_date: string | null;
  status: string;
  assigned_to: string | null;
  created_at: string;
  updated_at: string;
}

// Helpers pour convertir snake_case DB → camelCase frontend
export function toCamelCaseApartment(row: any) {
  return {
    id: row.id_appartement,
    uuid: row.id,
    type: row.type,
    bloc: row.bloc,
    etage: row.etage,

    surfaceTotale: row.surface_totale,
    surfaceCommune: row.surface_commune,
    surfaceDecouverte: row.surface_decouverte,

    price: row.price,
    status: row.status,
    view: row.view,
    description: row.description,

    // ✅ URLs prêtes pour le front
    mainImageUrl: publicStorageUrl("apartments", row.main_image),
    galleryUrls: publicStorageUrls("apartments", row.gallery),
    planImageUrl: publicStorageUrl("apartments", row.plan_image),

    panoramaUrl: row.panorama_url,
    projectId: row.project_id,
  };
}


