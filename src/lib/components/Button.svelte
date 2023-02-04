<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button'
	export let disabled: boolean | null | undefined = false
</script>

<button
	{disabled}
	{type}
	class="inline-block capitalize rounded-md bg-green hover:bg-green/80 p-5 font-bold text-white disabled:text-white/60 disabled:bg-gray-4/60 focus:outline-blue/40 transition-all duration-200"
	><slot>Add Button text</slot></button
>
