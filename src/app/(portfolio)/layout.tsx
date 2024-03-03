import { Header } from "@/components/Header";
import { MainContainer } from "./styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MainContainer>
          {children}
      </MainContainer>
    </>
  );
}
