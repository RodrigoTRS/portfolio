"use client";

import { styled } from "styled-components";
import Image from "next/image";

export const ExperienceContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ExperienceImage = styled(Image)`
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme["background-400"]};
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
`;

export const ExperienceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.4;
  }
`;

export const ExperienceText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  span {
    font-weight: 500;
    color: ${(props) => props.theme["foreground-600"]};
  }
`;

export const ExperienceModelTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["foreground-900"]};
  padding: 2px 8px 2px 4px;
  border-radius: 4px;
  font-size: 0.75rem;
`;

export const PositionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PositionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["green-500"]};

  span {
    color: ${(props) => props.theme["foreground-600"]};
  }
`;

export const PositionDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["foreground-600"]};
`;
