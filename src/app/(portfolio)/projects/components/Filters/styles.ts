"use client";

import { styled } from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const FilterCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.25rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  background: ${(props) => props.theme["background-100"]};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme["foreground-400"]};

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme["green-500"]};
`;
