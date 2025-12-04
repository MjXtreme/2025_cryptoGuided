import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Portfolio types
export interface PortfolioItem {
  id: string
  asset_name: string
  asset_type: string
  quantity: number
  value: number
  change_percent: number
  created_at?: string
}

