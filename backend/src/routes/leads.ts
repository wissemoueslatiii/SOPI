import { Router, Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase.js';
import { requireAuth, AuthRequest } from '../middleware/auth.js';

const router = Router();

// POST /api/leads - Public (demande brochure, visite, appel)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { type, apartmentId, projectId, notes, contactId } = req.body;

    if (!type) {
      res.status(400).json({ message: 'Le type de lead est obligatoire' });
      return;
    }

    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert({
        type,
        apartment_id: apartmentId || null,
        project_id: projectId || null,
        notes: notes || null,
        contact_id: contactId || null,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    res.status(201).json({ id: data.id });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/leads - Admin only
router.get('/', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    let query = supabaseAdmin.from('leads').select('*');

    const { status, type } = req.query;
    if (status) query = query.eq('status', status as string);
    if (type) query = query.eq('type', type as string);

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    res.json(data ?? []);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /api/leads/:id - Admin only
router.patch('/:id', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('leads')
      .update({ ...req.body, updated_at: new Date().toISOString() })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    res.json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
