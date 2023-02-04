<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="bg-white rounded-md overflow-hidden text-blue border-2 border-gray-3">
	<div class="bg-gray-1 p-5 flex justify-between border-b-2 border-gray-2">
		<span class="font-bold">{data.snippet?.title}</span>
		<span class="text-gray-4">#{data.snippet?.id}</span>
	</div>
	<div class="p-5 border-b-2 border-gray-2">
		<pre class="whitespace-pre-wrap">{data.snippet?.content}</pre>
	</div>
	<div class="bg-gray-1 p-5  text-gray-4 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
		<span>Created On: {data.snippet?.createdAt}</span>
		<span>Expires On: {data.snippet?.expiresAt}</span>
	</div>
</div>
