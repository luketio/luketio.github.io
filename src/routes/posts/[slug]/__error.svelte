<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }: { error: Error; status: number }) {
		return {
			props: {
				status: status,
				error: error,
			},
		};
	}
</script>

<script lang="ts">
	import Link from "$lib/components/Link.svelte";

	export let status: number;
	export let error: Error;
</script>

<svelte:head>
	<title>{error.name}: {status}</title>
	<meta name="title" content="Luke Tong's Blog" />
	<meta name="description" content={`${error.name} ${status}: ${error.message}`} />
</svelte:head>

<div>
	<h1>{error.name}: {status}</h1>
	<h2>{error.message}</h2>

	<Link href="/posts" rounded>Return to Posts</Link>
</div>

<style lang="scss">
	div {
		margin: 20vh;
		h2 {
			margin-bottom: 2vh;
		}
	}
</style>
