import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { format } from 'date-fns';

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    return (
        <article className="group relative flex flex-col space-y-2 border rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
            {post.featuredImage && (
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <time dateTime={post.date}>
                            {format(new Date(post.date), 'MMMM db, yyyy')}
                        </time>
                        {post.categories?.edges?.length > 0 && (
                            <>
                                <span className="mx-1">•</span>
                                <span>{post.categories.edges[0].node.name}</span>
                            </>
                        )}
                    </div>
                    <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                        <Link href={`/${post.slug}`} className="inset-0">
                            <span dangerouslySetInnerHTML={{ __html: post.title }} />
                        </Link>
                    </h3>
                    <div className="text-muted-foreground line-clamp-3 text-sm" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
                <div className="mt-4 flex items-center space-x-2 text-sm font-medium">
                    {post.author?.node?.avatar?.url &&
                        <Image
                            src={post.author.node.avatar.url}
                            width={24}
                            height={24}
                            alt={post.author.node.name}
                            className="rounded-full"
                        />
                    }
                    <span>{post.author?.node?.name}</span>
                </div>
            </div>
            <Link href={`/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
            </Link>
        </article>
    );
}
