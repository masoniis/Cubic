<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  const url = 'https://jsonplaceholder.typicode.com/posts';

  export const load: Load = async ({ fetch }) => {
    const response = await fetch(url);

    return {
      props: {
        initialData: await response.json()
      }
    };
  };
</script>

<script lang="ts">
  import { useSWR } from 'sswr';

  interface Post {
    id: number;
    title: string;
    body: string;
  }

  export let initialData: Post[];

  const { data: posts } = useSWR<Post[]>(url, {
    initialData,
    revalidateOnStart: false
  });
</script>

{#if $posts}
  {#each $posts as post (post.id)}
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  {/each}
{/if}