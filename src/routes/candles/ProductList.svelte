<script lang="ts">
	import { fade } from 'svelte/transition';
	import type Product from '$lib/models/Product';
	import type Category from '$lib/models/Category';
	import { removePolishDiacritics } from '$lib/utils';
	import ProductListItem from './ProductListItem.svelte';

	let { products }: { products: Product[] } = $props();

	let cart = $state<Record<number, number>>({});

	let groupedProducts = $derived(() => {
		const groups: Record<number, { category: Category; products: Product[] }> = {};
		for (const product of products) {
			if (!groups[product.category.id]) {
				groups[product.category.id] = { category: product.category, products: [] };
			}
			groups[product.category.id].products.push(product);
		}
		return Object.values(groups);
	});

	function addToCart(productId: number) {
		if (cart[productId] === undefined) cart[productId] = 1;
		else cart[productId]++;
	}

	function removeFromCart(productId: number) {
		if (cart[productId] > 1) cart[productId]--;
		else delete cart[productId];
	}
</script>

<div transition:fade={{ duration: 400 }}>
	{#each groupedProducts() as group (group.category.id)}
		<section class="mb-6">
			<!-- Centered category name with normalized Polish characters -->
			<h2 class="mb-3 text-center text-lg font-bold">
				{removePolishDiacritics(group.category.name)}
			</h2>
			<ul>
				{#each group.products as product (product.id)}
					<ProductListItem
						{product}
						count={cart[product.id] || 0}
						onAdd={() => addToCart(product.id)}
						onRemove={() => removeFromCart(product.id)}
					/>
				{/each}
			</ul>
		</section>
	{/each}
</div>
