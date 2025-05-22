'use client';

import { useState } from "react";
import { Outfit } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header/header";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`${geistSans.variable} flex h-screen font-geistSans overflow-hidden`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {/* Main Content */}
      <main className="relative flex-1 bg-background overflow-y-auto">
        <div className="px-6 pt-6 sm:pt-10 lg:pt-3 pb-12">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className="container pt-2 px-4">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
