import Prose from '@/components/prose';

export default function Loading() {
  return (
    <Prose header="Articles" animate={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <article 
            key={i} 
            className="bg-navigation/50 rounded-2xl overflow-hidden shadow-sm animate-pulse h-full flex flex-col"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="h-6 bg-gray-400/50 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-400/50 rounded w-1/4 mb-6"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400/50 rounded w-full"></div>
                <div className="h-4 bg-gray-400/50 rounded w-5/6"></div>
                <div className="h-4 bg-gray-400/50 rounded w-4/6"></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Prose>
  );
}
