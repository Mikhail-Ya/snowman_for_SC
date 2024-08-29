<script>
  import logo from "$lib/images/starcombats_logo.gif";
  const referalUrl = "http://starcombats.com/?ref=1189944";
</script>

<svelte:head>
  <title>Starcombats</title>
</svelte:head>
<main>
  <a href={referalUrl} target="_blank" rel="noopener noreferrer">
    <img src={logo} alt="starcombats" />
  </a>
</main>

<style>
  img {
    width: 300px;
    filter: drop-shadow(0px 0px 11px skyblue);
    opacity: 0.8;
  }
</style>
