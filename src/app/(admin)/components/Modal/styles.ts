"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "styled-components";

export const ModalOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalContainer = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 440px;
  min-width: 360px;

  gap: 1.5rem;
  padding: 2rem;

  border-radius: 8px;
  border: 2px solid ${(props) => props.theme["background-300"]};
  background: ${(props) => props.theme["background-100"]};

  z-index: 900;
`;

export const ModalTitle = styled(Dialog.Title)`
  line-height: 1;
`;

export const ModalDescription = styled(Dialog.Description)`
  color: ${(props) => props.theme["foreground-700"]};
  font-size: 0.875rem;

  strong {
    color: ${(props) => props.theme["green-700"]};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  color: ${(props) => props.theme["foreground-700"]};
  background: transparent;
  border: unset;
  border-radius: 4px;

  &:hover {
    color: ${(props) => props.theme["green-500"]};
    cursor: pointer;
  }
`;
