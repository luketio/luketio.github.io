<script lang="ts">
	import Button from "$lib/components/Button.svelte";

	import "../app.scss";
</script>

<header>
	<nav>
		<Button href="/posts">Posts</Button>
		<Button href="/about">About</Button>
		<Button href="/resume">Resume</Button>
	</nav>
</header>

<main>
	<slot />
</main>

<footer >
	<section>
		<p>&copy; 2020 Luke Tong</p>
	</section>
	<section>
		<b>Channels</b>
		<a href="/">LinkedIn</a>
		<a href="/">Github</a>
		<a href="/">Twitter</a>
	</section>
	<section>
		<b>Information</b>
		<a href="/">New Jersey</a>
		<a href="/">luke.rtong@gmail.com</a>
		<a href="/">Resume</a>
	</section>
</footer>

<style lang="scss">
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: $base-300;

		nav {
			float: right;
		}
	}
	
	main {
		margin-top: 5vh;
	}

	footer {
		background-color: $base-200;
		padding-block: 10vh;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		section {
			margin-left: 33%;

			a, p {
				display: block;
				margin-block: 12px;
			}
		}
	}
</style>
