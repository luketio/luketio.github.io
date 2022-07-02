<script lang="ts">
</script>

<div>
	<slot />
</div>

<style lang="scss">
	div {
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
