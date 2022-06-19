<script lang="ts">
	import { form as createForm, field } from "svelte-forms";
	import { required } from "svelte-forms/validators";

	import Button from "../Button.svelte";
	import Input from "../Input.svelte";
	import TextArea from "../TextArea.svelte";

	const email = field("email", "", [required()], { checkOnInit: true });
	const name = field("name", "", [required()], { checkOnInit: true });
	const message = field("message", "", [required()], { checkOnInit: true });

	const contactForm = createForm(email, name, message);

	const submit = () => {
		alert(`${$message.value} hi sent you a message`);
	};
</script>

<form>
	<div class="top">
		<Input placeholder="Email" bind:value={$email.value} />
		<Input placeholder="Name" bind:value={$name.value} />
	</div>
	<TextArea
		placeholder="Write something about yourself or any questions!"
		bind:value={$message.value}
	/>
	<div class="bottom">
		<div>
			<Button disabled={!$contactForm.valid} on:click={submit} rounded>Submit</Button>
		</div>
	</div>
</form>

<style lang="scss">
	form {
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
</style>
