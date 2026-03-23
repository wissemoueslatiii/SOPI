
export enum ApartmentStatus {
  AVAILABLE = 'Disponible',
  RESERVED = 'Réservé',
  SOLD = 'Vendu'
}

export interface Apartment {
  id: string;
  type: string;
  bloc: string;
  etage: string;
  surface: number;
  surfacecommune: number;
  floor: number;
  price?: number;
  status: ApartmentStatus;
  view: string;
  parking: boolean;
  description: string;
  mainImage: string;
  gallery: string[];
  planImage: string;
  panoramaUrl?: string;
  projectId: ProjectId;
  balcon: boolean;
}

export interface ProjectInfo {
  name: string;
  location: string;
  deliveryDate: string;
  unitsCount: number;
  amenities: string[];
  panoramaUrl?: string;
}

export type ProjectId = "oussama-1" | "oussama-2";
