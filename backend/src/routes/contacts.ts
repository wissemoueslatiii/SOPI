import { Router, Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();

// POST /api/contacts - Public (formulaire de contact)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { fullName, phone, email, propertyType, message } = req.body;

    if (!fullName || !phone || !email) {
      res.status(400).json({ message: 'Nom, telephone et email sont obligatoires' });
      return;
    }

    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert({
        full_name: fullName,
        phone,
        email,
        property_type: propertyType || null,
        message: message || null,
        source: 'website',
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    res.status(201).json({ id: data.id, message: 'Message envoye avec succes' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/contacts - Admin only
router.get('/', requireAuth, async (_req: AuthRequest, res: Response) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    res.json(data ?? []);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /api/contacts/:id - Admin only
router.patch('/:id', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .update(req.body)
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
