"use client";

import { styled } from "styled-components";

export const CurriculumContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  h2 {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const SideColumn = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  h2 {
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const CurriculumSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
