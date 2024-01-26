import "tailwindcss/tailwind.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FacebookMessenger } from "./components/messanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Дорнод Оргинал гоо сайхан",
  description: "Оргинал гоо сайхны бүтээгдэхүүнийг хамгийн боломжийн үнээр",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-purple-50">
      <body className={inter.className}>
        {children}
        <FacebookMessenger />
      </body>
    </html>
  );
}
