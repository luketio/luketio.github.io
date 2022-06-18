<script lang="ts">
	export const hydrate = false;
	export const prerender = true;

	// @ts-ignore
	import PdfViewer from "svelte-pdf";
</script>

<div>
	<PdfViewer url='/resume/resume.pdf' />
</div>

<style lang="scss">
	div {
		margin: 10vh;
	}
</style>
