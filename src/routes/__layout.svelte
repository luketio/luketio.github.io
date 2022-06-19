<script lang="ts">
	import Link from "$lib/components/Link.svelte";

	import "../app.scss";
</script>

<header>
	<a id="logo" href="/">
		<img alt="logo svg" src="/logo.svg" />
		luketio
	</a>
	<nav>
		<Link href="/posts">Posts</Link>
		<Link refer href="/resume.pdf">Resume</Link>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
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
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: $base-300;

		#logo {
			display: inline-flex;
			align-items: center;
			font-weight: bold;
			padding-left: 9vw;
			padding-top: 6px;

			img {
				height: 2rem;
				width: 2rem;
			}
		}
		nav {
			float: right;
		}
	}

	main {
		display: block;
		margin-top: 5vh;
	}

	footer {
		background-color: $base-200;
		padding-block: 10vh;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		section {
			margin-left: 33%;

			a,
			p {
				display: block;
				margin-block: 12px;
			}
		}
	}
</style>
