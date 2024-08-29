<script>
  import Footer from "./Footer.svelte";
  import Header from "./Headers.svelte";
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

  /* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

  /* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer  {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
