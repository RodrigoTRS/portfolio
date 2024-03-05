"use client";

import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  padding: 32px;
  background: ${(props) => props.theme["background-200"]};
  border: 1px solid ${(props) => props.theme["background-300"]};
  border-radius: 8px;
`;
