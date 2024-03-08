import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

interface PaginationItemProps {
  active: "active" | "not";
}

export const PaginationItem = styled.button<PaginationItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border: unset;

  border-radius: 8px;
  border: 2px solid
    ${(props) =>
      props.active === "active"
        ? props.theme["green-500"]
        : props.theme["background-300"]};

  background: ${(props) =>
    props.active === "active"
      ? props.theme["green-500"]
      : props.theme["background-200"]};

  color: ${(props) =>
    props.active === "active"
      ? props.theme["black"]
      : props.theme["foreground-900"]};

  &:hover {
    cursor: pointer;
  }
`;
