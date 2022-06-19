<script lang="ts">
	export let href: string | undefined = undefined;
	export let refer = false;
	export let rounded = false;
	export let onClick = () => {};
</script>

<a
	{href}
	class:rounded={rounded === true}
	target={refer ? "_blank" : ""}
	rel={refer ? "noopener noreferrer" : ""}
	on:click={onClick}
>
	<slot />
</a>

<style lang="scss">
	a {
		display: inline-block;
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
