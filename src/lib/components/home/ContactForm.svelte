<script lang="ts">
	import { form as createForm, field } from "svelte-forms";
	import { required, email } from "svelte-forms/validators";
	import Box from "../Box.svelte";

	import Button from "../Button.svelte";
	import Input from "../Input.svelte";
	import TextArea from "../TextArea.svelte";

	const emailField = field("email", "", [required(), email()], { valid: false });
	const nameField = field("name", "", [required()], { valid: false });
	const messageField = field("message", "", [required()], { valid: false });

	const contactForm = createForm(emailField, nameField, messageField);

	const submit = () => {
		alert();
	};
</script>

<Box>
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
			{#if $contactForm.hasError("email.not_an_email")}
				<p>✕ Valid email is required</p>
			{/if}
			{#if $contactForm.hasError("name.required")}
				<p>✕ Name is required</p>
			{/if}
			{#if $contactForm.hasError("message.required")}
				<p>✕ Message body is required</p>
			{/if}
			<div>
				<Button disabled={!$contactForm.valid} on:click={submit} rounded>Submit</Button>
			</div>
		</div>
	</form>
</Box>

<style lang="scss">
	form {
		display: grid;
		grid-template-rows: 1fr 3fr 1.2fr;
		grid-gap: 0.9rem;

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
