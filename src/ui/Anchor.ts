"use client";

import Link from "next/link";
import { styled } from "styled-components";

interface AnchorProps {
  variant: "primary" | "secondary";
  size: "bg" | "sm" | "square";
}

export const Anchor = styled(Link)<AnchorProps>`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;

  text-decoration: none;
  font-family: inherit;

  width: ${(props) => (props.size === "square" ? "48px" : "")};

  padding: ${(props) =>
    props.size === "bg"
      ? "8px 24px"
      : props.size === "sm"
      ? "4px 12px"
      : "12px 12px"};
  background: ${(props) =>
    props.variant === "primary" ? props.theme["green-500"] : "transparent"};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme["black"]
      : props.theme["foreground-900"]};
  border: 2px solid
    ${(props) =>
      props.variant === "primary"
        ? "transparent"
        : props.theme["foreground-300"]};

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.8;
    border: 2px solid
      ${(props) =>
        props.variant === "secondary"
          ? props.theme["green-500"]
          : "transparent"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
