import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Post",
  description: "Send a post to future you",
};

const bodoni = Bodoni_Moda({
  weight: ["400", '700'],
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
