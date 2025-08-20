// Auth types
export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Session {
  user: User
  access_token: string
  refresh_token: string
  expires_at: number
}

// Account types
export interface Account {
  id: string
  name: string
  business_name: string
  address: string
  phone: string
  email: string
  logo_url?: string
  settings: AccountSettings
  created_at: string
  updated_at: string
}

export interface AccountSettings {
  timezone: string
  currency: string
  booking_advance_days: number
  cancellation_policy: string
}

// Staff types
export interface Staff {
  id: string
  account_id: string
  name: string
  email: string
  phone: string
  role: StaffRole
  specialties: string[]
  avatar_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type StaffRole = 'owner' | 'manager' | 'stylist' | 'assistant' | 'booth_renter'

// Contact types
export interface Contact {
  id: string
  account_id: string
  name: string
  email: string
  phone: string
  date_of_birth?: string
  address?: string
  notes?: string
  tags: string[]
  created_at: string
  updated_at: string
}

// Service types
export interface Service {
  id: string
  account_id: string
  name: string
  description?: string
  duration: number // in minutes
  price: number
  category_id: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ServiceCategory {
  id: string
  account_id: string
  name: string
  description?: string
  color: string
  created_at: string
  updated_at: string
}

// Appointment types
export interface Appointment {
  id: string
  account_id: string
  contact_id: string
  staff_id: string
  service_id: string
  start_time: string
  end_time: string
  status: AppointmentStatus
  notes?: string
  total_amount: number
  deposit_amount: number
  created_at: string
  updated_at: string
}

export type AppointmentStatus = 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show'

// Payment types
export interface Payment {
  id: string
  appointment_id: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus
  stripe_payment_intent_id?: string
  created_at: string
  updated_at: string
}

export type PaymentMethod = 'cash' | 'card' | 'stripe' | 'deposit'
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'

// CRM types
export interface Note {
  id: string
  contact_id: string
  staff_id: string
  content: string
  type: NoteType
  created_at: string
  updated_at: string
}

export type NoteType = 'general' | 'preference' | 'allergy' | 'medical' | 'preference'

export interface File {
  id: string
  contact_id: string
  name: string
  url: string
  type: string
  size: number
  created_at: string
}

export interface Waiver {
  id: string
  contact_id: string
  type: string
  content: string
  signed_at: string
  created_at: string
}

// Marketing types
export interface Campaign {
  id: string
  account_id: string
  name: string
  type: CampaignType
  status: CampaignStatus
  content: string
  target_audience: string[]
  scheduled_at?: string
  sent_at?: string
  created_at: string
  updated_at: string
}

export type CampaignType = 'sms' | 'email' | 'social'
export type CampaignStatus = 'draft' | 'scheduled' | 'sent' | 'cancelled'

// Analytics types
export interface Analytics {
  total_appointments: number
  total_revenue: number
  average_appointment_value: number
  top_services: Service[]
  top_staff: Staff[]
  appointment_trends: AppointmentTrend[]
  revenue_trends: RevenueTrend[]
}

export interface AppointmentTrend {
  date: string
  count: number
}

export interface RevenueTrend {
  date: string
  revenue: number
} 