"use client";

import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme["background-300"]};

  background: ${(props) => props.theme["background-100"]};
`;

export const DesktopHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;

  padding: 0 16px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const MobileHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 0 16px;

  @media (min-width: 720px) {
    display: none;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

interface NavLinkProps {
  active?: "active" | "inactive";
}

export const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  color: ${(props) => props.theme["foreground-800"]};
  font-weight: 500;

  box-sizing: border-box;
  box-shadow: unset;
  padding: 24px 0 20px;

  border-bottom: 4px solid
    ${(props) =>
      props.active === "active" ? props.theme["green-500"] : "transparent"};

  &:hover {
    color: ${(props) => props.theme["green-700"]};
  }
`;

export const HomeAnchorLink = styled(Link)`
  box-shadow: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;

  &:hover {
    opacity: 0.8;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LinkIcon = styled(Link)`
  color: ${(props) => props.theme["foreground-700"]};
  box-shadow: unset;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme["green-700"]};
  }
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background: ${(props) => props.theme["background-200"]};
  border-left: 1px solid ${(props) => props.theme["background-300"]};
`;

export const MobileNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2rem;
  padding: 1rem;
`;

export const MobileAnchorLink = styled(Link)`
  box-shadow: unset;
  font-size: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme["foreground-900"]};

  &:hover {
    color: ${(props) => props.theme["green-500"]};
  }
`;
