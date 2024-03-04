"use client"

import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/themes/light";
import { darkTheme } from "@/styles/themes/dark";
import { GlobalStyles } from "@/styles/globals";
import { useGlobalStore } from "@/store/globalStore";
import StyledComponentsRegistry from "@/lib/registry";


export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const { colorSchema } = useGlobalStore(store => {
      return {
        colorSchema: store.colorSchema
      }
    })

    return (
      <StyledComponentsRegistry>
        <ThemeProvider theme={colorSchema === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />

            {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    )
}