import { getAllPosts } from '$lib/posts';

export const prerender = true;

export function load() {
  const recent = getAllPosts().slice(0, 3); // newest first
  return { recent };
}
