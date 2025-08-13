<script> export let error; export let status; </script>
<section class="container mx-auto p-8 text-center">
  <h1 class="text-5xl font-black mb-4">{status}</h1>
  <p class="opacity-70 mb-6">{error?.message ?? 'Something went wrong'}</p>
  <a href="/" class="btn btn-primary">Go home</a>
</section>
