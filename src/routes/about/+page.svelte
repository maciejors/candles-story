<script>
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex w-full flex-col items-center gap-10 p-2">
	<header>
		<h1>O Swiecach</h1>
		<h4 class="text-center leading-none uppercase">Candles<br />Story & Studio</h4>
	</header>

	<main class="flex w-full flex-col items-center gap-10">
		<section>
			<h2>Świece sojowe</h2>
			<p>Tutaj bym napisał dlaczego świece sojowe są super</p>
		</section>

		<section>
			<h2>Flower boxy</h2>
			<p>
				Flower boxy są zrobione ze świec sojowych i suszonych kwiatów - każdy box możesz
				spersonalizować według własnych upodobań. O dostępność kolorów boxów, papieru i świec
				zapytaj w wiadomości prywatnej.
			</p>
			<p>Nigdy nie zapalaj świecy bezpośrednio w boxie!</p>
		</section>

		<section>
			<h2>Wysyłka</h2>
			<p>
				Zamówienie jest wysyłane przez InPost, a cena różni się w zależności od wielkości przesyłki.
				Czas realizacji zamówienia jest ustalany indywidualnie.
			</p>
			<h3>Wysyłka przez paczkomat:</h3>
			<ul>
				<li>Gabaryt A - 16,99 zł</li>
				<li>Gabaryt B - 18,99 zł</li>
				<li>Gabaryt C - 20,99 zł</li>
			</ul>
			<p>Dostępna jest wysyłka kurierem - 25,99 zł</p>
		</section>

		<section>
			<h2>Zapachy i kolory</h2>
			<p>
				Podstawowe, zawsze dostępne zapachy oraz kolory są dostępne do wyboru przy doborze
				produktów. Zapachy i kolory można spersonalizować, zapytaj jakie aktualnie są dostępne.
			</p>
		</section>

		<section>
			<h2>Bezpieczeństwo</h2>
			<ul>
				<li>Unikaj zbyt długiego czasu palenia, zalecane jest nie więcej niż 4h.</li>
				<li>Nigdy nie zostawiaj palącej się świecy bez nadzoru.</li>
				<li>Świecę stawiaj na stabilnej, odpornej na ciepło powierzchni.</li>
				<li>Przed każdym kolejnym zapaleniem skróć knot do ok. 5mm.</li>
				<li>Nie pal świecy w pobliżu materiałów łatwopalnych.</li>
			</ul>
		</section>

		<Footer />
	</main>
</div>

<style>
	section {
		@apply flex w-full flex-col items-center;
	}

	p,
	li {
		@apply text-center;
	}
</style>
