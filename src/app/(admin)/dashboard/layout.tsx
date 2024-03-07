"use client"

import { Sidebar } from "../components/Sidebar";
import { DashboardContainer, DashboardContent } from "./styles";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <DashboardContainer>
          <Sidebar />
          <DashboardContent>
            {children}
          </DashboardContent>
      </DashboardContainer>

  );
}
