import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anupama Nair — Full Stack Developer",
  description:
    "Portfolio of Anupama Nair — a Full Stack Developer crafting pixel-perfect interfaces and robust backend systems. Specializing in React, Next.js, Node.js, and AI integrations.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Anupama Nair",
  ],
  openGraph: {
    title: "Anupama Nair — Full Stack Developer",
    description:
      "End-to-end development. Pixel-perfect interfaces. Building things that work & look stunning.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
