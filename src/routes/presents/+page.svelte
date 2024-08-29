<svelte:head>
  <title>Снеговик_ : подарки</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<script>
  import { get } from "svelte/store";
  import ship from "$lib/images/Snow_ship_anim1.gif";
  
</script>

<main class="counter">
  <div class="left"></div>
  <img src={ship} alt="" />
  <div class="right"></div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 60px 150px 60px;
    grid-column-gap: 10px;
  }
</style>
