"use client";

import { TbLayoutSidebarLeftCollapse, TbBrandLinkedin, TbBrandX, TbHome, TbChevronRight } from "react-icons/tb";

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

            <div className="flex items-top px-8 pt-8">
                <a onClick={() => setSidebarOpen(!sidebarOpen)} className="inline-block flex items-top mt-4 md:hidden">
                    <TbLayoutSidebarLeftCollapse className="w-8 h-8 bg-background p-2 rounded" />
                </a>
                <a className="p-2 m-2 md:ml-0 md:pl-0 rounded inline-block">
                    <span className="text-2xl font-bold block">Daniel Hall</span>
                    <span className="text-sm font-italic block">Software Solutions Architect</span>
                </a>
            </div>
            <nav className="px-4 py-4">
                <ul className="list-none space-y-1 divide-y divide-solid divide-navigationSecondary m-0">
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-background transition-bg duration-200">
                            <span className="">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 mt-1 rounded hover:bg-background transition-bg duration-200">
                            <span className="">Articles</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 mt-1 rounded hover:bg-background transition-bg duration-200">
                            <span className="">Experience</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex items-top px-8 space-x-2">
                <a className="inline-block flex items-top mt-4">
                    <TbBrandLinkedin className="w-8 h-8 bg-background p-2 rounded" />
                </a>
                <a className="inline-block flex items-top mt-4">
                    <TbBrandX className="w-8 h-8 bg-background p-2 rounded" />
                </a>
            </div>
        </aside>
    </>)
};

export default Sidebar;