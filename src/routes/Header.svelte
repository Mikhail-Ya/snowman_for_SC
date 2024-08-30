<script>
  import ProperTitle from "../lib/components/ProperTitle.svelte";
  import left_centr from "./../lib/images/header_centr_left.gif";
  import right_centr from "./../lib/images/header_centr_right.gif";
  import TopTitle from "../lib/components/TopTitle.svelte";
  import { onMount } from "svelte";
  //  console.log(window.innerWidth);
  $: getWight = 0;
  onMount(()=>{
    getWight = window.innerWidth;
    window.addEventListener(
      "resize",
      () => {
        getWight = window.innerWidth;
      },
      false
    )})
  
</script>

<header id="header">
  <div class="left">
    <ProperTitle />
  </div>
  {#if getWight > 1300}
    <div class="centr">
      <img src={left_centr} class="img_centr_left" alt="" />
      <div></div>
      <img src={right_centr} class="img_centr_right" alt="" />
    </div>
  {:else}
    <section id="avatars">
      <div>
        <img src="" alt="">
      </div>
    </section>
  {/if}
  <div class="right">
    <TopTitle />
  </div>
</header>

<style>
  header {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 468px 1fr 468px;
  }
  .left {
    height: 174px;
    width: 468px;
    background: url("$lib/images/header_left.gif") no-repeat;
    /* background-size: 100% 100%; */
    grid-column: 1;
  }
  .right {
    height: 174px;
    width: 468px;
    background: url("$lib/images/header_right.gif") no-repeat;
    background-size: 100% 100%;
    grid-column: 3;
  }
  .centr {
    height: 174px;
    min-width: 250px;
    background: url("$lib/images/top_bg.png") repeat-x top;
    display: flex;
    justify-content: space-between;
  }
   .centr img {
    width: max-content;
    height: max-content;
    position: relative;
  }
  .img_centr_left {
    top: 0;
    left: -20px;
  }
  .img_centr_right {
    top: 0;
    right: -20px;
  } 
  #avatars {
    margin: 0px -60px 0px -60px;
    z-index: 1;
    height: 94px;
    padding: 0 60px 0px 60px;
    background: 
      url('./../lib/images/left_centr_ava.gif') no-repeat left top,
      url('./../lib/images/right_centr_ava.gif') no-repeat right top;
  }
  #avatars div {
    height: 100%;
    width: 100%;
    background: url('./../lib/images/bg_centr_ava.gif') repeat-x top;
  }
</style>
