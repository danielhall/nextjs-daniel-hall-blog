import Prose from '@/components/prose';

export default function Loading() {
  return (
    <Prose header="Article" animate={false}>
      <div className="max-w-2xl mx-auto animate-pulse">
        <div className="h-8 bg-foreground/5 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-foreground/5 rounded w-1/4 mb-8"></div>
        
        <div className="relative w-full aspect-[2/1] mb-8 bg-foreground/5 rounded"></div>
        
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-foreground/5 rounded w-full"></div>
              <div className="h-4 bg-foreground/5 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </Prose>
  );
}
