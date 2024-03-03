"use client";

import Link from "next/link";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 96%;
  max-width: 1120px;
  padding: 64px 16px 64px;
  gap: 0.5rem;

  border-top: 1px solid ${(props) => props.theme["background-400"]};

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme["foreground-700"]};
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
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
