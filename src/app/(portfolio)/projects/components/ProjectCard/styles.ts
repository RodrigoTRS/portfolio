"use client";

import { Button } from "@/ui/Button";
import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  padding: 32px;
  background: ${(props) => props.theme["background-200"]};
  border: 1px solid ${(props) => props.theme["background-300"]};
  border-radius: 8px;

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

export const CardHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border: 2px solid ${(props) => props.theme["foreground-500"]};
  border-radius: 4px;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.825rem;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  overflow-wrap: wrap;
`;

export const TechnologyTag = styled.div`
  padding: 0 8px;
  background: ${(props) => props.theme["green-100"]};
  border-radius: 4px;
`;

export const ShowMoreButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
`;
