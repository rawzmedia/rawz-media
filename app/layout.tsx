import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAWZ MEDIA — Productora Audiovisual",
  description: "Contenido ágil, limpio y rentable. Santiago, Chile.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
