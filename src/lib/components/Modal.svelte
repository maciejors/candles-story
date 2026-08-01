<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		isOpen,
		onClose,
		children,
	}: {
		isOpen: boolean;
		onClose: () => void;
		children: Snippet;
	} = $props();
</script>

{#if isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<!-- Backdrop Button (Takes up the full screen, handles click/close, no nesting) -->
		<button
			class="absolute inset-0 h-full w-full cursor-default bg-black/50"
			onclick={onClose}
			aria-label="Close preview"
		></button>

		<!-- Modal Content Dialog (Sits cleanly on top of the backdrop, not inside it) -->
		<div
			class="bg-classic-gradient relative z-10 max-h-[90vh] max-w-[90vw] rounded-lg p-8"
			role="dialog"
			aria-modal="true"
			tabindex="-1"
		>
			<button
				class="absolute top-2 right-2 cursor-pointer border-none bg-transparent text-4xl leading-none"
				onclick={onClose}
				aria-label="Close preview"
			>
				&times;
			</button>
			{@render children()}
		</div>
	</div>
{/if}
