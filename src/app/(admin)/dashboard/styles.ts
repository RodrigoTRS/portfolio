"use client";

import { styled } from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  height: 100vh;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: calc(100% - 320px);
  margin-left: 320px;
  padding: 64px;
  gap: 2rem;
`;

export const ShortContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 3rem;
`;

export const DoubleColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
