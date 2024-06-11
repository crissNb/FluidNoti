import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./variables.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FluidNoti",
  description: "Dynamic Island Experience for your MacBook",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
