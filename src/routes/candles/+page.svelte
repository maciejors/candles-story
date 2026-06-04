<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchAllProducts } from '$lib/supabase/db/products';
	import Spinner from '$lib/components/Spinner.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ErrorContainer from '$lib/components/ErrorContainer.svelte';
	import ProductListItem from './ProductListItem.svelte';

	const query = createQuery(() => ({
		queryKey: ['products'],
		queryFn: fetchAllProducts,
	}));
</script>

<main>
	{#if query.isLoading}
		<div class="flex w-full items-center justify-center p-4">
			<Spinner />
		</div>
	{:else if query.isError}
		<ErrorContainer error={query.error} />
	{:else if query.isSuccess}
		<div transition:fade={{ duration: 400 }}>
			<ul>
				{#each query.data as product (product.id)}
					<ProductListItem {product} />
				{/each}
			</ul>
			<Footer />
		</div>
	{/if}
</main>
