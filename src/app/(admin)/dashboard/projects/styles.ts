"use client";

import { styled } from "styled-components";

export const ProjectsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme["foreground-900"]};
  }
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background: ${(props) => props.theme["background-300"]};

  tr {
    td {
      padding: 16px;
      color: ${(props) => props.theme["foreground-900"]};
      font-weight: 500;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-top: 1px solid ${(props) => props.theme["background-300"]};
    background: ${(props) => props.theme["background-200"]};
  }
`;

export const TableFooter = styled.tfoot`
  background: ${(props) => props.theme["background-300"]};
  tr {
    td {
      padding: 8px 16px;
    }
  }
`;

export const TdField = styled.td`
  padding: 16px;
  color: ${(props) => props.theme["foreground-600"]};
`;

export const IdField = styled(TdField)`
  width: 400px;
`;

export const TitleField = styled(TdField)`
  flex: 1;
`;

export const ActionsField = styled(TdField)`
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

interface ActionsButtonProps {
  type: "edit" | "delete";
}

export const ActionsButton = styled.button<ActionsButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border: 2px solid ${(props) => props.theme["background-300"]};
  border-radius: 8px;

  background: ${(props) => props.theme["background-100"]};
  color: ${(props) => props.theme["foreground-800"]};

  &:hover {
    cursor: pointer;
    border: 2px solid
      ${(props) =>
        props.type === "edit"
          ? props.theme["green-500"]
          : props.theme["red-500"]};
    color: ${(props) =>
      props.type === "edit"
        ? props.theme["green-900"]
        : props.theme["red-500"]};
  }
`;
