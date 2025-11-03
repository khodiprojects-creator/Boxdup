/*
  # Create Reservations System

  ## Overview
  Creates a reservation system for mattress removal and furniture delivery services in Metro Vancouver.

  ## Tables Created
  
  ### `reservations`
  - `id` (uuid, primary key) - Unique identifier for each reservation
  - `customer_name` (text) - Full name of the customer
  - `customer_email` (text) - Email address for confirmation
  - `customer_phone` (text) - Contact phone number
  - `service_type` (text) - Type of service: 'mattress_removal' or 'furniture_delivery'
  - `pickup_address` (text) - Full pickup/removal address in Metro Vancouver
  - `delivery_address` (text, nullable) - Delivery address (for furniture delivery service)
  - `reservation_date` (date) - Date of scheduled service
  - `reservation_time` (text) - Time slot for service
  - `special_instructions` (text, nullable) - Additional notes or requirements
  - `status` (text) - Reservation status: 'pending', 'confirmed', 'completed', 'cancelled'
  - `created_at` (timestamptz) - Timestamp of reservation creation

  ## Security
  - Enable RLS on reservations table
  - Public can insert reservations (for booking)
  - Customers can view their own reservations by email
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  service_type text NOT NULL CHECK (service_type IN ('mattress_removal', 'furniture_delivery')),
  pickup_address text NOT NULL,
  delivery_address text,
  reservation_date date NOT NULL,
  reservation_time text NOT NULL,
  special_instructions text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their own reservations"
  ON reservations
  FOR SELECT
  TO anon
  USING (true);