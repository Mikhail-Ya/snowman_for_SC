<script>
  import bonus1 from "C:/Users/User/Documents/autoStarCombats/info_svelte/snowman/src/lib/images/bonus1.gif";
  import Section from "./ProperMenu.svelte";
  $: barOpen = false;
  function openTopBar() {
    barOpen = !barOpen;
  }
</script>

<section>
  <div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src={bonus1} alt="меню"  on:click={openTopBar}/>
    <h3>Данные коробля</h3>
  </div>
  {#if barOpen}
    <Section />
  {/if}
  
</section>

<style>
  section {
    background: url("./../../lib/images/property_title2.gif") no-repeat left top;
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 72px;
    width: 365px;
    display: grid;
  }
  div {
    display: grid;
    grid-template-columns: 80px 1fr;
  }
  img {
    padding: 15px;
    justify-self: center;
    cursor: pointer;
  }
  h3 {
    margin: 0 0 13px 0;
    justify-self: center;
    align-self: end;
  }
</style>
