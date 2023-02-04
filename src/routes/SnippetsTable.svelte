<script lang="ts">
	import SnippetsTableItem from './SnippetsTableItem.svelte'
	type Snippet = {
		createdAt: string
		expiresAt: string
		id: number
		title: string
		content: string
		updatedAt: Date
		userId: string
	}
	export let snippets: Snippet[]
</script>

<table class="w-full border-collapse border-2 border-gray-3 bg-white">
	<tr class="border-2 border-gray-3 odd:bg-gray-1">
		<th class="p-4 text-start text-lg font-bold text-blue">Title</th>
		<th class="p-4 text-start text-lg font-bold text-blue">Created On</th>
		<th class="p-4 text-end text-lg font-bold text-blue">#ID</th>
	</tr>
	{#each snippets as snippet}
		<SnippetsTableItem {snippet} />
	{/each}
</table>
