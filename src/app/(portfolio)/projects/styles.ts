"use client";

import { styled } from "styled-components";

export const ProjectsContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
