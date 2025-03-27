"use client";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const Header = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => { 
    return (
        <>
            <div className={`flex items-top p-2 md:hidden mb-8 transition-opacity  
                    ${sidebarOpen ? "opacity-10 duration-100" : "opacity-100 duration-700"}`}>
                <a onClick={() => setSidebarOpen(true)} className="inline-block flex items-top mt-4">
                    <TbLayoutSidebarLeftExpand className="w-8 h-8 bg-navigation p-2 rounded" />
                </a>
                <a className="p-2 m-2 rounded inline-block">
                    <span className="text-2xl font-bold block">Daniel Hall</span>
                    <span className="text-sm font-italic block">Software Solutions Architect</span>
                </a>
            </div>
            
        </>
    )
}

export default Header;