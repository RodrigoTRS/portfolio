"use client";

import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 16px;
  height: 100vh;

  @media (max-width: 720px) {
    padding: 32px 16px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;
