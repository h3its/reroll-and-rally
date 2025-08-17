<script>
  import Web3ContactForm from '$lib/components/Web3ContactForm.svelte';
</script>

<!-- Hero -->
<section class="min-h-[70vh] bg-base-100 text-base-content flex flex-col justify-center px-6 py-16">
  <div class="max-w-4xl mx-auto text-center">
    <img
      src="/servoskull.svg"
      alt="Servo Skull Logo"
      class="mx-auto w-24 h-24 mb-4"
    />
    <h1 class="text-5xl font-extrabold tracking-tight mb-4">Re-roll & Rally</h1>
    <p class="text-lg mb-4 text-base-content/70">
      A Warhammer tabletop blog chronicling dice rolls, battle reports, painting projects, tactical insights,
      and general thoughts on the 41st millennium.
    </p>
    <p class="text-lg mb-8 text-base-content/70">
      Our goal is to create a resource and community for our play group and friends to reference — welcome to the crusade!
    </p>
    <div class="flex justify-center gap-4">
      <a href="/blog" class="btn btn-primary btn-lg">Read the Blog</a>
      <a href="/about" class="btn btn-outline btn-lg">Learn More</a>
    </div>
  </div>
</section>

<!-- Feature columns -->
<section class="bg-base-200 py-16 px-6">
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
    <div class="p-6 rounded-2xl bg-base-100 shadow-sm">
      <h2 class="text-xl font-semibold mb-2">⚔️ Battle Reports</h2>
      <p class="text-base-content/70">Overviews and summaries of some of our best games of 40k.</p>
    </div>
    <div class="p-6 rounded-2xl bg-base-100 shadow-sm">
      <h2 class="text-xl font-semibold mb-2">🎨 Hobby & Painting</h2>
      <p class="text-base-content/70">Progress logs, paint recipes, 3D printing, and more.</p>
    </div>
    <div class="p-6 rounded-2xl bg-base-100 shadow-sm">
      <h2 class="text-xl font-semibold mb-2">📐 List Building & Strategy</h2>
      <p class="text-base-content/70">Digestible analyses of factions, rules, and matchups.</p>
    </div>
  </div>
</section>

<!-- Contact CTA band -->
<section id="contact" class="bg-base-100 py-16 px-6">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <!-- Left: copy -->
    <div>
      <span class="badge badge-primary badge-lg mb-3">Say hello</span>
      <h2 class="text-3xl md:text-4xl font-bold mb-3">Get in touch</h2>
      <p class="text-base-content/70 mb-6">
        Questions about an article? Want to share a battle report or painting tip? Drop us a line and We'll get back to you ASAP!
      </p>
      <ul class="space-y-2 text-base-content/70">
        <li>• Collaboration requests and guest posts</li>
        <li>• Feedback and corrections</li>
        <li>• Match challenges and event coverage</li>
      </ul>
    </div>

    <!-- Right: form (carded) -->
    <div class="max-w-xl w-full mx-auto md:mx-0">
      <Web3ContactForm
        accessKey="55f05607-0860-41a2-b3ed-4a0b0381a0c7"
        framed={true}
        heading="Send a message"
        description=""
      />
    </div>
  </div>
</section>


