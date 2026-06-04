<script lang="ts">
	let { size = '24px' } = $props();
	let dimension = $derived(typeof size === 'number' || !isNaN(Number(size)) ? `${size}px` : size);
</script>

<div
	class="animate-spin rounded-full border-2 border-accent border-r-transparent"
	style:width={dimension}
	style:height={dimension}
></div>
