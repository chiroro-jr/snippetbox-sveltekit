<script lang="ts">
	import { page } from '$app/stores'
	import '../app.css'
	import Footer from './Footer.svelte'
	import Logo from './Logo.svelte'
	import NavBar from './NavBar.svelte'

	$: ({ pathname } = $page.url)
</script>

<div class="app-grid | min-w-screen min-h-screen">
	<!-- Top Gradient -->
	<div class="gradient | h-2" />
	<Logo />
	<NavBar isLoggedIn={!!$page.data.user} {pathname} />
	<main>
		<div class="mx-auto max-w-container py-14 px-5">
			<slot />
		</div>
	</main>
	<Footer />
</div>
