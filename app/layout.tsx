import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Arena - Vídeos com Sora 2",
  description:
    "Guia prático para criar vídeos com o modelo Sora 2 diretamente do Design Arena."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
