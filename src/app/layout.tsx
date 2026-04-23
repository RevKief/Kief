import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiefer Likens — Digital Jack of All Trades",
  description:
    "Creator of Digital Growth Systems, Designer, Photographer, Musician, Web Developer, and Reformed Christian Pastor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
