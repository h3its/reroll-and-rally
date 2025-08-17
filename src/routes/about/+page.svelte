<script>
  import Web3ContactForm from '$lib/components/Web3ContactForm.svelte';
</script>

<section class="px-6 py-10">
  <div class="max-w-4xl mx-auto">
    <article class="prose prose-base lg:prose-lg max-w-none">
      <h1>About the Blog</h1>
      <p>
        This blog is for our playgroup and any others who want a quick and easy way to stay up to date on all things warhammer.
      </p>
      <p>
        Here you’ll find hobby guides, tactics breakdowns, battle reports, and deep dives into the grimdark lore of the 41st millennium and beyond.
      </p>
      <p>
        Written with the idea of keeping players up to date on both the rules and hobbying without needing to read 50 FAQs.
      </p>

      <h2>The Mission</h2>
      <ul>
        <li>⚔️ Share engaging battle reports and campaign recaps</li>
        <li>🎨 Showcase painting progress and miniature builds</li>
        <li>📐 Discuss rules, factions, and competitive lists</li>
        <li>🧠 Build a connected community of friends and hobbyists</li>
      </ul>

      <p>
        Have feedback, want to contribute, or just want to join the squad? Reach out below — we read every message!
      </p>
    </article>
  </div>
</section>

<!-- Contact block -->
<section class="bg-base-200 px-6 py-12">
  <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    <div>
      <h2 class="text-3xl font-bold mb-2">Contact the author</h2>
      <p class="text-base-content/70">
        Use the form to get in touch about article ideas, list coaching, or hobby collabs. We'll respond as soon as we can!
      </p>
    </div>

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


