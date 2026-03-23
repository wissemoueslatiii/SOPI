-- =============================================
-- SOPI - Schema Supabase
-- Executer ce script dans le SQL Editor de Supabase
-- =============================================

-- Table: projects
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  delivery_date TEXT NOT NULL,
  units_count INTEGER NOT NULL DEFAULT 0,
  amenities TEXT[] DEFAULT '{}',
  panorama_url TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Table: apartments
CREATE TABLE IF NOT EXISTS apartments (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  bloc TEXT NOT NULL,
  etage TEXT NOT NULL,
  surface NUMERIC(10,2) NOT NULL,
  surface_commune NUMERIC(10,2) NOT NULL DEFAULT 0,
  floor INTEGER NOT NULL,
  price NUMERIC(12,2),
  status TEXT NOT NULL DEFAULT 'Disponible',
  view TEXT,
  parking BOOLEAN DEFAULT false,
  balcon BOOLEAN DEFAULT false,
  description TEXT,
  main_image TEXT,
  gallery TEXT[] DEFAULT '{}',
  plan_image TEXT,
  panorama_url TEXT,
  project_id TEXT NOT NULL REFERENCES projects(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Table: contacts
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  property_type TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Table: leads
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id UUID REFERENCES contacts(id),
  type TEXT NOT NULL,
  apartment_id TEXT REFERENCES apartments(id),
  project_id TEXT REFERENCES projects(id),
  notes TEXT,
  scheduled_date TIMESTAMPTZ,
  status TEXT DEFAULT 'pending',
  assigned_to UUID,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================
-- RLS (Row Level Security)
-- =============================================

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE apartments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Projects: lecture publique
CREATE POLICY "projects_select" ON projects FOR SELECT USING (true);

-- Apartments: lecture publique
CREATE POLICY "apartments_select" ON apartments FOR SELECT USING (true);

-- Contacts: insertion publique (formulaire), lecture admin
CREATE POLICY "contacts_insert" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "contacts_select" ON contacts FOR SELECT USING (auth.role() = 'authenticated');

-- Leads: tout admin only
CREATE POLICY "leads_all" ON leads FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- SEED DATA
-- =============================================

-- Projet Oussama 2
INSERT INTO projects (id, name, location, delivery_date, units_count, amenities, panorama_url) VALUES
('oussama-2', 'Résidence Oussama 2', 'La Nouvelle Soukra, Tunis', '4ème trimestre 2028', 24,
  ARRAY['Conciergerie 24/7', 'Salle de sport', 'Jardins méditerranéens', 'Parking sous-sol sécurisé', 'Domotique intelligente'],
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=4000&q=80')
ON CONFLICT (id) DO NOTHING;

-- Appartements
INSERT INTO apartments (id, type, bloc, etage, surface, surface_commune, floor, price, status, view, parking, balcon, description, main_image, gallery, plan_image, panorama_url, project_id) VALUES
('A2.7', 'S+1', 'A', '2éme', 50.67, 10.13, 2, 215000, 'Disponible', 'Vue sur Jardins', true, true,
  'Appartement S+1 optimisé au sein de la nouvelle Résidence Oussama 2.',
  '/images/image7.jpg', ARRAY['/images/image8.jpg', '/images/image9.jpg'], '/images/plan.jpg',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=4000&q=80', 'oussama-2'),
('A2.1', 'S+2', 'A', '2éme', 112, 9.13, 1, 450000, 'Disponible', 'Vue sur Jardins', true, true,
  'Appartement de haut standing au sein de la Résidence Oussama 2.',
  '/images/image7.jpg', ARRAY['/images/image8.jpg', '/images/image9.jpg'], '/images/plan.jpg',
  'https://images.unsplash.com/photo-1600607687940-4e7a6a35d119?auto=format&fit=crop&w=4000&q=80', 'oussama-2'),
('A2.3', 'S+3', 'A', '2éme', 165, 10.13, 2, 680000, 'Disponible', 'Vue sur Jardins', true, true,
  'Vaste S+3 offrant des prestations de luxe signées SOPI.',
  '/images/image7.jpg', ARRAY['/images/image8.jpg', '/images/image9.jpg'], '/images/plan.jpg',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=4000&q=80', 'oussama-2')
ON CONFLICT (id) DO NOTHING;
