import { styled } from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "bg" | "sm";
}

export const Button = styled.button<ButtonProps>`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 8px;

  border: unset;
  font-family: inherit;

  padding: ${(props) => (props.size === "bg" ? "12px 24px" : "6px 12px")};
  background: ${(props) =>
    props.variant === "primary" ? props.theme["green-500"] : "transparent"};
  color: ${(props) => props.theme["foreground-900"]};
  border: 2px solid
    ${(props) =>
      props.variant === "primary"
        ? "transparent"
        : props.theme["foreground-400"]};

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
