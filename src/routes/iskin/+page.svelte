<script>
	import ShowPlag from './../../lib/components/showPlag.svelte';
	import { _responses } from './+page.js';
	const plagin = _responses.plagin;
	const neyro = _responses.neyro;
	const virus = _responses.virus;
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
	<ul class="plagin_bar">
		{#each plagin as plag}
		<ShowPlag {plag} />
		{/each}
	</ul>
	<section>
		<img src={'http://img.starcombats.com/avatars/2/'+ virus.avatar +'.gif'} alt="">
		<ul class="virus_info">
			<li>
				<span><b>Название:</b> {virus.name}</span>
				<span><b>Уровень:</b> {virus.level}</span>
				<span><b>Создан:</b> {virus.born}</span>
			</li>
			<li>
				<span><b>Ёмкость:</b> {virus.capacity}</span>
				<span><b>Скорость:</b> {virus.speed}</span>
				<span><b>Тактика:</b> {virus.tactics}</span>
			</li><li>
				<span><b>Интелкт:</b> {virus.intelligence}</span>
				<span><b>Победы:</b> {virus.victories}</span>
				<span><b>Поражения:</b> {virus.loses}</span>
			</li>
		</ul>
	</section>
	<!-- <ul class="plagin_bar">
		{#each neyro as plag}
		<ShowPlag {plag}/>
		{/each}
	</ul> -->
</main>
<style>
	main {
    display: grid;
    grid-template-rows: 60px 140px 60px;
    row-gap: 2vw;
	background-color: #51829a50;
    border-radius: 5px;
    box-shadow: 0 0 10px -5px #51829a;
	align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .plagin_bar {
	display: grid;
	grid-template-columns: 60px 60px 60px 60px;
	column-gap: 1vw;
    justify-content: space-evenly;
    justify-items: center;
  }
  .virus_info {
	border: solid 1px #87ceeb36;
    border-radius: 4px;
    background-color: #87ceeb36;
  }
  section {
	max-width: 299px;
  }
  section img {
	height: 200px;
    margin-bottom: -50px;
  }
  section  li {
	font-size: 12px;
	display: flex;
    flex-direction: row;
    width: 97%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2px;
    padding: 2px;
  }
  section li span {
	width: 33%;
  }

</style>




