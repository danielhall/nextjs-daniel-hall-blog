'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    const isLast = index === segments.length - 1;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    // Handle slug segments
    const isSlug = segment.includes('-');
    const formattedLabel = isSlug 
      ? segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : label;

    return {
      label: formattedLabel,
      path,
      isLast
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-4 ml-1 md:ml-5 text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href="/" 
            className="text-foreground transition-all duration-200 hover:underline"
          >
            Home
          </Link>
        </li>
        {breadcrumbs.map(({ label, path, isLast }) => (
          <li key={path} className="flex items-center space-x-2">
            <span className="text-foreground/10">/</span>
            {isLast ? (
              <span className="text-foreground/30">{label}</span>
            ) : (
              <Link 
                href={path}
                className="text-foreground transition-all duration-200 hover:underline"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
