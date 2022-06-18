<script>
	import Button from "$lib/components/button.svelte";

</script>

<div id="splash">
	<h1>Luke Tong</h1>
	<h2>Political and Environmental activist</h2>
	
	<p>Thanks for visiting my website. I will sometimes post about the things that I'm working on as well as cool movements that I support and want to draw attention to.</p>

	<Button href="/" rounded>Contact</Button>
</div>

<style lang="scss">
	#splash {
		width: 40%;

		margin-block: 20vh;
		margin-left: 10vw;

		p {
			margin-block: 4vh;
		}
	}
</style>
