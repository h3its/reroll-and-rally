<script>
  export let data;
  const posts = data.posts;
</script>

<section class="p-8 max-w-5xl mx-auto space-y-6">
  <h1 class="text-4xl font-bold mb-4">Latest Posts</h1>

  {#if posts.length}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each posts as post}
        <div class="card bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">{post.Title}</h2>
            <p>{post.Desc}</p>
            <div class="card-actions justify-end">
              <a href={`/blog/${post.id}`} class="btn btn-sm btn-primary">Read More →</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p>No blog posts yet!</p>
  {/if}
</section>