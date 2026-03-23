import React from "react";
import { Link } from "react-router-dom";
import { ApartmentStatus } from "../types";
import { Maximize2, Layers, MapPin, ChevronRight } from "lucide-react";

interface Apartment {
  id: string;
  projectId: string;
  type?: string | null;
  bloc?: string | null;
  etage?: string | number | null;
  surfaceTotale?: number | null;
  price?: number | null;
  status?: ApartmentStatus;
  view?: string | null;
  mainImageUrl?: string | null;
}

interface Props {
  apartment: Apartment;
}

const ApartmentCard: React.FC<Props> = ({ apartment }) => {
  const statusColors = {
    [ApartmentStatus.AVAILABLE]: "bg-green-100 text-green-700",
    [ApartmentStatus.RESERVED]: "bg-orange-100 text-orange-700",
    [ApartmentStatus.SOLD]: "bg-slate-100 text-slate-500",
  };

  return (
    <Link
      to={`/appartements/${apartment.projectId}/${apartment.id}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 block"
    >
      {/* PLAN IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        {apartment.mainImageUrl ? (
          <img
            src={apartment.mainImageUrl}
            alt={`Plan ${apartment.id}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
            Plan non disponible
          </div>
        )}

        <div className="absolute top-4 left-4 flex gap-2">
          {apartment.status && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                statusColors[apartment.status]
              }`}
            >
              {apartment.status}
            </span>
          )}

          {apartment.type && (
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sopi-teal">
              {apartment.type}
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-sopi-teal">
              Lot {apartment.id}
            </h3>

            <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
              <MapPin size={12} className="text-sopi-teal" />
              Étage {apartment.etage ?? "—"} • {apartment.view ?? "Vue"}
            </p>
          </div>

          {apartment.price && (
            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase font-bold">
                A partir de
              </p>
              <p className="text-lg font-bold text-sopi-teal">
                {new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "TND",
                }).format(apartment.price)}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 py-4 border-y border-slate-50 mb-4">
          <div className="flex items-center gap-2 text-slate-600">
            <Maximize2 size={16} className="text-sopi-teal" />
            <span className="text-sm font-semibold">
              {apartment.surfaceTotale ?? "—"} m²
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <Layers size={16} className="text-sopi-teal" />
            <span className="text-sm font-semibold">
              {apartment.type ?? "—"}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sopi-teal font-bold text-sm group-hover:text-sopi-teal-dark">
          <span>Voir le plan détaillé</span>
          <div className="bg-sopi-peach/30 p-1 rounded-full group-hover:bg-sopi-peach transition-colors">
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
