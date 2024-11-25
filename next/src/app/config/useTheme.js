import { useComputedColorScheme } from "@mantine/core";
import { useState } from "react";

const red_theme = {
  main_text_color: "#f1beb5",
  secondary_text_color: "rgba(241, 190, 181, 0.67)",
  app_bg_dark_color: "#0f1523",
  card_bg_dark_color: "#19143d",
  nav_link_dark_color: "#131b2d",
  nav_link_dark_color: "#131b2d",
  ultra_special_dark: "rgb(13, 14, 20)",
};

const cyan_theme = {
  main_text_color: "#5DE4c7",
  secondary_text_color: "#e4f0fb",
  app_bg_dark_color: "#13151d",
  card_bg_dark_color: "#303340",
  nav_link_dark_color: "#1b1e28",
  ultra_special_dark: "rgb(13, 14, 20)",
};

const useTheme = () => {
  const colorScheme = useComputedColorScheme();
  const [darkTheme, setDarkTheme] = useState(
    colorScheme === "dark-cyan" ? cyan_theme : colorScheme === "dark-red" ? red_theme : ""
  );
  return [darkTheme];
};

export default useTheme;

/*
// const dark_theme = {
//   main_text_color: "#f1beb5",
//   secondary_text_color: "rgba(241, 190, 181, 0.67)",
//   app_bg_dark_color: "#0f1523",
//   card_bg_dark_color: "#19143d",
//   nav_link_dark_color: "#131b2d",

//   blogCard: {
//     badgeColor: "#f1beb5",
//     title: "#f1beb5",
//     para: "rgba(241, 190, 181, 0.67)",
//     background: '#131b2d"',
//   },

//   bottomBar: {
//     iconIdle: "rgba(241, 190, 181, 0.67)",
//     iconActive: "#febeb5",
//     expandedBackground: "#09071a",
//   },
//   themeToggleButton: {
//     iconIdle: "rgba(241, 190, 181, 0.67)",
//     iconActive: "#febeb5",
//     background: "#09071a",
//     activeBackground: "rgb(11, 9, 28)",
//   },
//   bookCards: {
//     author_name: "rgba(241, 190, 181, 0.67)",
//     badgeColor: "#f1beb5",
//     title: "#f1beb5",
//     background: "rgb(19, 27, 45)",
//   },
//   userCard: {
//     name: "#f1beb5",
//     email: "rgba(241, 190, 181, 0.67)",
//     background: "rgb(19, 27, 45)",
//   },
//   main_text_color: "#f1beb5",
//   secondary_text_color: "rgba(241, 190, 181, 0.67)",
//   app_bg_dark_color: "#0f1523",
//   card_bg_dark_color: "#19143d",
//   nav_link_dark_color: "#131b2d",
// };
// const light_theme = {};
// export { dark_theme, light_theme };

const dark_theme = {
  main_text_color: "#5DE4c7",
  secondary_text_color: "#e4f0fb",
  app_bg_dark_color: "#13151d",
  card_bg_dark_color: "#303340",
  nav_link_dark_color: "#1b1e28",
  ultra_special_dark: "rgb(13, 14, 20)",

  //   main_text_color: "#f1beb5",
  //   secondary_text_color: "rgba(241, 190, 181, 0.67)",
  //   app_bg_dark_color: "#0f1523",
  //   card_bg_dark_color: "#19143d",
  //   nav_link_dark_color: "#131b2d",
  // ultra_special_dark: "rgb(11,09,28)",
};
const light_theme = {};
export { dark_theme, light_theme };

// #5DE4c7
// #5fb3a1
// #42675A
// #e4f0fb
// #89ddff
// #ADD7FF
// #91B4D5
// #a6accd
// #767c9d
// #7390AA
// #506477
// #a0a0a0
// #525252
// #2d2d30
// #1b1e28
// #202430
// #303340
// #d0679d
// #f087bd
// #fffac2
// #ffffff
*/
