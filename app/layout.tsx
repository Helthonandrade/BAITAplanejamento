import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O Tarot Urbano — Equilibrista × BAITA",
  description: "Proposta de brand experience 360º: O Tarot Urbano & Rituais de Rua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
