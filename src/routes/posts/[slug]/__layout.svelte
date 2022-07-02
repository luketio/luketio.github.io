<script lang="ts">
	import Box from "$lib/components/Box.svelte";
</script>

<div class="post">
	<aside>
		<Box>
			<p>Hello</p>
		</Box>
	</aside>

	<article>
		<slot />
	</article>
</div>

<style lang="scss">
	.post {
		display: grid;
		grid-template-columns: 2fr 7fr;
		grid-gap: 5vh;

		margin: 5vh;
		margin-top: 12vh;

		aside > * {
			padding: 2vh;
			background-color: $base-200;
		}

		article {
			padding: 5vh;
			background-color: $base-200;
		}
	}
</style>
