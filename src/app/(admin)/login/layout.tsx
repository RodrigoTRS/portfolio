"use client"

import { MainContainer } from "./styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainContainer>
        {children}
    </MainContainer>
  );
}
