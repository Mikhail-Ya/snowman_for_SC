<script>
	import ShowPlag from './../../lib/components/showPlag.svelte';
	import { _responses } from './+page.js'
	const plagin = _responses.plagin
	const neyro = _responses.neyro
	console.log(_responses)
	// function keydown(event) {
	// 	if (event.metaKey) return;

	// 	if (event.key === 'Enter' && !submittable) return;

	// 	document
	// 		.querySelector(`[data-key="${event.key}" i]`)
	// 		?.dispatchEvent(new MouseEvent('click', { cancelable: true }));
	// }

</script>

<!-- <svelte:window on:keydown={keydown} /> -->

<svelte:head>
	<title>Снеговик_ : ИскИн</title>
	<meta name="description" content="A Wordle clone written in SvelteKit" />
</svelte:head>

<main>
	<ul>
		{#each plagin as plag}
		<ShowPlag />
		{/each}
	</ul>
	<section>

	</section>
	<ul>
		{#each neyro as plag}
		<ShowPlag />
		{/each}
	</ul>
</main>
<style>
	main {
    display: grid;
    grid-template-rows: 60px 140px 60px;
    row-gap: 2vw;
	background-color: #87ceeb30;
    border-radius: 50%;
    box-shadow: 0 0 100px -40px aqua;
	align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
	display: grid;
	grid-template-columns: 60px 60px 60px 60px;
	column-gap: 1vh;
  }

</style>




