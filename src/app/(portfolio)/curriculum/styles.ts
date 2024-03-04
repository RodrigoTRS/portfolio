"use client";

import { styled } from "styled-components";

export const CurriculumContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const SideColumn = styled.aside`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;

  background: ${(props) => props.theme["background-200"]};
  border: 1px solid ${(props) => props.theme["background-300"]};
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme["foreground-700"]};
  }
`;
