<script lang="ts">
	type Post = {
		title: string;
		date: string;
		tags: string[];
	};
	export let content: string;
	export let meta: Post;
</script>

<h1 class="title">{meta.title}</h1>

<svelte:component this={content} />

<style lang="scss">
	.title {
		margin-block: 8vh;
	}
</style>
