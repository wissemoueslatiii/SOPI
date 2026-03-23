import { supabaseAdmin } from "../config/supabase";

export function publicStorageUrl(bucket: string, path?: string | null) {
  if (!path) return null;
  return supabaseAdmin.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

export function publicStorageUrls(bucket: string, paths?: unknown) {
  if (!Array.isArray(paths)) return [];
  return paths
    .filter((p): p is string => typeof p === "string" && p.length > 0)
    .map((p) => publicStorageUrl(bucket, p))
    .filter((u): u is string => typeof u === "string" && u.length > 0);
}
