import { supabase } from '$lib/supabaseClient'

export async function load({ params }) {
  const { id } = params
  const { data, error } = await supabase
    .from('BlogPost')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
    return {
      status: 404,
      error: new Error('Post not found'),
    }
  }

  return { post: data }
}