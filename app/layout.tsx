import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "FIXED.G",
  description:
    "Your very first stop to buy, repair, and sell fixed gear. Also to eat and drink. Explore our latest products and get your fixed gear on its prime again.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define the options for Smooth Scrollbar
  const options = {
    damping: 0.1,
    thumbMinSize: 20,
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
