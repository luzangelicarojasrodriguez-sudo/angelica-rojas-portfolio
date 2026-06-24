/**
 * lib/supabase.ts
 * Cliente Supabase compartido para todo el proyecto.
 * Usa PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_ANON_KEY del .env
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = import.meta.env.PUBLIC_SUPABASE_URL  as string;
const supabaseKey  = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Faltan variables de entorno de Supabase. Revisa tu archivo .env');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

/* ── Tipos TypeScript para las tablas ───────────────────────────────────── */

export interface ContactMessage {
  id?:         number;
  created_at?: string;
  name:        string;
  email:       string;
  subject?:    string;
  message:     string;
  read?:       boolean;
}
