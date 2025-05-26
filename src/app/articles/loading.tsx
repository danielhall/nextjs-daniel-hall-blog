import Prose from '@/components/prose';

export default function Loading() {
  return (
    <Prose header="Articles" animate={false}>
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <article 
            key={i} 
            className="bg-navigation rounded-2xl overflow-hidden shadow-sm animate-pulse"
          >
            <div className="p-6">
              <div className="h-8 bg-foreground/5 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-foreground/5 rounded w-1/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-foreground/5 rounded w-full"></div>
                <div className="h-4 bg-foreground/5 rounded w-5/6"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Prose>
  );
}
