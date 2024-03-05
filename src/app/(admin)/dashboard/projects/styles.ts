"use client";

import { styled } from "styled-components";

export const ProjectsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme["foreground-900"]};
  }
`;
