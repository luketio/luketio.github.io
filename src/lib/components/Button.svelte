<script lang="ts">
	import { createEventDispatcher } from "svelte";

	/**
	 * Are the corners of the button rounded?
	 */
	export let rounded = false;

	/**
	 * Is the button disabled?
	 */
	export let disabled = false;

	/**
	 * Dispatcher for the on:click event.
	 */
	const dispatch = createEventDispatcher();
	const click = () => dispatch("click");
</script>

<button
	{disabled}
	class:disabled={disabled === true}
	class:rounded={rounded === true}
	on:click|preventDefault={click}
>
	<slot />
</button>

<style lang="scss">
	button {
		display: inline-block;
		border: none;
		padding-block: 0.8rem;
		padding-inline: 1.2rem;
		background-color: $base-300;

		&:hover {
			background-color: $base-200;
		}
	}

	.rounded {
		border-radius: 10px;

		&:not(.disabled) {
			&:hover {
				box-shadow: 0 6px 8px -2px $base-300;
			}

			&:active {
				scale: 90%;
			}
		}
	}

	.disabled {
		cursor: not-allowed;
		background-color: $base-100;

		&:hover {
			background-color: $base-100;
			color: $content-200;
		}
	}
</style>
