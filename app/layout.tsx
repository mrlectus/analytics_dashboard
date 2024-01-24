import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { SideBar } from "@/components/sidebar";
import { NavBar } from "@/components/navbar";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" sizes="any" />
      </head>
      <body className={jakarta.className}>
        <React.Fragment>
          <div className="flex flex-row">
            <SideBar />
            <main className="flex flex-col flex-1 ml-20">
              <header className="w-full">
                <NavBar />
              </header>
              {children}
            </main>
          </div>
        </React.Fragment>
      </body>
    </html>
  );
}
