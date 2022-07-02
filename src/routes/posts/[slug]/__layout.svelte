<script lang="ts">
</script>

<div class="post">
	<aside>
		<div>
			<p>hi</p>
		</div>
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
