import { getAllPosts } from '@/lib/api';
import PostCard from '@/components/blog/PostCard';

export const revalidate = 60;

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-glow border border-white/50 relative overflow-hidden">

          {/* Glow effect at top corner */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="text-gradient-primary">
                Latest Updates
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-12 leading-relaxed">
              Explore our collection of premium themes, plugins, and tutorials.
            </p>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-500">No content found. Please check your WordPress connection.</p>
              </div>
            )}

            <div className="mt-16 pt-10 border-t border-gray-100 flex justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-secondary to-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                View All Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
