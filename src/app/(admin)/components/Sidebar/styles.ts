import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${(props) => props.theme["black"]};

  padding: 32px;
  width: 100%;
  max-width: 320px;
  height: 100vh;
`;

export const Logo = styled(Image)`
  filter: brightness(100);
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  gap: 1rem;

  color: ${(props) => props.theme["white"]};
  padding: 8px;
  border-radius: 8px;

  span {
    font-size: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme["black-muted"]};
  }
`;

export const ColorSchemaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border-radius: 8px;
  border: 2px solid ${(props) => props.theme["black-muted"]};

  background: ${(props) => props.theme["black"]};
  color: ${(props) => props.theme["white"]};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["black-muted"]};
  }
`;
