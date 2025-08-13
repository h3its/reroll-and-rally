<script>
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-base-100 text-neutral-content">
	<!-- Navbar -->
	<div class="navbar bg-neutral shadow-md">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl flex gap-2 items-center">
				<img src="/servoskull.svg" alt="Re-roll & Rally Logo" class="h-10 w-10" />
				<span>Re-roll & Rally</span>
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/blog">Blog</a></li>
				<li><a href="/about">About</a></li>
			</ul>
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
    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    </a>
    <a href="https://youtube.com" target="_blank" aria-label="YouTube">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M10 15l5.19-3L10 9v6zm12-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </a>
    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.93v-7.02H8v-2.91h2.5V9.5c0-2.48 1.48-3.85 3.76-3.85 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34v7.02A10 10 0 0022 12z"/>
      </svg>
    </a>
  </nav>
</footer>

	
</div>

  


