'use client';

import { useState } from "react";
import { Outfit } from "next/font/google";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Breadcrumb from "@/components/breadcrumb";

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
      <main 
        onClick={() => sidebarOpen && setSidebarOpen(false)}
        className={`relative flex-1 bg-background overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? 'md:blur-none blur-sm' : ''
        }`}>
        <div className="px-6 pt-8 sm:pt-10 lg:pt-3 pb-12">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className="container pt-2 md:pt-3 lg:pt-6 px-2">
            <Breadcrumb />
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
