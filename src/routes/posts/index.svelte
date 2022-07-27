<script lang="ts">
	import type { Post } from "$lib/types";

	import dayjs from "dayjs";
	import calender from "dayjs/plugin/calendar.js";
	import Box from "$lib/components/Box.svelte";

	dayjs.extend(calender);

	export let posts: Post[];
</script>

<svelte:head>
	<title>Posts | Luke Tong's Blog</title>
	<meta name="title" content="Posts | Luke Tong's Blog" />
	<meta name="description" content="Recent Posts by Luke Tong" />
</svelte:head>

<section>
	<h2>Posts</h2>
</section>

<section>
	<main>
		{#each posts as post}
			<Box width="35vw" height="25vh" href={post.slug}>
				<div class="content">
					<div>
						<img src={post.meta.img} alt="preview" />
					</div>
					<div>
						<h3>{post.meta.title}</h3>
						<small>{dayjs().format("dddd, MMMM D, YYYY")}</small>
						<p>{post.meta.description}</p>
					</div>
				</div>
			</Box>
		{/each}
	</main>
</section>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1vw;
	}

	section {
		padding-inline: 12vw;
		padding-bottom: 5vh;
	}

	h2 {
		margin-top: 15vh;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-gap: 2vh;

		padding: 1vh;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		img {
			border-radius: 5px;
			object-fit: cover;
			width: 22vh;
			height: 22vh;
		}

		small {
			color: $content-200;
			font-size: smaller;
		}

		p {
			font-size: 1rem;
			margin-top: 2vh;
			word-wrap: break-word;
		}
	}
</style>
