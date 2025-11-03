import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Reservation = {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_type: 'mattress_removal' | 'furniture_delivery';
  pickup_address: string;
  delivery_address?: string;
  reservation_date: string;
  reservation_time: string;
  special_instructions?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
};
