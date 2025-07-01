'use client';

import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

import {
  TbBrandLinkedin,
  TbBrandX,
  TbBrandBluesky
} from "react-icons/tb";

export default function ContactCards() {
    return (
        <div className="flex flex-wrap gap-4">
            <a 
                href="https://www.linkedin.com/in/daniel-hall-89736678/" 
                target="_blank"
                className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] mb-4">
                <div 
                    className={`
                        bg-navigation
                        rounded-2xl overflow-hidden
                        transition-all duration-500 ease-out
                        hover:shadow-lg hover:scale-[1.02]
                        shadow-sm
                        cursor-pointer
                        origin-top
                    `}
                    role="button"
                    tabIndex={0}
                >
                    <div className="flex flex-col">
                        <div className={`
                            p-5 relative
                            transition-all duration-500 ease-out
                            group min-h-[120px] flex flex-col
                        `}>
                            <TbBrandLinkedin className="w-10 h-10 bg-background p-2 rounded mb-5" />
                            <h3 className="text-2xl font-medium text-left pr-8">LinkedIn</h3>
                            <p className="text-sm mt-1 mb-10 text-grey">Connect with me on LinkedIn</p>
                            <ChevronDoubleRightIcon 
                                className={`
                                    w-6 h-6
                                    transition-all duration-500 ease-out
                                    group-hover:text-foreground/80 dark:group-hover:text-foreground/80
                                    opacity-40 group-hover:opacity-80
                                    absolute bottom-5 right-5
                                `}
                            />
                        </div>
                    </div>
                </div>
            </a>
            <a 
                href="https://x.com/daniel__jh" 
                target="_blank"
                className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] mb-4">
                <div 
                    className={`
                        bg-navigation
                        rounded-2xl overflow-hidden
                        transition-all duration-500 ease-out
                        hover:shadow-lg hover:scale-[1.02]
                        shadow-sm
                        cursor-pointer
                        origin-top
                    `}
                    role="button"
                    tabIndex={0}
                >
                    <div className="flex flex-col">
                        <div className={`
                            p-5 relative
                            transition-all duration-500 ease-out
                            group min-h-[120px] flex flex-col
                        `}>
                            <TbBrandX className="w-10 h-10 bg-background p-2 rounded mb-5" />
                            <h3 className="text-2xl font-medium text-left pr-8">X</h3>
                            <p className="text-sm mt-1 mb-10 text-grey">Send a direct message on X</p>
                            <ChevronDoubleRightIcon 
                                className={`
                                    w-6 h-6
                                    transition-all duration-500 ease-out
                                    group-hover:text-foreground/80 dark:group-hover:text-foreground/80
                                    opacity-40 group-hover:opacity-80
                                    absolute bottom-5 right-5
                                `}
                            />
                        </div>
                    </div>
                </div>
            </a>
            <a 
                href="https://bsky.app/profile/danieljh.uk" 
                target="_blank"
                className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] mb-4">
                <div 
                    className={`
                        bg-navigation
                        rounded-2xl overflow-hidden
                        transition-all duration-500 ease-out
                        hover:shadow-lg hover:scale-[1.02]
                        shadow-sm
                        cursor-pointer
                        origin-top
                    `}
                    role="button"
                    tabIndex={0}
                >
                    <div className="flex flex-col">
                        <div className={`
                            p-5 relative
                            transition-all duration-500 ease-out
                            group min-h-[120px] flex flex-col
                        `}>
                            <TbBrandBluesky className="w-10 h-10 bg-background p-2 rounded mb-5" />
                            <h3 className="text-2xl font-medium text-left pr-8">Bluesky</h3>
                            <p className="text-sm mt-1 mb-10 text-grey">Send a direct message on Bluesky</p>
                            <ChevronDoubleRightIcon 
                                className={`
                                    w-6 h-6
                                    transition-all duration-500 ease-out
                                    group-hover:text-foreground/80 dark:group-hover:text-foreground/80
                                    opacity-40 group-hover:opacity-80
                                    absolute bottom-5 right-5
                                `}
                            />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
