import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreelaxmi Hegde, Full Stack Developer",
  description: "Skilled in MERN | Build end-to-end solutions",
  keywords: ["Full stack developer", "MERN", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
