<script>
  import ship from "$lib/images/ship_logo.gif";
  import iiLogo from "$lib/images/ii_logo1.gif";
  import gift from "$lib/images/new_gift_small.gif";
  import other from "$lib/images/other.gif";
  import { page } from "$app/stores";
  import home from "$lib/images/home_info.gif";
</script>

<footer id="footer">
  <section class="centr">
    <span></span>
    <ul>
      <li aria-current={$page.url.pathname === "/craft" ? "page" : undefined}>
        <a href="/spacecraft">
          <img src={ship} alt="" />
        </a>
      </li>
      <li aria-current={$page.url.pathname === "/iskin" ? "page" : undefined}>
        <a href="/iskin"><img src={iiLogo} alt="" /></a>
      </li>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">
          <img src={home} alt="" />
        </a>
      </li>
      <li
        aria-current={$page.url.pathname === "/presents" ? "page" : undefined}
      >
        <a href="/presents">
          <img src={gift} alt="" />
        </a>
      </li>
      <li
        aria-current={$page.url.pathname === "/supplementary"
          ? "page"
          : undefined}
      >
        <a href="/supplementary">
          <img src={other} alt="" />
        </a>
      </li>
    </ul>
  </section>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 1fr 550px 1fr;
    background: url("../lib/images/bottom_bg.gif") repeat-x bottom;
    color: skyblue;
  }
  img {
    width: 40px;
    filter: drop-shadow(0px 0px 8px skyblue);
    opacity: 0.9;
  }
  a {
    color: skyblue;
    text-shadow: 0px 1px 7px #314b4e;
  }
  section {
    grid-column: 2;
    display: grid;
    background: url("../lib/images/bottom_centr_bg2.gif") no-repeat bottom left;
  }
  span::before {
    content: "";
    width: 33px;
    height: 4px;
    border-radius: 4px;
    background-color: skyblue;
    display: grid;
    position: relative;
    top: 60px;
    left: 198px;
    z-index: -1;
    filter: drop-shadow(2px -1px 3px skyblue);
  }
  span::after {
    content: "";
    width: 33px;
    height: 4px;
    border-radius: 4px;
    background-color: skyblue;
    display: grid;
    position: relative;
    top: 56px;
    left: 314px;
    z-index: -1;
    filter: drop-shadow(-1px -2px 3px skyblue);
  }
  ul {
    display: grid;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 70px;
    align-self: end;
    height: 45px;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 70px 70px 50px 70px 70px;
    column-gap: 25px;
    align-items: center;
  }
</style>
