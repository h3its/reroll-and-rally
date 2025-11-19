import { getAllPosts } from '$lib/wiki';

export const prerender = true;

export function load() {
  return { posts: getAllPosts() };
}
