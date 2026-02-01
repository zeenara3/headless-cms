import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getPageBySlug, getAllPosts } from '@/lib/api';
import PostBody from '@/components/blog/PostBody';
import { Metadata } from 'next';
import { format } from 'date-fns';

interface Props {
    params: Promise<{
        slug: string[];
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug: slugArray } = await params;
    const slug = slugArray.join('/');
    const post = await getPostBySlug(slug);

    if (post) {
        return {
            title: post.title,
            description: post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
            openGraph: {
                images: post.featuredImage?.node?.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
            },
        };
    }

    const page = await getPageBySlug(slug);
    if (page) {
        return {
            title: page.title,
        };
    }

    return {
        title: 'Not Found',
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: [post.slug],
    }));
}

export const revalidate = 60;

export default async function DynamicPage({ params }: Props) {
    const { slug: slugArray } = await params;
    const slug = slugArray.join('/');

    // Try to fetch as post first
    const post = await getPostBySlug(slug);

    if (post) {
        return (
            <article className="container mx-auto px-6">
                <header className="mb-8 border-b pb-8">
                    <div className="mb-6 text-center">
                        <div className="mb-4 text-sm text-muted-foreground">
                            <time dateTime={post.date}>
                                {format(new Date(post.date), 'MMMM db, yyyy')}
                            </time>
                        </div>
                        <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl" dangerouslySetInnerHTML={{ __html: post.title }} />
                        {post.author?.node && (
                            <div className="flex justify-center items-center space-x-2">
                                {post.author.node.avatar?.url &&
                                    <Image
                                        src={post.author.node.avatar.url}
                                        width={40}
                                        height={40}
                                        alt={post.author.node.name}
                                        className="rounded-full"
                                    />
                                }
                                <span className="font-medium">{post.author.node.name}</span>
                            </div>
                        )}
                    </div>
                    {post.featuredImage && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg">
                            <Image
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText || post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                        </div>
                    )}
                </header>
                <PostBody content={post.content || ''} />
            </article>
        );
    }

    // If not a post, try to fetch as a page
    const page = await getPageBySlug(slug);

    if (page) {
        return (
            <article className="container mx-auto px-6">
                <h1 className="mb-8 text-4xl font-bold md:text-5xl">{page.title}</h1>
                <PostBody content={page.content || ''} />
            </article>
        );
    }

    return notFound();
}
