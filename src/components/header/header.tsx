"use client";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => { 
    return (
        <>
            <div className={`flex items-center px-4 md:px-8 py-4 md:hidden transition-opacity  
                    ${sidebarOpen ? "opacity-10 duration-100" : "opacity-100 duration-700"}`}>
                <a onClick={() => setSidebarOpen(true)} className="inline-flex items-center">
                    <TbLayoutSidebarLeftExpand className="w-8 h-8 bg-navigation p-2 rounded" />
                </a>
                <a onClick={() => setSidebarOpen(true)} className="px-3 rounded inline-block">
                    <span className="text-2xl font-bold block">Daniel Hall</span>
                    <span className="text-sm font-italic block">Software Solutions Architect</span>
                </a>
            </div>
            
        </>
    )
}

export default Header;