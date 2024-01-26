import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { SideBar } from "@/components/sidebar";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analytics dashboard",
  description: "A responsive and visually appealing analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body className={jakarta.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-row">
            <SideBar />
            <main className="flex flex-col flex-1 ml-20">
              <header className="w-full">
                <NavBar />
              </header>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
