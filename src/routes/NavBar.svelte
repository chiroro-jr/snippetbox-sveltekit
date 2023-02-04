<script lang="ts">
	import { enhance } from '$app/forms'
	import { string } from 'zod'

	export let isLoggedIn: boolean
	export let pathname: string
</script>

<nav class="border-t-2 border-b-2 border-gray-3 bg-gray-1">
	<div class="mx-auto max-w-container px-5">
		<ul class="flex items-center justify-between">
			<ul class="flex gap-6">
				<li class="py-5" class:nav-decoration={pathname == '/'}>
					<a href="/" class={pathname == '/' ? 'text-blue' : 'text-green'}>Home</a>
				</li>
				{#if isLoggedIn}
					<li class="py-5" class:nav-decoration={pathname == '/snippets/create'}>
						<a
							href="/snippets/create"
							class={pathname == '/snippets/create' ? 'text-blue' : 'text-green'}
							>Create New Snippet</a
						>
					</li>
				{/if}
			</ul>
			<ul class="flex gap-6">
				{#if isLoggedIn}
					<li class="py-5" class:nav-decoration={pathname == '/signout'}>
						<form action="/signout" method="POST" use:enhance>
							<button
								class="{pathname == '/signout'
									? 'text-blue'
									: 'text-green'} outline-none border-none">Sign Out</button
							>
						</form>
					</li>
				{:else}
					<li class="py-5" class:nav-decoration={pathname == '/signup'}>
						<a href="/signup" class={pathname == '/signup' ? 'text-blue' : 'text-green'}>Sign Up</a>
					</li>
					<li class="py-5" class:nav-decoration={pathname == '/signin'}>
						<a href="/signin" class={pathname == '/signin' ? 'text-blue' : 'text-green'}>Sign In</a>
					</li>
				{/if}
			</ul>
		</ul>
	</div>
</nav>
