<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="bg-classic-gradient min-h-screen font-forum">
	<nav class="bg-classic-gradient sticky top-0 mb-3 flex w-full justify-around p-2 shadow-md">
		<a href={resolve('/about')}>O świecach</a>
		<a href={resolve('/candles')}>Stwórz zamówienie</a>
	</nav>
	{@render children()}
	<footer class="mt-2 w-full p-2 text-center text-gray-400">2026 Candles Story</footer>
</div>

<style>
	nav a {
		@apply flex-1 text-center hover:underline;
	}
</style>
