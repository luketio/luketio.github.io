<script lang="ts">
	import type { Post } from "$lib/types";

	import dayjs from "dayjs";
	import calender from "dayjs/plugin/calendar.js";
	import Box from "$lib/components/Box.svelte";

	dayjs.extend(calender);

	export let posts: Post[];
</script>

<section>
	<h2>Posts</h2>
</section>

<section>
	<main>
		{#each posts as post}
			<Box width="35vw" height="30vh" href={post.slug}>
				<h3>{post.meta.title}</h3>
				<small>{dayjs().format("dddd, MMMM D, YYYY")}</small>
				<p>{post.meta.description}</p>
			</Box>
		{/each}
	</main>
</section>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 4vw;
	}

	section {
		padding-inline: 12vw;
		padding-bottom: 5vh;
	}

	h2 {
		margin-top: 15vh;
	}

	small {
		color: $content-200;
		font-size: smaller;
	}

	p {
		margin-top: 3vh;
		word-wrap: break-word;
	}
</style>
