<script lang="ts">
	import { enhance } from '$app/forms'
	import { page } from '$app/stores'
	import Heading from '$lib/components/Heading.svelte'

	$: ({ form } = $page)
</script>

<svelte:head>
	<title>SnippetBox - Sign Up</title>
</svelte:head>

<Heading>Sign Up</Heading>
<form
	method="POST"
	action="/signup"
	class="grid gap-5 border-t-2 border-dotted border-gray-3 pt-5"
	use:enhance
>
	{#if form?.errors?.formErrors}
		<div class="mb-3 space-y-2">
			{#each form?.errors?.formErrors as error}
				<p class="text-center py-5 bg-red text-white rounded-md">{error}</p>
			{/each}
		</div>
	{/if}
	<div class="grid gap-2">
		<label for="name" class="text-blue">Name:</label>
		<input
			type="text"
			name="name"
			id="name"
			value={form?.values?.name ?? ''}
			class="border-2 {form?.errors?.fieldErrors?.name
				? 'border-red'
				: 'border-gray-3'} p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"
		/>
		<ul class="text-sm list-disc pl-4">
			{#if form?.errors?.fieldErrors?.name}
				{#each form?.errors?.fieldErrors?.name as error}
					<li class="text-red">{error}</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="grid gap-2">
		<label for="email" class="text-blue">Email:</label>
		<input
			type="email"
			name="email"
			id="email"
			value={form?.values?.email ?? ''}
			class="border-2 {form?.errors?.fieldErrors?.email
				? 'border-red'
				: 'border-gray-3'} p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"
		/>
		<ul class="text-sm list-disc pl-4">
			{#if form?.errors?.fieldErrors?.email}
				{#each form?.errors?.fieldErrors?.email as error}
					<li class="text-red">{error}</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="grid gap-2">
		<label for="password" class="text-blue">Password:</label>
		<input
			type="password"
			name="password"
			id="password"
			class="border-2 {form?.errors?.fieldErrors?.password
				? 'border-red'
				: 'border-gray-3'} p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"
		/>
		<ul class="text-sm list-disc pl-4">
			{#if form?.errors?.fieldErrors?.password}
				{#each form?.errors?.fieldErrors?.password as error}
					<li class="text-red">{error}</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="border-t-2 border-dotted border-gray-3 pt-5">
		<button
			type="submit"
			class="inline-block rounded-md bg-green hover:bg-green/80 p-5 font-bold text-white focus:outline-blue/40 transition-all duration-200"
			>Create Account</button
		>
	</div>
</form>
