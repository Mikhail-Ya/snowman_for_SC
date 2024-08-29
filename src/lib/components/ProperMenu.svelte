<script>
</script>

<section>
  <div></div>
  <div></div>
</section>

<style>
  section {
    position: absolute;
    top: 54px;
    left: 0;
    height: 351px;
    width: 360px;
    background: url("./../../lib/images/property_menu.gif") no-repeat left top;
    display: grid;
    padding: 29px 0px 15px 5px;
    grid-template-columns: 60px 1fr;
    column-gap: 24px;
    animation: animStar 500ms ease-in-out;
  }
  div {
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
