"use client";

import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme["background-400"]};

  background: ${(props) => props.theme["background-100"]};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;

  padding: 0 16px;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

  box-shadow: unset;
  border-bottom: 4px solid
    ${(props) =>
      props.active === "active" ? props.theme["green-500"] : "transparent"};
  padding: 24px 4px;

  &:hover {
    color: ${(props) => props.theme["green-700"]};
  }
`;

export const HomeAnchorLink = styled(Link)`
  box-shadow: unset;

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
