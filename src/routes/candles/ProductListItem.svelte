<script lang="ts">
	import type { Product } from '$lib/models';
	import Modal from '$lib/components/Modal.svelte';

	let {
		product,
		count,
		onAdd,
		onRemove,
	}: {
		product: Product;
		count: number;
		onAdd: () => void;
		onRemove: () => void;
	} = $props();

	let isPreviewOpen = $state(false);
	let isPriceInfoOpen = $state(false);

	// Calculate unit price based on basePrice or tiered pricing matching the count
	let unitPrice = $derived(() => {
		if (product.basePrice !== undefined) {
			return product.basePrice;
		}
		if (product.tieredPricing) {
			const tier = product.tieredPricing.find(
				(t) => count >= t.minQuantity && (t.maxQuantity === undefined || count <= t.maxQuantity)
			);
			if (tier) return tier.unitPrice;
			return product.tieredPricing[0]?.unitPrice || 0;
		}
		return 0;
	});

	let displayPrice = $derived(() => {
		const numericPrice = unitPrice();
		return numericPrice % 1 === 0 ? numericPrice.toString() : numericPrice.toFixed(2);
	});
</script>

<li class="flex list-none items-center gap-4 border-b border-accent p-4">
	<!-- Clickable Image -->
	<button
		class="cursor-pointer border-none bg-transparent p-0 focus:outline-none"
		onclick={() => (isPreviewOpen = true)}
		aria-label="View larger image"
	>
		<img
			src={product.mainPictureUrl}
			alt={`Picture of ${product.name}`}
			class="h-20 w-20 rounded object-cover"
		/>
	</button>

	<!-- Product Details -->
	<div class="flex h-20 grow flex-col justify-between">
		<span class="font-bold">{product.name}</span>
		<div class="flex items-center gap-1.5 text-supplementary">
			<span>{displayPrice()} zł</span>
			{#if product.tieredPricing && product.tieredPricing.length > 0}
				<button
					class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-accent bg-transparent text-xs font-semibold text-supplementary"
					onclick={() => (isPriceInfoOpen = true)}
					aria-label="Pokaż cennik wielopoziomowy"
				>
					i
				</button>
			{/if}
		</div>
	</div>

	<!-- Quantity Controls -->
	<div class="flex items-center gap-2">
		<!-- Trigger the callback functions on click -->
		<button class="rounded border border-accent px-2 py-1" onclick={onRemove}> - </button>
		<span class="w-6 text-center font-medium tabular-nums">{count}</span>
		<button class="rounded border border-accent px-2 py-1" onclick={onAdd}> + </button>
	</div>
</li>

<!-- Image Preview Modal -->
<Modal isOpen={isPreviewOpen} onClose={() => (isPreviewOpen = false)}>
	<img
		src={product.mainPictureUrl}
		alt={`Preview of ${product.name}`}
		class="h-auto max-h-[70vh] w-full object-contain"
	/>
</Modal>

<!-- Tiered Pricing Info Modal -->
<Modal isOpen={isPriceInfoOpen} onClose={() => (isPriceInfoOpen = false)}>
	<div>
		<h3 class="mb-4 text-lg font-bold">{product.name}</h3>
		<table class="w-full border-collapse text-left text-sm">
			<thead>
				<tr class="border-b border-accent font-semibold text-supplementary">
					<th class="pr-4 pb-2">Ilość</th>
					<th class="pb-2">Cena jedn.</th>
				</tr>
			</thead>
			<tbody>
				{#if product.tieredPricing}
					{#each product.tieredPricing as tier (tier.minQuantity)}
						<tr class="border-b border-accent last:border-none">
							<td class="py-2 pr-4">
								{#if tier.maxQuantity}
									{tier.minQuantity}-{tier.maxQuantity} szt.
								{:else}
									{tier.minQuantity}+ szt.
								{/if}
							</td>
							<td class="py-2 font-medium">
								{tier.unitPrice % 1 === 0 ? tier.unitPrice : tier.unitPrice.toFixed(2)} zł
							</td>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>
</Modal>
