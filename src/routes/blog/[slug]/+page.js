import { error } from '@sveltejs/kit';
import { getPost } from '$lib/posts';

export const prerender = true;

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) throw error(404, 'Not found');
  return { post };
}
