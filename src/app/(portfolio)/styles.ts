"use client";

import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 64px 16px 128px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 400px;
  padding: 64px 16px 64px;

  h1 {
    text-align: center;
    line-height: 1.2;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme["foreground-700"]};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  a {
    text-decoration: none;
  }
`;
