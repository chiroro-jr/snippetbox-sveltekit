<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import { page } from '$app/stores'
	import Button from '$lib/components/Button.svelte'
	import Heading from '$lib/components/Heading.svelte'
	import type { SubmitFunction } from '$app/forms'

	let loading = false
	$: ({ form } = $page)
	$: ({ data } = $page)

	const submit: SubmitFunction = ({}) => {
		loading = true

		return async ({ update, result }) => {
			loading = false
			await update()
			await applyAction(result)
		}
	}
</script>

<svelte:head>
	<title>SnippetBox - Create New Snippet</title>
</svelte:head>

<Heading>Create a new snippet</Heading>
<form
	method="POST"
	action="?/createSnippet"
	class="grid gap-5 border-t-2 border-dotted border-gray-3 pt-5"
	use:enhance={submit}
>
	{#if form?.errors?.formErrors}
		<div class="mb-3 space-y-2">
			{#each form?.errors?.formErrors as error}
				<p class="text-center py-5 bg-red text-white rounded-md">{error}</p>
			{/each}
		</div>
	{/if}

	<div class="grid gap-2">
		<label for="title" class="text-blue">Title:</label>
		<input
			type="title"
			name="title"
			id="title"
			value={form?.values?.title ?? ''}
			class="border-2 {form?.errors?.fieldErrors?.title
				? 'border-red'
				: 'border-gray-3'} p-4 text-gray-4 focus:outline-blue/40 outline-none rounded-md transition-all duration-200"
		/>
		<ul class="text-sm list-disc pl-4">
			{#if form?.errors?.fieldErrors?.title}
				{#each form?.errors?.fieldErrors?.title as error}
					<li class="text-red">{error}</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="grid gap-2">
		<label for="content" class="text-blue">Content:</label>
		<textarea
			name="content"
			id="content"
			value={form?.values?.content ?? ''}
			class="border-2 {form?.errors?.fieldErrors?.content
				? 'border-red'
				: 'border-gray-3'} p-4 text-gray-4 min-h-[16.25rem] focus:outline-blue/40 outline-none rounded-md transition-all duration-200"
		/>
		<ul class="text-sm list-disc pl-4">
			{#if form?.errors?.fieldErrors?.content}
				{#each form?.errors?.fieldErrors?.content as error}
					<li class="text-red">{error}</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="grid gap-2">
		<div class="flex items-center gap-4">
			<label for="expiresIn" class="text-blue">Expires In:</label>
			<span class="flex items-center gap-1">
				<span class="text-blue">1 Day</span>
				<input
					class="mt-[1px] text-gray-4 outline-gray-3"
					checked={form?.values?.expiresAt == '1' || data.expiresAt === 1}
					type="radio"
					name="expiresAt"
					id="expiresAt"
					value="1"
				/>
			</span>
			<span class="flex items-center gap-1">
				<span class="text-blue">1 Week</span>
				<input
					class="mt-[1px] outline-gray-3"
					checked={form?.values?.expiresAt == '7'}
					type="radio"
					name="expiresAt"
					id="expiresAt"
					value="7"
				/>
			</span>
			<span class="flex items-center gap-1">
				<span class="text-blue">1 Month</span>
				<input
					checked={form?.values?.expiresAt == '30'}
					class="mt-[1px] outline-gray-3"
					type="radio"
					name="expiresAt"
					id="expiresAt"
					value="30"
				/>
			</span>
			<span class="flex items-center gap-1">
				<span class="text-blue">1 Year</span>
				<input
					checked={form?.values?.expiresAt == '365'}
					class="mt-[1px] outline-gray-3"
					type="radio"
					name="expiresAt"
					id="expiresAt"
					value="365"
				/>
			</span>
		</div>
		<ul class="text-sm list-disc pl-4">
			{#if form?.errors?.fieldErrors?.expires}
				{#each form?.errors?.fieldErrors?.expires as error}
					<li class="text-red">{error}</li>
				{/each}
			{/if}
		</ul>
	</div>
	<div class="border-t-2 border-dotted border-gray-3 pt-5">
		<Button disabled={loading} type="submit"
			>{loading ? 'Publishing Snippet...' : 'Publish Snippet'}</Button
		>
	</div>
</form>
