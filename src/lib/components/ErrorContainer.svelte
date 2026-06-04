<script lang="ts">
	let { error }: { error: Error } = $props();

	let showErrorDetails = $state(false);
</script>

<div class="flex w-full flex-col items-center p-2 text-center">
	<p>Przepraszamy, wystąpił błąd</p>

	<button class="mb-1 text-accent underline" onclick={() => (showErrorDetails = !showErrorDetails)}>
		{showErrorDetails ? 'Ukryj' : 'Pokaż więcej'}
	</button>

	{#if showErrorDetails}
		<p class="leading-none">
			Jeśli możesz, prześlij nam zrzut ekranu z tym komunikatem - pomoże nam to go naprawić:
		</p>
		<p class="mt-2 w-full text-left font-mono text-xs break-all text-red-500">{error.message}</p>
	{/if}
</div>
