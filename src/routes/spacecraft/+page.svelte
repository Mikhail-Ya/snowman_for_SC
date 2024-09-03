<script>
  import { _info } from "./+page.js";
</script>

<svelte:head>
  <title>Снеговик_: Корабль</title>
</svelte:head>

<main class="counter">
  <ul id="left_bar">
    <li id="gun_left">
      <img
        src={_info.gun1_url}
        alt={_info.gun1_name}
        title={_info.gun1_name +
          " " +
          _info.gun1_lvl +
          " " +
          _info.gun1_life_current +
          "/" +
          _info.gun1_life_max}
      />
    </li>
    <li id="navig">
      <img
        src={_info.navig_url}
        alt={_info.navig_name}
        title={_info.navig_name +
          " " +
          _info.navig_lvl +
          " " +
          _info.navig_life_current +
          "/" +
          _info.navig_life_max}
      />
    </li>
    <li id="comp">
      <img
        src={_info.comp_url}
        alt={_info.comp_name}
        title={_info.comp_name +
          " " +
          _info.comp_lvl +
          " " +
          _info.comp_life_current +
          "/" +
          _info.comp_life_max}
      />
    </li>
    <li id="shield">
      <img
        src={_info.shield_url}
        alt={_info.shield_name}
        title={_info.shield_name +
          " " +
          _info.shield_lvl +
          " " +
          _info.shield_life_current +
          "/" +
          _info.shield_life_max}
      />
    </li>
  </ul>
  <div>
    <img src={"src/lib/images/" + "spacecraft.png"} alt="" />
    <ul>
      <li id="mod_left">
        <img
          src={_info.mod1_url}
          alt={_info.mod1_name}
          title={_info.mod1_name +
            " " +
            _info.mod1_lvl +
            " " +
            _info.mod1_life_current +
            "/" +
            _info.mod1_life_max}
        />
      </li>
      <li id="mod_centr">
        <img
          src={_info.mod2_url}
          alt={_info.mod2_name}
          title={_info.mod2_name +
            " " +
            _info.mod2_lvl +
            " " +
            _info.mod2_life_current +
            "/" +
            _info.mod2_life_max}
        />
      </li>
      <li id="mod_right">
        <img
          src={_info.mod3_url}
          alt={_info.mod3_name}
          title={_info.mod3_name +
            " " +
            _info.mod3_lvl +
            " " +
            _info.mod3_life_current +
            "/" +
            _info.mod3_life_max}
        />
      </li>
    </ul>
  </div>
  <ul id="right_bar">
    <li id="gun_right">
      <img
        src={_info.gun2_url}
        alt={_info.gun2_name}
        title={_info.gun2_name +
          " " +
          _info.gun2_lvl +
          " " +
          _info.gun2_life_current +
          "/" +
          _info.gun2_life_max}
      />
    </li>
    <li id="radar">
      <img
        src={_info.radar_url}
        alt={_info.radar_name}
        title={_info.radar_name +
          " " +
          _info.radar_lvl +
          " " +
          _info.radar_life_current +
          "/" +
          _info.radar_life_max}
      />
    </li>
    <li id="react">
      <img
        src={_info.react_url}
        alt={_info.react_name}
        title={_info.react_name +
          " " +
          _info.react_lvl +
          " " +
          _info.react_life_current +
          "/" +
          _info.react_life_max}
      />
    </li>
    <li id="engine">
      <img
        src={_info.engine_url}
        alt={_info.engine_name}
        title={_info.engine_name +
          " " +
          _info.engine_lvl +
          " " +
          _info.engine_life_current +
          "/" +
          _info.engine_life_max}
      />
    </li>
  </ul>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 60px 140px 60px;
    grid-column-gap: 2vw;
    background-color: #51829a50;
    border-radius: 5px;
    box-shadow: 0 0 10px -5px #51829a;
    align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: 60px 40px 40px 60px;
    row-gap: 3vh;
  }
  li {
    position: relative;
    list-style: none;
    border: solid 1px #87ceeb1f;
    background-color: #87ceeb21;
    padding: 2px;
    border-radius: 5px;
  }
  li img {
    height: 100%;
  }

  img {
    width: 100%;
    filter: drop-shadow(0px 0px 8px skyblue);
  }
  #gun_left {
    top: -10px;
    left: 20px;
  }
  #gun_right {
    top: -10px;
    right: 20px;
    transform: rotateY(180deg);
  }
  #shield {
    bottom: -10px;
    left: 20px;
  }
  #engine {
    bottom: -10px;
    right: 20px;
  }
  div {
    display: grid;
    grid-template-rows: 1fr 30px;
    row-gap: 2vh;
  }
  div ul {
    display: grid;
    grid-template-columns: 30px 30px 30px;
    grid-template-rows: 30px;
    justify-content: space-evenly;
  }
</style>
