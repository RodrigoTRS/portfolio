"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0px 0px 0px 2px ${(props) => props.theme["green-500"]}
    }

    ::-moz-selection { /* Code for Firefox */
        color: ${(props) => props.theme["foreground-900"]};
        background: ${(props) => props.theme["green-500"]};
    }

    ::selection {
        color: ${(props) => props.theme["foreground-900"]};
        background: ${(props) => props.theme["green-500"]};
    }

    body {
        background: ${(props) => props.theme["background-100"]};
        color: ${(props) => props.theme["foreground-900"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: inherit;
        font-weight: 500;
        font-size: 1rem;
    }
`;
