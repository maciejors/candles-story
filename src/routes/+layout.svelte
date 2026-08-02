<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	let { children } = $props();

	const CACHE_SECONDS = 60 * 60 * 1000; // 1h
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: CACHE_SECONDS,
				gcTime: CACHE_SECONDS,
			},
		},
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="bg-classic-gradient min-h-screen font-forum">
	<nav class="bg-classic-gradient sticky top-0 mb-3 flex w-full justify-around p-2 shadow-md">
		<a href={resolve('/about')}>O świecach</a>
		<a href={resolve('/candles')}>Stwórz zamówienie</a>
	</nav>
	<QueryClientProvider client={queryClient}>
		{@render children()}
	</QueryClientProvider>
</div>

<style>
	nav a {
		@apply flex-1 text-center hover:underline;
	}
</style>
