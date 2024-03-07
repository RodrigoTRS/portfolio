"use client";

import { styled } from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary" | "deletion";
  size: "bg" | "sm" | "square";
}

export const Button = styled.button<ButtonProps>`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;

  font-family: inherit;
  width: ${(props) => props.size === "square" && "48px"};

  padding: ${(props) => props.size === "bg" && "8px 24px"};
  padding: ${(props) => props.size === "sm" && "4px 12px"};
  padding: ${(props) => props.size === "square" && "12px"};

  background: ${(props) =>
    props.variant === "primary" && props.theme["green-500"]};
  background: ${(props) => props.variant === "secondary" && "transparent"};
  background: ${(props) =>
    props.variant === "deletion" && props.theme["red-500"]};

  color: ${(props) => props.variant === "primary" && props.theme["black"]};
  color: ${(props) =>
    props.variant === "secondary" && props.theme["foreground-900"]};
  color: ${(props) => props.variant === "deletion" && props.theme["white"]};

  border: 2px solid
    ${(props) =>
      props.variant === "secondary"
        ? props.theme["background-300"]
        : "transparent"};

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
