'use client';

interface SkillCardProps {
    header: string;
    children?: React.ReactNode | undefined;
}

export default function Prose({ header, children }: SkillCardProps) {
    return (
        <section className="prose p-2 md:p-5 mb-6 md:mb-0">
           <h2 className="text-4xl font-bold sm:mt-0 mb-8">{header}</h2>
           {children && (
            children
           )}
        </section>
    );
}
