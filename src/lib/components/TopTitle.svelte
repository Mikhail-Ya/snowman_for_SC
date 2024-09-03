<script>
  import topimg from "./../images/top_title.png";
  import TopBar from "./TopBar.svelte";
  $: barOpen = false;
  function openTopBar() {
    barOpen = !barOpen;
  }
</script>

<section>
  <div class="title_top">
    <h3>Данные TOP</h3>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img src={topimg} alt="Бар" on:click={openTopBar} />
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
    padding: 12px 0px 0px 10px;
    justify-self: center;
    cursor: pointer;
    width: 65px;
  }
  h3 {
    margin: 0 0 13px 0;
    justify-self: center;
    align-self: end;
    max-width: 215px;
  }
</style>
