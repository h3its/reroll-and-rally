<script>
  export let data;
  const post = data.post;
</script>

{#if post}
  <section class="px-4 py-8">
    <article class="prose prose-lg mx-auto max-w-4xl">
      <h1>{post.Title}</h1>
      <p class="text-gray-500 text-sm">{post.Desc}</p>
      <div class="mt-6">
        {@html post.Body}
      </div>
    </article>
  </section>
{:else}
  <p class="text-center text-gray-500 mt-10">Post not found.</p>
{/if}