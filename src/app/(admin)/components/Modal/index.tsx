import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, ModalContainer, ModalDescription, ModalOverlay, ModalTitle } from "./styles";
import { X } from "phosphor-react";
import { ReactNode } from "react";

interface ModalProps {
    title: string;
    description?: string;
    children: ReactNode;
}

export function Modal({ title, description, children}: ModalProps) {
    return (
    <Dialog.Portal>
        <ModalContainer autoFocus={false}>
            <ModalTitle>{title}</ModalTitle>
            {description &&
                <ModalDescription>{description}</ModalDescription>
            }
            { children }
            <Dialog.Trigger asChild>
                <CloseButton title="Close button">
                    <X size="20" weight="bold" />
                </CloseButton>
            </Dialog.Trigger>
        </ModalContainer>
        <ModalOverlay />
    </Dialog.Portal>
    )
}