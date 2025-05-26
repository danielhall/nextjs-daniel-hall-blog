'use client';

import { motion } from 'framer-motion';

interface ProseProps {
    header: string;
    children?: React.ReactNode | undefined;
    animate?: boolean;
}

export default function Prose({ header, children, animate = true }: ProseProps) {
    const initial = animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 };
    const animation = animate ? { opacity: 1, y: 0 } : undefined;

    return (
        <motion.section 
            className="prose p-2 md:p-5 mb-6 md:mb-0"
            initial={initial}
            animate={animation}
            exit={{ opacity: 0 }}
        >
            <motion.h2 
                className="text-4xl font-bold sm:mt-0 mb-8"
                layout={animate ? "position" : false}
            >
                {header}
            </motion.h2>
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
