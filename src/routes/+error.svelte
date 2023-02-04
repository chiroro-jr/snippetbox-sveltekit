<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1 class="text-green font-bold text-9xl text-center">{$page.status}</h1>
<pre class="text-center text-blue text-xl">{$page.error?.message}</pre>
