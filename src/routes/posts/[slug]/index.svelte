<script lang="ts" context="module">
	interface Params {
		params: {
			slug: string;
		};
	}

	export async function load({ params }: Params) {
		const post = await import(`../../../content/posts/${params.slug}.md`);

		if (post) {
			return {
				status: 200,
				props: {
					meta: post.metadata,
					content: post.default,
				},
			};
		}

		return {
			status: 404,
		};
	}
</script>

<script lang="ts">
	import type { Meta } from "$lib/types";

	export let content: string;
	export let meta: Meta;
</script>

<h1 class="title">{meta.title}</h1>

<svelte:component this={content} />

<style lang="scss">
	.title {
		margin-block: 8vh;
	}
</style>
