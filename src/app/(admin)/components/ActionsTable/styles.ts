import { styled } from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopDecorator = styled.div`
  width: 100;
  height: 4px;
  background: ${(props) => props.theme["background-300"]};
  border: 2px solid ${(props) => props.theme["background-300"]};
  border-radius: 4px 4px 0 0;
`;

export const BottomDecorator = styled.div`
  width: 100;
  height: 4px;
  background: ${(props) => props.theme["background-300"]};
  border: 2px solid ${(props) => props.theme["background-300"]};
  border-radius: 0 0 4px 4px;
`;

export const TableWrapper = styled.table`
  border-collapse: collapse;
  border: 2px solid ${(props) => props.theme["background-300"]};
`;

export const TableHeader = styled.thead`
  background: ${(props) => props.theme["background-300"]};

  tr {
    td {
      color: ${(props) => props.theme["foreground-900"]};
      padding: 12px 16px 16px;

      &:last-child {
        width: 160px;
        text-align: end;
      }
    }
  }
`;

interface HeaderItemProps {
  width?: number;
}

export const HeaderItem = styled.td<HeaderItemProps>`
  color: ${(props) => props.theme["foreground-900"]};
  padding: 12px 16px 16px;
  width: ${(props) => props.width && `${props.width}px`};
`;

export const TableBody = styled.tbody`
  tr {
    &:not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme["background-300"]};
    }

    td {
      padding: 16px;
      color: ${(props) => props.theme["foreground-600"]};

      &:last-child {
        float: right;
      }
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ActionButtonProps {
  type: "delete" | "update";
}

export const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme["background-300"]};
  color: ${(props) => props.theme["foreground-600"]};
  background: transparent;

  &:hover {
    cursor: pointer;

    color: ${(props) => props.type === "delete" && props.theme["red-500"]};
    border-color: ${(props) =>
      props.type === "delete" && props.theme["red-500"]};

    color: ${(props) => props.type === "update" && props.theme["green-700"]};
    border-color: ${(props) =>
      props.type === "update" && props.theme["green-500"]};
  }
`;
