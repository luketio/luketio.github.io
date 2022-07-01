<script lang="ts">
	import Link from "$lib/components/Link.svelte";
	import ContactForm from "$lib/components/home/ContactForm.svelte";
</script>

<section id="splash">
	<h1>Luke Tong</h1>
	<h2>Political and environmental activist</h2>
	<p>
		Thanks for visiting my website. I will sometimes post about the things that I'm working on
		as well as cool movements that I support and want to draw attention to.
	</p>

	<Link href="#contact" rounded>Contact</Link>
</section>

<section id="about">
	<h2>About</h2>
</section>

<section id="contact">
	<div>
		<h2>Contact Me</h2>
		<p>
			If you want to collaberate or just have questions, don't hesitate to answer me! I'm also
			open to discussions if you just want to talk.
		</p>
	</div>
	<ContactForm />
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
	}
</style>
