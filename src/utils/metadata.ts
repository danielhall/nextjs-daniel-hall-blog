import { Metadata } from 'next';

type GenerateMetadataProps = {
    title: string;
    description: string;
    path?: string;
};

export function generateMetadata({ 
    title, 
    description, 
    path = '' 
}: GenerateMetadataProps): Metadata {
    const url = `https://danieljh.uk${path}`;
    
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: 'Daniel Hall',
            locale: 'en_GB',
            type: 'website',
            images: [
                {
                    url: '/assets/Daniel.jpeg',
                    width: 1200,
                    height: 630,
                    alt: 'Daniel Hall'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            site: '@daniel__jh',
            creator: '@daniel__jh',
            images: ['/assets/Daniel.jpeg'],
            title,
            description
        },
        alternates: {
            canonical: url
        }
    };
}
