<script lang="ts">
	import { page } from '$app/state';

	const encodedBundle = $derived(page.params.encodedBundle);
</script>

<main>Encoded bundle: {encodedBundle}</main>
