'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface ListItemProps {
    children: React.ReactNode;
}

interface SkillCardProps {
    title: string;
    children: React.ReactNode;
}

export default function SkillCard({ title, children }: SkillCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] mb-4">
            <div 
                className={`
                    bg-navigation
                    rounded-2xl overflow-hidden
                    transition-all duration-500 ease-out
                    hover:shadow-lg hover:scale-[1.02]
                    ${isExpanded ? 'shadow-xl scale-[1.02]' : 'shadow-sm'}
                    cursor-pointer
                    origin-top
                `}
                onClick={() => setIsExpanded(!isExpanded)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsExpanded(!isExpanded);
                    }
                }}
            >
                <div className="flex flex-col">
                    <div className={`
                        p-5 relative
                        transition-all duration-500 ease-out
                        group min-h-[120px] flex flex-col
                    `}>
                        <h3 className="text-2xl font-medium text-left mb-auto group-hover:text-foreground/80 dark:group-hover:text-foreground/80 transition-colors duration-200 pr-8">{title}</h3>
                        <ChevronDownIcon 
                            className={`
                                w-6 h-6
                                transition-all duration-500 ease-out
                                group-hover:text-foreground/80 dark:group-hover:text-foreground/80
                                opacity-40 group-hover:opacity-80
                                absolute bottom-5 right-5
                                ${isExpanded ? 'transform rotate-180' : 'transform rotate-0'}
                            `}
                        />
                    </div>
                    <div 
                        className={`
                            overflow-hidden
                            transition-all duration-500 ease-out
                            ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        <div className="px-5 pt-2 pb-5">
                            <div className="space-y-2.5">
                                {React.Children.map(children, child => {
                                    if (React.isValidElement<{ children: React.ReactElement<ListItemProps>[] }>(child) && child.type === 'ul') {
                                        return (
                                            <div className="space-y-2.5">
                                                {React.Children.map(child.props.children, (li) => {
                                                    if (React.isValidElement<ListItemProps>(li)) {
                                                        return (
                                                            <div 
                                                                key={li.key}
                                                                className="
                                                                    pl-4 py-2.5
                                                                    border-l-2 border-[#b8b7b5] dark:border-[#3a3a39]
                                                                    hover:border-foreground/40
                                                                    transition-colors duration-200
                                                                    text-foreground/80 hover:text-foreground
                                                                "
                                                            >
                                                                {li.props.children}
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                        );
                                    }
                                    return child;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
