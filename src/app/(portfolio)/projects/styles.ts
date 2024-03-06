"use client";

import { styled } from "styled-components";

export const ProjectsContainer = styled.main`
  display: grid;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1120px;
`;

export const ProjectsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

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

export const EmptyProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.7;
    color: ${(props) => props.theme["foreground-700"]};
  }
`;
