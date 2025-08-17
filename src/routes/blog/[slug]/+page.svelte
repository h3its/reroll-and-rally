<script>
  import Web3ContactForm from '$lib/components/Web3ContactForm.svelte';

  export let data;
  const { post } = data;
</script>

<article class="prose lg:prose-xl mx-auto p-6">
  <h1>{post.title}</h1>
  <h3 class="mb-2">by {post.author}</h3>
  <p class="text-sm opacity-70">{post.date} {#if post.tags?.length}• {post.tags.join(' • ')}{/if}</p>
  {#if post.cover}
    <img src="{post.cover}" alt={post.title} class="rounded-2xl my-4" />
  {/if}
  {@html post.html}
</article>

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
