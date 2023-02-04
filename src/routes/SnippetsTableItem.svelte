<script lang="ts">
	type Snippet = {
		createdAt: string
		expiresAt: string
		id: number
		title: string
		content: string
		updatedAt: Date
		userId: string
	}

	export let snippet: Snippet
</script>

<tr class="border-2 border-gray-3 odd:bg-gray-1">
	<td class="p-4 text-green"
		><a class="underline" href="/snippets/{snippet.id}">{snippet.title}</a></td
	>
	<td class="p-4 text-blue">{snippet.createdAt}</td>
	<td class="p-4 text-end text-gray-4">#{snippet.id}</td>
</tr>
