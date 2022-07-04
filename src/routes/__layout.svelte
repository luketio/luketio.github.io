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
		<p>Copyright &copy; 2022 Luke Tong</p>
	</section>
	<section>
		<b>CHANNELS</b>
		<a
			href="https://www.linkedin.com/in/luke-tong-73525a224/"
			target="_blank"
			rel="noopener noreferrer">LinkedIn</a
		>
		<a href="https://github.com/luketio" target="_blank" rel="noopener noreferrer">Github</a>
		<a href="https://twitter.com/luketio_" target="_blank" rel="noopener noreferrer">Twitter</a>
	</section>
	<section>
		<b>INFORMATION</b>
		<p>New Jersey</p>
		<a href="mailto:luke.rtong@gmail.com" target="_blank" rel="noopener noreferrer"
			>luke.rtong@gmail.com</a
		>
		<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
	</section>
</footer>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: $base-300;

		&:hover {
			box-shadow: 0 6px 8px -2px $base-300;
		}

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
		min-height: 100vh;
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
