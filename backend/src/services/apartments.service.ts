import { supabaseAdmin } from "../config/supabase";
import { toCamelCaseApartment } from "../types/index";

export type ApartmentsFilters = {
  project_id?: string;
  type?: string;
  status?: string;
};

export async function listApartments(filters: ApartmentsFilters) {
  let query = supabaseAdmin.from("apartments").select("*");

  if (filters.project_id) query = query.eq("project_id", filters.project_id);
  if (filters.type) query = query.eq("type", filters.type);
  if (filters.status) query = query.eq("status", filters.status);

  const { data, error } = await query.order("id_appartement", { ascending: true });
  if (error) throw new Error(error.message);

  return (data ?? []).map(toCamelCaseApartment);
}

export async function getApartmentById(
  projectId: string,
  idAppartement: string
) {
  const { data, error } = await supabaseAdmin
    .from("apartments")
    .select("*")
    .eq("project_id", projectId)
    .eq("id_appartement", idAppartement)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data ? toCamelCaseApartment(data) : null;
}

export async function createApartment(payload: any) {
  const { data, error } = await supabaseAdmin
    .from("apartments")
    .insert(payload)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return toCamelCaseApartment(data);
}

export async function updateApartment(id: string, payload: any) {
  const { data, error } = await supabaseAdmin
    .from("apartments")
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return toCamelCaseApartment(data);
}

export async function deleteApartment(id: string) {
  const { error } = await supabaseAdmin.from("apartments").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
