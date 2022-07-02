<script lang="ts">
	/**
	 * Placeholder text for the input area.
	 */
	export let placeholder = "Message";

	/**
	 * Default text for the input area.
	 */
	export let value = "";
</script>

<input type="text" {placeholder} bind:value />

<style lang="scss">
	input {
		background-color: $base-100;
		height: 2rem;
		width: 100%;

		padding-inline: 0.5rem;
		font-size: 0.9rem;

		border-radius: 5px;
		border: $base-200 2px solid;

		&:focus {
			outline: none;
			border-color: $blue;
		}
	}
</style>
