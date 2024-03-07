import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import "dotenv/config";

const font = Poppins({subsets: ['latin'], weight: ["300", "500", "700"]});

export const metadata: Metadata = {
  title: "Rodrigo Teixeira - Portfolio",
  description: "Rodrigo Tiexeira's Developer Portfolio - a web developer from Brazil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
