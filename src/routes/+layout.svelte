<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="root-container">
	<nav>
		<a href={resolve('/about')}>O świecach</a>
		<a href={resolve('/candles')}>Cennik</a>
	</nav>
	{@render children()}
</div>
