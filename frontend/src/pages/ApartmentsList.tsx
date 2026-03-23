import React, { useEffect, useMemo, useState } from "react";
import { Search, LayoutGrid, List } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import ApartmentCard from "../components/ApartmentCard";
import { ApartmentStatus, ProjectId } from "../types";
import { getApartments } from "../services/api";

type SortBy = "price-asc" | "price-desc" | "surface-desc";
type ProjectFilter = "all" | ProjectId;

type Apartment = {
  id: string;
  projectId?: string | null;
  type?: string | null;
  status?: string | null;
  price?: number | null;
  surfaceTotale?: number | null;

  // images déjà prêtes depuis backend
  mainImageUrl?: string | null;
  galleryUrls?: string[] | null;
  planImageUrl?: string | null;
  panoramaUrl?: string | null;

  // autres champs si ApartmentCard en a besoin
  bloc?: string | null;
  etage?: string | number | null;
  view?: string | null;
};

const ApartmentsList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // read query params
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const qpProjet = (params.get("projet") || "all") as ProjectFilter;
  const qpType = params.get("type") || "all";
  const qpStatut = params.get("statut") || "all";
  const qpTri = (params.get("tri") || "price-asc") as SortBy;

  const [filterProject, setFilterProject] = useState<ProjectFilter>(qpProjet);
  const [filterType, setFilterType] = useState<string>(qpType);
  const [filterStatus, setFilterStatus] = useState<string>(qpStatut);
  const [sortBy, setSortBy] = useState<SortBy>(qpTri);

  // data
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // sync filters to URL
  useEffect(() => {
    const next = new URLSearchParams();
    if (filterProject !== "all") next.set("projet", filterProject);
    if (filterType !== "all") next.set("type", filterType);
    if (filterStatus !== "all") next.set("statut", filterStatus);
    if (sortBy !== "price-asc") next.set("tri", sortBy);

    navigate({ pathname: location.pathname, search: next.toString() }, { replace: true });
  }, [filterProject, filterType, filterStatus, sortBy, navigate, location.pathname]);

  // fetch apartments from backend
useEffect(() => {
  let cancelled = false;

  (async () => {
    try {
      setLoading(true);
      setError(null);

      const params: Record<string, string> = {};

      if (filterProject !== "all") params.project_id = filterProject;
      if (filterType !== "all") params.type = filterType;
      if (filterStatus !== "all") params.status = filterStatus;

      const data = await getApartments(params);

      if (!cancelled) setApartments(data ?? []);
    } catch (e: any) {
      if (!cancelled) setError(e?.message || "Erreur lors du chargement");
    } finally {
      if (!cancelled) setLoading(false);
    }
  })();

  return () => {
    cancelled = true;
  };
}, [filterProject, filterType, filterStatus]);


  // dynamic types from data
  const types = useMemo(() => {
    const t = new Set<string>();
    for (const a of apartments) if (a.type) t.add(a.type);
    return Array.from(t);
  }, [apartments]);

  // sort locally (backend peut aussi trier, mais on garde ton UX)
  const sortedApartments = useMemo(() => {
    const copy = [...apartments];

    copy.sort((a, b) => {
      const aPrice = a.price ?? 0;
      const bPrice = b.price ?? 0;
      const aSurf = a.surfaceTotale ?? 0;
      const bSurf = b.surfaceTotale ?? 0;

      if (sortBy === "price-asc") return aPrice - bPrice;
      if (sortBy === "price-desc") return bPrice - aPrice;
      if (sortBy === "surface-desc") return bSurf - aSurf;
      return 0;
    });

    return copy;
  }, [apartments, sortBy]);

  const hasActiveFilters =
    filterProject !== "all" || filterType !== "all" || filterStatus !== "all" || sortBy !== "price-asc";

  const resetFilters = () => {
    setFilterProject("all");
    setFilterType("all");
    setFilterStatus("all");
    setSortBy("price-asc");
  };

  return (
    <div className="pt-32 pb-40 md:pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Filter Bar */}
<div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-8 md:mb-12 flex flex-col md:flex-row gap-6 items-center border border-slate-100 static md:sticky md:top-24 z-30">          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Projet */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-400 px-1">Projet</label>
              <select
                value={filterProject}
                onChange={(e) => setFilterProject(e.target.value as ProjectFilter)}
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-sopi-teal/40 outline-none"
              >
                <option value="all">Tous les projets</option>
                <option value="oussama-1">Oussama I</option>
                <option value="oussama-2">Oussama II</option>
              </select>
            </div>

            {/* Typologie */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-400 px-1">Typologie</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-sopi-teal/40 outline-none"
              >
                <option value="all">Tous les types</option>
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Statut */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-400 px-1">Statut</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-sopi-teal/40 outline-none"
              >
                <option value="all">Toutes disponibilités</option>
                {Object.values(ApartmentStatus).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Trier */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-400 px-1">Trier par</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="w-full bg-slate-50 border-none rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-sopi-teal/40 outline-none"
              >
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-20">Chargement...</div>
        ) : error ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Erreur</h3>
            <p className="text-slate-500 mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-sopi-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-sopi-teal-dark transition-all"
            >
              Réessayer
            </button>
          </div>
        ) : sortedApartments.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-500 font-medium">{sortedApartments.length} lot(s) trouvé(s)</p>
              {hasActiveFilters && (
                <button onClick={resetFilters} className="text-sopi-teal font-bold hover:text-sopi-teal-dark">
                  Réinitialiser
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedApartments.map((apt) => (
                <ApartmentCard key={apt.id} apartment={apt as any} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun résultat</h3>
            <p className="text-slate-500 mb-8">Essayez de modifier vos critères de recherche.</p>
            <button
              onClick={resetFilters}
              className="bg-sopi-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-sopi-teal-dark transition-all"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApartmentsList;
