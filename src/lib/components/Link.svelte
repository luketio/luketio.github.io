<script lang="ts">
	/**
	 * Where does the link lead?
	 */
	export let href: string;

	/**
	 * Does the link open a new tab?
	 */
	export let refer = false;

	/**
	 * Is the link rounded?
	 */
	export let rounded = false;
</script>

<a
	{href}
	class:rounded={rounded === true}
	target={refer ? "_blank" : undefined}
	rel={refer ? "noopener noreferrer" : undefined}
>
	<slot />
</a>

<style lang="scss">
	a {
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

		&:hover {
			box-shadow: 0 6px 8px -2px $base-300;
		}

		&:active {
			scale: 90%;
		}
	}
</style>
