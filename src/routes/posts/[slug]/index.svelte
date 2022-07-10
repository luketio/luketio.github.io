<script lang="ts" context="module">
	interface Params {
		params: {
			slug: string;
		};
	}

	export const load = async ({ params }: Params) => {
		try {
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
		} catch (e) {
			return {
				status: 404,
				error: new Error(`Post not found: /posts/${params.slug}`),
			};
		}
	};
</script>

<script lang="ts">
	import type { Meta } from "$lib/types";

	export let content: string;
	export let meta: Meta;
</script>

<svelte:head>
	<title>{meta.title} | Luke Tong's Blog</title>
	<meta name="title" content="{meta.title} | Luke Tong's Blog" />
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.tags.join(", ")} />
</svelte:head>

<h1 class="title">{meta.title}</h1>

<svelte:component this={content} />

<style lang="scss">
	.title {
		margin-block: 8vh;
	}
</style>
