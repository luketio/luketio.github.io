<script lang="ts">
	export let width = "none";
	export let height = "none";
	export let href = "";
</script>

{#if href}
	<a sveltekit:prefetch class="box" {href}>
		<div style="width: {width}; height: {height};">
			<slot />
		</div>
	</a>
{:else}
	<div class="box" style="width: {width}; height: {height};">
		<slot />
	</div>
{/if}

<style lang="scss">
	.box {
		display: block;

		background-color: $base-200;
		border-radius: 5px;
		border-top: 5px solid $blue;
		padding: 0.9rem;

		transition: 0.3s;

		&:hover {
			box-shadow: 0 6px 8px -2px $base-300;
		}
	}
</style>
