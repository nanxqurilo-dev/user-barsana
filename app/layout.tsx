import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barsana | Pure Kachi Ghani Mustard Oil",
  description: "Authentic wood-pressed Kachi Ghani mustard oil. Pure by tradition, made for modern Indian families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
