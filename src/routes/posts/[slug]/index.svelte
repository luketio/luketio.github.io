<script lang="ts">
	type Post = {
		title: string,
		date: string,
		tags: string[],
	}

	export let content: string;
	export let meta: Post;
</script>

<div class="post">
	<section class="toc">

	</section>
	<section class="content">
		<h2>{meta.date}</h2>

		<svelte:component this={content} />
	</section>
</div>

<style lang="scss">
	.post {
		display: grid;
		grid-template-columns: 1fr 3fr;
		.toc {

		}

		.content {

		}
	}
</style>
