"use client";

import Image from "next/image";
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

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const SideColumn = styled.aside`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  width: 100%;

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const ImageContainer = styled(Image)`
  display: flex;

  border-radius: 8px 8px 0 0;
  object-fit: cover;

  height: 160px;
  width: 100%;

  border: 1px solid ${(props) => props.theme["background-300"]};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0 0 8px 8px;
  padding: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;

  background: ${(props) => props.theme["background-200"]};
  border: 1px solid ${(props) => props.theme["background-300"]};

  h1 {
    font-size: 1.5rem;
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

  h2 {
    font-size: 1.25rem;
    line-height: 1.4;
  }
`;

export const ExperienceModelTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["foreground-900"]};
  padding: 4px 8px 4px 4px;
  border-radius: 4px;
`;

export const ExperienceText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  span {
    font-weight: 500;
    color: ${(props) => props.theme["foreground-700"]};
  }
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
    color: ${(props) => props.theme["foreground-800"]};
  }
`;

export const PositionDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CourseItem = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["foreground-700"]};
  }
`;

export const CourseTagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const CourseTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 4px;

  background: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["black"]};
`;

export const LanguageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  h3 {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["foreground-700"]};
  }
`;
