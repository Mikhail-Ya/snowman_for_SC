<script>
</script>

<section>
  <div class="bar_top"></div>
  <div class="display_top"></div>
</section>

<style>
  section {
    position: absolute;
    top: 54px;
    right: 0;
    height: 351px;
    width: 360px;
    background: url("./../../lib/images/top_menu.gif") no-repeat right top;
    padding: 29px 5px 15px 0px;
    display: grid;
    grid-template-columns: 1fr 60px;
    column-gap: 24px;
    animation: animStar 500ms ease-in-out;
  }
  .bar_top {
    height: 100%;
    width: 100%;
  }
  @keyframes animStar {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
</style>
