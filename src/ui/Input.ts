"use client";

import { styled } from "styled-components";

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;

  border: 2px solid ${(props) => props.theme["background-300"]};
  color: ${(props) => props.theme["foreground-900"]};
  background: ${(props) => props.theme["background-200"]};

  border-radius: 8px;
`;
