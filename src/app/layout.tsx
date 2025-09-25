import Navbar from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calum Bird",
  description: "Calum is a tinkerer, founder, and AI enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="max-w-[90ch] mx-auto overflow-x-hidden h-[calc(100dvh-65px)] w-[calc(100%-2rem)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
