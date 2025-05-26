'use client';

import { motion } from 'framer-motion';

interface ProseProps {
    header: string;
    children?: React.ReactNode | undefined;
}

export default function Prose({ header, children }: ProseProps) {
    return (
        <motion.section 
            className="prose p-2 md:p-5 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
        >
            <motion.h2 
                className="text-4xl font-bold sm:mt-0 mb-8"
                layout="position"
            >
                {header}
            </motion.h2>
            {children && (
                <motion.div
                    layout
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </motion.section>
    );
}
