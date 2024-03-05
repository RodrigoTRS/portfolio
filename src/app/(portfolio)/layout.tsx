"use client"

import { Header } from "@/app/(portfolio)/components/Header";
import { MainContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { GetInTouchModal } from "@/app/(portfolio)/components/Modal";
import { Footer } from "@/app/(portfolio)/components/Footer";


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
      <Footer />
      <GetInTouchModal />
    </Dialog.Root>
  );
}
