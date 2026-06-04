<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { fetchAllProducts } from '$lib/supabase/db/products';
	import Spinner from '$lib/components/Spinner.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const query = createQuery(() => ({
		queryKey: ['products'],
		queryFn: fetchAllProducts,
	}));
</script>

<main>
	{#if query.isLoading}
		<div class="flex w-full items-center justify-center p-6">
			<Spinner />
		</div>
	{:else if query.isError}
		<p>Przepraszamy, wystąpił błąd</p>
	{:else if query.isSuccess}
		<ul>
			{#each query.data as product (product.id)}
				<li>{product.name}</li>
			{/each}
		</ul>
		<Footer />
	{/if}
</main>
