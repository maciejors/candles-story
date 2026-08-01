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

	// Track cart item quantities by productId
	let cart = $state<Record<number, number>>({});

	function addToCart(productId: number) {
		if (cart[productId] === undefined) {
			cart[productId] = 1;
		} else {
			cart[productId]++;
		}
	}

	function removeFromCart(productId: number) {
		if (cart[productId] > 1) {
			cart[productId]--;
		} else {
			delete cart[productId];
		}
	}
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
					<ProductListItem
						{product}
						count={cart[product.id] || 0}
						onAdd={() => addToCart(product.id)}
						onRemove={() => removeFromCart(product.id)}
					/>
				{/each}
			</ul>
			<Footer />
		</div>
	{/if}
</main>
