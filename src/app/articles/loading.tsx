import Prose from '@/components/prose';

export default function Loading() {
  return (
    <Prose header="Articles">
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <article key={i} className="animate-pulse">
            <div className="h-8 bg-navigation rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-navigation rounded w-1/4 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-navigation rounded w-full"></div>
              <div className="h-4 bg-navigation rounded w-5/6"></div>
            </div>
          </article>
        ))}
      </div>
    </Prose>
  );
}
