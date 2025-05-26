import Prose from '@/components/prose';

export default function Loading() {
  return (
    <Prose header="Loading...">
      <div className="animate-pulse">
        <div className="h-4 bg-navigation rounded w-1/4 mb-8"></div>
        
        <div className="relative w-full aspect-[2/1] mb-8 bg-navigation rounded"></div>
        
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-navigation rounded w-full"></div>
              <div className="h-4 bg-navigation rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </Prose>
  );
}
