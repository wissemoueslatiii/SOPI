import { useState, useEffect } from 'react';
import type { Apartment } from '../types';

// Pour l'instant, importe les donnees statiques.
// Quand le backend sera connecte, basculer sur getApartments() de ../services/api
import { APARTMENTS } from '../data';

export function useApartments(filters?: Record<string, string>) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      let result = [...APARTMENTS];

      if (filters?.projectId) {
        result = result.filter(a => a.projectId === filters.projectId);
      }
      if (filters?.type) {
        result = result.filter(a => a.type === filters.type);
      }
      if (filters?.status) {
        result = result.filter(a => a.status === filters.status);
      }

      setApartments(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]);

  return { apartments, loading, error };
}
