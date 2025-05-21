'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { InfoIcon, XIcon } from 'lucide-react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiSanity, 
  SiVercel, 
  SiCloudflare 
} from '@icons-pack/react-simple-icons';

interface TechStackModalProps {
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const stackItems = [
  {
    name: 'Next.js',
    description: 'React framework powering this site with App Router and Server Components',
    icon: SiNextdotjs,
  },
  {
    name: 'React',
    description: 'Component-based UI library with TypeScript and custom hooks for interactivity',
    icon: SiReact,
  },
  {
    name: 'Sanity CMS',
    description: 'Headless CMS providing structured content management for blog posts and articles',
    icon: SiSanity,
  },
  {
    name: 'Vercel',
    description: 'Edge-optimized hosting and deployment platform with automatic CI/CD',
    icon: SiVercel,
  },
  {
    name: 'Cloudflare',
    description: 'Global CDN and DNS provider ensuring fast, secure content delivery worldwide',
    icon: SiCloudflare,
  },
];

export function TechStackModal({ setSidebarOpen }: TechStackModalProps) {
  const handleOpenModal = () => {
    if (setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <Dialog.Root onOpenChange={handleOpenModal}>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center text-sm text-foreground/30 hover:text-foreground/50 transition-colors">
          • <InfoIcon className="w-3 h-3 ml-1.5 mr-1" /> Site stack
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-navigation p-6 shadow-lg focus:outline-none">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-medium">Site Stack</Dialog.Title>
            <Dialog.Close className="rounded-full p-1.5 hover:bg-background/50 transition-colors">
              <XIcon className="w-4 h-4" />
            </Dialog.Close>
          </div>
          <div className="space-y-4">
            {stackItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex items-center space-x-3 p-3 rounded-md hover:bg-background/50 transition-colors">
                  <div className="w-8 h-8 px-2 flex items-center justify-center bg-background rounded">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-foreground/60">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
