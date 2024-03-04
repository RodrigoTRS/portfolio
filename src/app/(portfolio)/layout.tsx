"use client"

import { Header } from "@/components/Header";
import { MainContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { GetInTouchModal } from "@/components/Modal";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Dialog.Root>
      <Header />
      <MainContainer>
          {children}
      </MainContainer>
      <GetInTouchModal />
    </Dialog.Root>
  );
}
