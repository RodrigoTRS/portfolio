"use client";

import { styled } from "styled-components";

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  h3 {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["foreground-600"]};
  }
`;
