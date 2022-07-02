<script lang="ts">
	import Link from "$lib/components/Link.svelte";
</script>

<svelte:head>
	<title>Post not found</title>
	<meta name="title" content="Luke Tong's Blog" />
	<meta name="description" content="Post not Found" />
</svelte:head>

<div>
	<h1>Hmm, this post doesn't exist</h1>
	<h2>Are you sure this is the right link?</h2>

	<Link href="/posts" rounded>Return to Posts page</Link>
</div>

<style lang="scss">
	div {
		margin: 20vh;
		h2 {
			margin-bottom: 2vh;
		}
	}
</style>
