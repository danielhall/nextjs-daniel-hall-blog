"use client";

import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => { 
    return (
    <>
        <aside
            className={`fixed inset-y-0 left-0 z-50 w-80 bg-navigation flex flex-col transition-transform duration-300 ease-in-out ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:w-80 md:static`}>

            <div className="flex items-top p-8">
                <a onClick={() => setSidebarOpen(!sidebarOpen)} className="inline-block flex items-top mt-4 md:hidden">
                    <TbLayoutSidebarLeftCollapse className="w-8 h-8 bg-background p-2 rounded" />
                </a>
                <a className="p-2 m-2 md:ml-0 md:pl-0 rounded inline-block">
                    <span className="text-2xl font-bold block">Daniel Hall</span>
                    <span className="text-sm font-italic block">Software Solutions Architect</span>
                </a>
            </div>
            
            <nav className="flex-1 p-4 space-y-4">
                <a href="#" className="block py-2 px-4 rounded hover:bg-background">
                Dashboard
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-background">
                Settings
                </a>
                <a href="#" className="block py-2 px-4 rounded hover:bg-background">
                Profile
                </a>
            </nav>
        </aside>
    </>)
};

export default Sidebar;