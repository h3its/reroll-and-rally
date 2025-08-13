<script>
  export let data;
  const { post } = data;
</script>

<article class="prose lg:prose-xl mx-auto p-6">
  <h1 class="mb-2">{post.title}</h1>
  <p class="text-sm opacity-70">{post.date} {#if post.tags?.length}• {post.tags.join(' • ')}{/if}</p>
  {#if post.cover}
    <img src="../{post.cover}" alt={post.title} class="rounded-2xl my-4" />
  {/if}
  {@html post.html}
</article>
