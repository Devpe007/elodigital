import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elo Digital",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex justify-center w-full">
        {children}
      </body>
    </html>
  );
}
