import { dev } from "$app/environment";

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

const query2 = "https://jsonplaceholder.typicode.com/posts";
const getShipInfo = () => {
  return new Promise((resolve, reject) => {
    let data = {
      craft_img: "Snow_ship_anim1",
      gun1_name: "Лазер Порядка",
      gun1_url: "http://img.starcombats.com/things_new/art_laser1_to20.gif",
      gun1_lvl: "(20)",
      gun1_status: "(артефакт)",
      gun1_up: "1",
      gun1_modif: "1",
      gun1_life_current: "860",
      gun1_life_max: "5000",
      gun2_name: "Лазер Порядка",
      gun2_url: "http://img.starcombats.com/things_new/art_laser1_to20.gif",
      gun2_lvl: "(20)",
      gun2_status: "(артефакт)",
      gun2_up: "1",
      gun2_modif: "1",
      gun2_life_current: "860",
      gun2_life_max: "5000",
      navig_name: "Frequency Targeting",
      navig_url: "http://img.starcombats.com/things_new/n_1166_to20.gif",
      navig_lvl: "(20)",
      navig_status: "(артефакт)",
      navig_up: "0",
      navig_modif: "1",
      navig_life_current: "860",
      navig_life_max: "5000",
      comp_name: "Лазер Порядка",
      comp_url: "http://img.starcombats.com/things_new/cc_06_c1_to20.gif",
      comp_lvl: "(20)",
      comp_status: "(артефакт)",
      comp_up: "0",
      comp_modif: "0",
      comp_life_current: "860",
      comp_life_max: "5000",
      radar_name: "Лазер Порядка",
      radar_url: "http://img.starcombats.com/things_new/rr_1665_c35_to20.gif",
      radar_lvl: "(20)",
      radar_status: "(артефакт)",
      radar_up: "0",
      radar_modif: "0",
      radar_life_current: "860",
      radar_life_max: "5000",
      react_name: "Frequency Targeting",
      react_url: "http://img.starcombats.com/things_new/rr_166_c33_to20.gif",
      react_lvl: "(20)",
      react_status: "(артефакт)",
      react_up: "0",
      react_modif: "1",
      react_life_current: "860",
      react_life_max: "5000",
      shield_name: "Лазер Порядка",
      shield_url: "http://img.starcombats.com/things_new/rsh_1555_to20.gif",
      shield_lvl: "(20)",
      shield_status: "(артефакт)",
      shield_up: "0",
      shield_modif: "1",
      shield_life_current: "860",
      shield_life_max: "5000",
      engine_name: "Лазер Порядка",
      engine_url: "http://img.starcombats.com/things/re_1555_to20.gif",
      engine_lvl: "(20)",
      engine_status: "(артефакт)",
      engine_up: "0",
      engine_modif: "1",
      engine_life_current: "860",
      engine_life_max: "5000",
      mod1_name: "Лазер Порядка",
      mod1_url: "http://img.starcombats.com/things_new/arch_mod_20_Mihai.gif",
      mod1_lvl: "(20)",
      mod1_status: "(артефакт)",
      mod1_up: "0",
      mod1_modif: "0",
      mod1_life_current: "860",
      mod1_life_max: "5000",
      mod2_name: "Лазер Порядка",
      mod2_url: "http://img.starcombats.com/things_new/arch_gv_mod_20_Miha.gif",
      mod2_lvl: "(20)",
      mod2_status: "(артефакт)",
      mod2_up: "0",
      mod2_modif: "1",
      mod2_life_current: "860",
      mod2_life_max: "5000",
      mod3_name: "Лазер Порядка",
      mod3_url: "http://img.starcombats.com/things_new/arch_mod_20_Miha.gif",
      mod3_lvl: "(20)",
      mod3_status: "(артефакт)",
      mod3_up: "0",
      mod3_modif: "1",
      mod3_life_current: "860",
      mod3_life_max: "5000",
    };
    resolve(data);
  });
};
// async function getInfo() {
//   const response = await getShipInfo(); /*fetch(query2)*/
//   //const data = await response.json();
//   return response
// }
export const _info = await getShipInfo();

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
