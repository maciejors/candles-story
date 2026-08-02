<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchAllProducts } from '$lib/supabase/db/products';
	import Spinner from '$lib/components/Spinner.svelte';
	import ErrorContainer from '$lib/components/ErrorContainer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProductList from './ProductList.svelte';

	const query = createQuery(() => ({
		queryKey: ['products'],
		queryFn: fetchAllProducts,
	}));
</script>

<main>
	{#if query.isLoading}
		<div class="flex w-full items-center justify-center p-4"><Spinner /></div>
	{:else if query.isError}
		<ErrorContainer error={query.error} />
	{:else if query.isSuccess}
		<ProductList products={query.data} />
		<Footer />
	{/if}
</main>
