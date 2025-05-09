import { supabase } from '$lib/supabaseClient'

export async function load() {
  if (!supabase) {
    throw new Error("Supabase is not initialized.")
  }

  const { data, error } = await supabase.from('BlogPost').select('id, Title, Desc')

  if (error) {
    console.error('Supabase fetch error:', error)
    throw new Error('Failer to load blog posts')
  }

  return { posts: data }
}