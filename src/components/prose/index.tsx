'use client';

import { motion } from 'framer-motion';

interface ProseProps {
    title?: string | undefined;
    header?: string | undefined;
    children?: React.ReactNode | undefined;
    animate?: boolean;
}

export default function Prose({ title, header, children, animate = true }: ProseProps) {
    const initial = animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 };
    const animation = animate ? { opacity: 1, y: 0 } : undefined;

    return (
        <motion.section 
            className="prose md:p-5 mb-6 md:mb-0"
            initial={initial}
            animate={animation}
            exit={{ opacity: 0 }}
        >
            {title && (
                <motion.h1 
                    className="text-2xl font-bold sm:mt-0 mb-8"
                    layout={animate ? "position" : false}
                >
                    {title}
                </motion.h1>
            )}
            {header && (
                <motion.h2 
                    className="text-2xl font-bold sm:mt-0 mb-8"
                    layout={animate ? "position" : false}
                >
                    {header}
                </motion.h2>
            )}

            {children && (
                <motion.div
                    layout={animate}
                    transition={animate ? { duration: 0.5 } : undefined}
                >
                    {children}
                </motion.div>
            )}
        </motion.section>
    );
}
