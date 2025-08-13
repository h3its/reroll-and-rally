<script>
  export let data;
  let posts = data.posts;

  let query = '';
  $: filtered = posts.filter((p) =>
    [p.title, p.excerpt ?? '', (p.tags ?? []).join(' ')].join(' ').toLowerCase()
      .includes(query.toLowerCase())
  );
</script>

<section class="p-8 max-w-6xl mx-auto space-y-6">
  <div class="flex items-center justify-between gap-4">
    <h1 class="text-4xl font-bold text-neutral">Latest Posts</h1>
    <input class="input input-bordered w-full max-w-xs" placeholder="Search…" bind:value={query} />
  </div>

  {#if filtered.length}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filtered as post}
        <a href={`/blog/${post.slug}`} class="card bg-neutral shadow-md hover:shadow-lg transition">
          {#if post.cover}
            <figure><img src={post.cover} alt={post.title} class="w-full h-40 object-cover"/></figure>
          {/if}
          <div class="card-body">
            <h2 class="card-title">{post.title}</h2>
            {#if post.excerpt}<p class="opacity-80">{post.excerpt}</p>{/if}
            <div class="flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span class="badge badge-outline">{tag}</span>
              {/each}
            </div>
            <div class="card-actions justify-end">
              <span class="text-xs opacity-60">{post.date}</span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  {:else}
    <p>No blog posts yet!</p>
  {/if}
</section>
