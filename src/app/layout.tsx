import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudy Paningal | Portfolio",
  description: "Personal portfolio website of Rudy Paningal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
