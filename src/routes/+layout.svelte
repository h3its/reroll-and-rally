<script>
  import '../app.css';
  import { page } from '$app/stores';

  // active link helper
  $: current = $page.url.pathname;
  const isActive = (path) => current === path || current.startsWith(path + '/');

  // OPTIONAL: if you already made a ThemeToggle component, uncomment this:
  // import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="min-h-screen flex flex-col bg-base-100 text-base-content">
  <!-- Navbar -->
  <div class="navbar bg-neutral text-neutral-content sticky top-0 z-50 shadow-md">
    <!-- Left: mobile menu + logo -->
    <div class="navbar-start">
      <!-- Mobile dropdown -->
      <div class="dropdown">
        <button tabindex="0" aria-label="Open menu" class="btn btn-ghost lg:hidden">
          <!-- Hamburger icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 z-[60]">
          <li><a href="/"  class:active={isActive('/')}>Home</a></li>
          <li><a href="/blog"  class:active={isActive('/blog')}>Blog</a></li>
          <li><a href="/wiki"  class:active={isActive('/wiki')}>Factions</a></li>
          <li><a href="/about" class:active={isActive('/about')}>About</a></li>
          <li><a href="/contact" class:active={isActive('/contact')}>Contact</a></li>
        </ul>
      </div>

      <!-- Brand -->
      <a href="/" class="btn btn-ghost text-xl flex gap-2 items-center">
        <img src="/servoskull.svg" alt="Re-roll & Rally Logo" class="h-8 w-8" />
        <span>Re-roll & Rally</span>
      </a>
    </div>

    <!-- Center: desktop menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/"  class:active={isActive('/')}>Home</a></li>
        <li><a href="/blog"  class:active={isActive('/blog')}>Blog</a></li>
        <li><a href="/wiki"  class:active={isActive('/wiki')}>Factions</a></li>
        <li><a href="/about" class:active={isActive('/about')}>About</a></li>
        <li><a href="/contact" class:active={isActive('/contact')}>Contact</a></li>
      </ul>
    </div>

    <!-- Right: actions -->
    <div class="navbar-end gap-2 pr-2">
      <!-- OPTIONAL theme toggle slot -->
      {#if false}
        <!-- <ThemeToggle /> -->
      {/if}
    </div>
  </div>

	<!-- Main content -->
	<main class="flex-grow">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside class="grid-flow-col items-center gap-2">
    <img src="/servoskull.svg" alt="Logo" class="w-8 h-8" />
    <p>
      <strong>Re-roll & Rally</strong><br />
      Copyright © {new Date().getFullYear()} - All rights reserved
    </p>
  </aside>
  <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    
  </nav>
</footer>

	
</div>

  


