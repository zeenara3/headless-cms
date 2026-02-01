import Link from 'next/link';
import { Post } from '@/lib/types';
import Image from 'next/image';

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    return (
        <article className="flex items-start space-x-4 p-4 transition-colors hover:bg-gray-50 rounded-xl group">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg shadow-sm group-hover:scale-105 transition-transform">
                    {post.featuredImage?.node?.sourceUrl ? (
                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                            <Image
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                    )}
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/${post.slug}`} className="focus:outline-none">
                        <span dangerouslySetInnerHTML={{ __html: post.title }} />
                    </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt?.replace(/<[^>]*>/g, '') || '' }} />
            </div>
        </article>
    );
}
