<script lang="ts">
	import type { PageData } from './$types'
	import SnippetsTable from './SnippetsTable.svelte'
	import Heading from '$lib/components/Heading.svelte'

	export let data: PageData
	let { snippets } = data
</script>

<svelte:head>
	<title>SnippetBox - Home</title>
</svelte:head>

<Heading>Latest Snippets</Heading>
{#if data.snippets.length === 0}
	<p class="text-blue">
		There nothing to see here yet!
		{#if data.user}
			<a href="/snippets/create" class="text-green">Create some snippets.</a>
		{/if}
	</p>
{:else}
	<SnippetsTable {snippets} />
{/if}
