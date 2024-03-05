"use client";

import { styled } from "styled-components";

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["foreground-600"]};
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
