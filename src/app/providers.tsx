"use client"

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { lightTheme } from "@/styles/themes/light";
import { GlobalStyles } from "@/styles/globals";


export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <StyledComponentsRegistry>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />

            {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    )
}