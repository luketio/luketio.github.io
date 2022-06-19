<script lang="ts">
	export const hydrate = false;
	export const prerender = true;

	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";

	const submit = () => {
		console.log("hi");
	};
</script>

<svelte:head>
	<title>Luke Tong's Blog</title>
	<meta name="title" content="Luke Tong's Blog" />
	<meta name="description" content="Political and Environmental activist" />
</svelte:head>

<section id="splash">
	<h1>Luke Tong</h1>
	<h2>Political and environmental activist</h2>
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
		<div class="top">
			<Input placeholder="Email" />
			<Input placeholder="Name" />
		</div>
		<TextArea placeholder="Write something about yourself or any questions!" />
		<div class="bottom">
			<div>
				<Button onClick={submit} rounded>Submit</Button>
			</div>
		</div>
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
			display: grid;
			grid-template-rows: 1fr 3fr 1.2fr;
			grid-gap: 0.9rem;

			background-color: $base-200;
			border-radius: 5px;
			border-top: 5px solid $blue;
			padding: 0.9rem;

			transition: 0.3s;

			&:hover {
				box-shadow: 0 6px 8px -2px $base-300;
			}

			.top {
				display: flex;
				gap: 0.9rem;
			}
			.bottom {
				position: relative;
				div {
					position: absolute;
					bottom: 0;
					right: 0;
				}
			}
		}
	}
</style>
