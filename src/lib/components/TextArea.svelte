<script lang="ts">
	/**
	 * Placeholder text for the text area.
	 */
	export let placeholder = "Message";

	/**
	 * Default text for the text area.
	 */
	export let value = "";
</script>

<textarea {placeholder} bind:value />

<style lang="scss">
	textarea {
		font-size: 0.9rem;
		background-color: $base-100;
		width: calc(100% - 0.9rem);

		padding: 0.5rem;

		border-radius: 5px;
		border: $base-200 2px solid;

		resize: none;

		&:focus {
			outline: none;
			border-color: $blue;
		}
	}
</style>
