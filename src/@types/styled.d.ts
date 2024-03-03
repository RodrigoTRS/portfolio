import "styled-components";
import { lightTheme } from "../styles/themes/light";
import { darkTheme } from "@/styles/themes/dark";

type LightThemeType = typeof lightTheme;
type DarkThemeType = typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends LightThemeType {}
  export interface DefaultTheme extends DarkThemeType {}
}
