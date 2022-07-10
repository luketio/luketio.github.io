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

	const handleSubmit = async () => {
		await fetch("/api/forms/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: $emailField.value,
				name: $nameField.value,
				message: $messageField.value,
			}),
		});

		contactForm.reset();
	};
</script>

<Box>
	<form>
		<div class="top">
			<Input name="email" placeholder="Email" bind:value={$emailField.value} />
			<Input name="name" placeholder="Name" bind:value={$nameField.value} />
		</div>
		<TextArea
			name="message"
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
				<Button disabled={!$contactForm.valid} on:click={handleSubmit} rounded
					>Submit</Button
				>
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
