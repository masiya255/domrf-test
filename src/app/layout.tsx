import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const font = localFont({
  src: "./fonts/Gilroy-SemiBold.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-orochimaru">{children}</body>
    </html>
  );
}
