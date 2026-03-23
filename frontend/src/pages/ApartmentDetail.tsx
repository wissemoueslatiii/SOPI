import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Maximize2,
  Layers,
  Building2,
  ArrowUpDown,
  Compass,
  Ruler,
  FileText,
  Calendar,
  Mail,
} from "lucide-react";

import { getApartment } from "../services/api";

type Apartment = {
  id: string;

  type?: string | null;
  bloc?: string | null;
  etage?: string | number | null;

  surfaceTotale?: number | null;
  surfaceCommune?: number | null;
  surfaceDecouverte?: number | null;

  price?: number | null;
  status?: string | null;
  view?: string | null;
  description?: string | null;

  // ✅ URLs (déjà prêtes depuis backend)
  planImageUrl?: string | null;

  projectId?: string | null;
};

const ApartmentDetail: React.FC = () => {
const { projectId, idAppartement } = useParams();  const navigate = useNavigate();

  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  if (!projectId || !idAppartement) return;

  (async () => {
    try {
      setLoading(true);
      const data = await getApartment(projectId, idAppartement);
      setApartment(data);
    } finally {
      setLoading(false);
    }
  })();
}, [projectId, idAppartement]);

  if (loading) return <div className="pt-40 pb-20 text-center">Chargement...</div>;

  if (error) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Erreur</h2>
        <p className="text-slate-600 mt-2">{error}</p>
        <Link to="/appartements" className="text-sopi-teal mt-4 block font-bold underline">
          Retour à la liste
        </Link>
      </div>
    );
  }

  if (!apartment) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Appartement introuvable</h2>
        <Link to="/appartements" className="text-sopi-teal mt-4 block font-bold underline">
          Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-sopi-teal transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
        >
          <ChevronLeft size={16} />
          Retour aux lots
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Plan Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-sopi-teal">
                <FileText className="text-sopi-teal" />
                Plan Technique
              </h3>

              {apartment.planImageUrl ? (
                <div className="relative group">
                  <img
                    src={apartment.planImageUrl}
                    alt={`Plan ${apartment.id}`}
                    className="w-full h-auto rounded-xl bg-white p-4 shadow-inner"
                  />
                </div>
              ) : (
                <div className="text-center py-16 text-slate-400 font-bold">
                  Plan non disponible pour ce lot
                </div>
              )}
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-sopi-teal font-bold uppercase tracking-widest text-[10px]">
                Société Oussema Promotion Immobilière (SOPI)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Bloc</p>
                <p className="text-xl font-bold flex items-center gap-2 text-sopi-teal">
                  <Building2 size={18} />
                  {apartment.bloc ?? "—"}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Etage</p>
                <p className="text-xl font-bold flex items-center gap-2 text-sopi-teal">
                  <ArrowUpDown size={18} />
                  {apartment.etage ?? "—"}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Type de Lot</p>
                <p className="text-xl font-bold flex items-center gap-2 text-sopi-teal">
                  <Layers size={18} />
                  {apartment.type ?? "—"}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Surface commune</p>
                <p className="text-xl font-bold flex items-center gap-2 text-sopi-teal">
                  <Ruler size={18} />
                  {apartment.surfaceCommune ?? "—"} m²
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Terrasse decouverte</p>
                <p className="text-xl font-bold flex items-center gap-2 text-sopi-teal">
                  <Ruler size={18} />
                  {apartment.surfaceDecouverte ?? "—"} m²
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Surface Totale</p>
                <p className="text-xl font-bold flex items-center gap-2 text-sopi-teal">
                  <Maximize2 size={18} />
                  {apartment.surfaceTotale ?? "—"} m²
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Disponibilité</p>
                <p className="text-xl font-bold text-green-600">{apartment.status ?? "—"}</p>
              </div>
            </div>



            {/* Price Box */}
            <div className="bg-sopi-teal rounded-3xl p-8 text-white shadow-2xl shadow-sopi-teal/20 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sopi-peach mb-2">
                A partir de
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-serif font-bold">
                  {apartment.price
                    ? new Intl.NumberFormat("fr-FR", { style: "currency", currency: "TND" }).format(apartment.price)
                    : "Sur demande"}
                </span>
                {apartment.price && <span className="text-sopi-peach font-bold text-sm">TTC</span>}
              </div>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-sopi-peach text-sopi-teal py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg"
                >
                  <Calendar size={18} />
                  Planifier une visite
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;
