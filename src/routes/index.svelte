<script lang="ts">
	export const hydrate = false;
	export const prerender = true;

	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Luke Tong's Blog</title>
	<meta name="title" content="Luke Tong's Blog" />
	<meta name="description" content="Political and Environmental activist" />
</svelte:head>

<section id="splash">
	<h1>Luke Tong</h1>
	<h3>Political and environmental activist</h3>
	<p>
		Thanks for visiting my website. I will sometimes post about the things that I'm working on
		as well as cool movements that I support and want to draw attention to.
	</p>

	<Button href="#contact" rounded>Contact</Button>
</section>

<section id="about">
	<h2>About</h2>
</section>

<section id="contact">
	<div>
		<h2>Contact Me</h2>
		<p>If you want to collaberate or just have questions, don't hesitate to answer me! I'm also open to discussions if you just want to talk.</p>
	</div>
	<div class="form">

	</div>
</section>

<style lang="scss">
	section {
		padding-inline: 12vw;
		padding-bottom: 20vh;
		padding-top: 10vh;
	}
	#splash {
		background-color: $base-100;

		padding-top: 20vh;

		p {
			max-width: 50%;
			margin-block: 4vh;
		}
	}
	#about {
		background-color: $base-200;
	}
	#contact {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5vw;
		background-color: $base-100;

		h2 {
			padding-bottom: 2vh;
		}

		.form {
			border-radius: 5px;
			background-color: $base-200;

			transition: 0.3s;

			&:hover {
				box-shadow: 0 6px 8px -2px $base-300;
			}
		}
	}
</style>
