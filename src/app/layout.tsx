"use client"
import { Poppins } from "next/font/google";
import "../styles/index.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
