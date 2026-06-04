<script lang="ts">
	import type { Product } from '$lib/models';

	let { product }: { product: Product } = $props();
</script>

<li>{product.name}</li>
