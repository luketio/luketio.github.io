<script lang="ts">
	export let href: string;
	export let refer = false;
	export let rounded = false;
</script>

<a
	{href}
	sveltekit:prefetch
	class:rounded={rounded === true}
	target={refer ? "_blank" : ""}
	rel={refer ? "noopener noreferrer" : ""}
>
	<slot />
</a>

<style lang="scss">
	a {
		display: inline-block;
		padding-block: 1rem;
		padding-inline: 1.5rem;

		background-color: $base-300;

		transition: ease 0.1s;

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
