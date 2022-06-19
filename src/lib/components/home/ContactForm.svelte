<script lang="ts">
	import { form as createForm, field } from "svelte-forms";
	import { required, email } from "svelte-forms/validators";


	import Button from "../Button.svelte";
	import Input from "../Input.svelte";
	import TextArea from "../TextArea.svelte";

	const emailField = field("email", '', [required(), email()], { valid: false});
	const nameField = field("name", '', [required()], { valid: false});
	const messageField = field("message", '', [required()], { valid: false});

	const contactForm = createForm(emailField, nameField, messageField);

	const submit = () => {
		alert();
	};
</script>

<form>
	<div class="top">
		<Input placeholder="Email" bind:value={$emailField.value} />
		<Input placeholder="Name" bind:value={$nameField.value} />
	</div>
	<TextArea
		placeholder="Write something about yourself or any questions!"
		bind:value={$messageField.value}
	/>
	<div class="bottom">
		{#if $contactForm.hasError('email.not_an_email')}
			<p>✕ Valid email is required</p>
		{/if}
		{#if $contactForm.hasError('name.required')}
			<p>✕ Name is required</p>
		{/if}
		{#if $contactForm.hasError('message.required')}
			<p>✕ Message body is required</p>
		{/if}
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
			p {
				line-height: 0.9rem;
				font-size: small;
				margin-left: 5px;
			}
		}
	}
</style>
