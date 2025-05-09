<script>
	import '../app.css'
	import { onMount } from 'svelte'
  
  </script>
  
  <div class="min-h-screen flex flex-col bg-base-100 text-base-content">
	<div class="navbar bg-base-200 shadow-sm px-4">
	  <div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">Tacos On Mars</a>
	  </div>
	  <div class="flex-none gap-2">
		<a href="/blog" class="btn btn-sm btn-outline">Blog</a>
		<a href="/about" class="btn btn-sm btn-outline">About</a>
	  </div>
	</div>
  
	<main class="flex-grow">
	  <slot />
	</main>
  
	<footer class="footer p-4 bg-base-200 text-base-content text-center">
	  <div class="w-full text-sm">
		© {new Date().getFullYear()} MyBlog. Built with SvelteKit + DaisyUI.
	  </div>
	</footer>
  </div>
  


