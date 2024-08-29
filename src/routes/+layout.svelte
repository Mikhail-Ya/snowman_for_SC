<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import "../app.css";
</script>

<div class="app">
  <Header />
  <slot />
  <Footer />
</div>

<style>
  .app {
    display: grid;
    justify-content: center;
	align-items: center;
    min-height: 620px;
	height: 100vh;
	background-image: url("./../lib/images/8377.jpg");
    background-size: cover;
  }
</style>
