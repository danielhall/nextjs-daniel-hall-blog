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
    <div className={`${geistSans.variable} flex h-screen font-geistSans`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {/* Main Content */}
      <main className="flex-1 bg-background overflow-y-auto">
        <div className="px-3 md:px-6 pt-6 sm:pt-10 lg:pt-3 pb-12">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className="container pt-2 md:pt-3 lg:pt-6 px-4 md:pl-5">
            {children}
          </div>
        </div>

      </main>
    </div>
  );
}
