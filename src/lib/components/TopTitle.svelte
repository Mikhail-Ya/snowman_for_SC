<script>
  import bonus1 from "./../images/bonus1.gif";
  import TopBar from "./TopBar.svelte";
  $: barOpen = false;
  function openTopBar() {
    barOpen = !barOpen;
  }
</script>

<section>
  <div>
    <h3>Данные TOP</h3>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src={bonus1} alt="Бар" on:click={openTopBar} />
  </div>
  {#if barOpen}
    <TopBar />
  {/if}
</section>

<style>
  section {
    background: url("$lib/images/top_title2.gif") no-repeat right top;
    position: absolute;
    right: 0;
    bottom: -6px;
    height: 72px;
    width: 365px;
    display: grid;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 80px;
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
    max-width: 215px;
  }
</style>
