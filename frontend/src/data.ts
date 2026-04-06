import { Apartment, ApartmentStatus, ProjectInfo } from './types';
import { COMPANY_STATS, COMPANY_STRENGTHS, TESTIMONIALS, FAQ_HOME, FAQ_RESIDENCE } from './constants';

export { COMPANY_STATS, COMPANY_STRENGTHS, TESTIMONIALS, FAQ_HOME, FAQ_RESIDENCE };

export const PROJECT_INFO: ProjectInfo = {
  name: "Résidence Oussama 2",
  location: "La Nouvelle Soukra, Tunis",
  deliveryDate: "2ème semestre 2028",
  unitsCount: 24,
  amenities: ["Conciergerie 24/7", "Salle de sport", "Jardins méditerranéens", "Parking sous-sol sécurisé", "Domotique intelligente"],
  panoramaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=4000&q=80"
};

export const APARTMENTS: Apartment[] = [
  {
    id: "A2.7",
    type: "S+1",
    bloc: "A",
    etage: "2éme",
    surfacecommune: 10.13,
    surface: 50.67,
    floor: 2,
    price: 215000,
    status: ApartmentStatus.AVAILABLE,
    view: "Vue sur Jardins",
    balcon: true,
    parking: true,
    projectId: "oussama-1",
    description: "Appartement S+1 optimisé au sein de la nouvelle Résidence Oussama 2. Design fonctionnel avec finitions SOPI de haute qualité.",
    mainImage: "/images/image7.jpg",
    gallery: ["/images/image8.jpg", "/images/image9.jpg"],
    planImage: "/images/plan.jpg",
    panoramaUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=4000&q=80"
  },
  {
    id: "A2.1",
    type: "S+2",
    bloc: "A",
    etage: "2éme",
    surfacecommune: 9.13,
    surface: 112,
    floor: 1,
    price: 450000,
    status: ApartmentStatus.AVAILABLE,
    view: "Vue sur Jardins",
    balcon: true,
    parking: true,
    projectId: "oussama-1",
    description: "Appartement de haut standing au sein de la Résidence Oussama 2. Matériaux nobles et luminosité exceptionnelle.",
    mainImage: "/images/image7.jpg",
    gallery: ["/images/image8.jpg", "/images/image9.jpg"],
    planImage: "/images/plan.jpg",
    panoramaUrl: "https://images.unsplash.com/photo-1600607687940-4e7a6a35d119?auto=format&fit=crop&w=4000&q=80"
  },
  {
    id: "A2.3",
    type: "S+3",
    bloc: "A",
    etage: "2éme",
    surfacecommune: 10.13,
    surface: 165,
    floor: 2,
    price: 680000,
    status: ApartmentStatus.AVAILABLE,
    view: "Vue sur Jardins",
    balcon: true,
    parking: true,
    projectId: "oussama-2",
    description: "Vaste S+3 offrant des prestations de luxe signées SOPI. Espaces de vie optimisés et finitions raffinées.",
    mainImage: "/images/image7.jpg",
    gallery: ["/images/image8.jpg", "/images/image9.jpg"],
    planImage: "/images/plan.jpg",
    panoramaUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=4000&q=80"
  }
];
