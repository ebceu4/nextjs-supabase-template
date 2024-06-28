import { createBrowserClient } from '@supabase/ssr'

//TODO: remove this if you use db only on server
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
