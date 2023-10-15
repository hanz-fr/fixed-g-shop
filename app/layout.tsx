import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

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
