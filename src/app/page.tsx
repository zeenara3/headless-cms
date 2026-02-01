import { getAllPosts } from '@/lib/api';
import PostCard from '@/components/blog/PostCard';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <section>
      <div className="mb-8 pl-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Latest Posts</h1>
        <p className="mt-2 text-muted-foreground">Stories, thoughts, and ideas.</p>
      </div>
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pl-6 pr-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="pl-6 text-muted-foreground">No posts found. Please configure your WordPress API URL.</p>
      )}
    </section>
  );
}
