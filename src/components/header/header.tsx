"use client";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => { 
    return (
        <>
        <div className={`flex items-top ml-2 transition-opacity md:hidden ${sidebarOpen ? "opacity-10 duration-100" : "opacity-100 duration-700"}`}>
          <a
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="inline-block flex items-top mt-4 md:hidden"
          >
            <TbLayoutSidebarLeftExpand className="w-8 h-8 bg-navigation p-2 rounded" />
          </a>
          <a
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 m-2 md:ml-0 md:pl-0 rounded inline-block"
          >
            <span className="text-2xl font-bold block">Daniel Hall</span>
            <span className="text-sm font-italic block">
              Software Solutions Architect
            </span>
          </a>
        </div>
            
        </>
    )
}

export default Header;