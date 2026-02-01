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
            <article className="min-h-screen pb-20">
                <div className="relative h-[60vh] w-full overflow-hidden">
                    {post.featuredImage && (
                        <>
                            <Image
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </>
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16">
                        <div className="container mx-auto">
                            <div className="max-w-3xl space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <time dateTime={post.date} className="bg-background/80 backdrop-blur px-3 py-1 rounded-full border">
                                        {format(new Date(post.date), 'MMMM db, yyyy')}
                                    </time>
                                </div>
                                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl drop-shadow-sm" dangerouslySetInnerHTML={{ __html: post.title }} />
                                {post.author?.node && (
                                    <div className="flex items-center space-x-3 pt-4">
                                        {post.author.node.avatar?.url &&
                                            <Image
                                                src={post.author.node.avatar.url}
                                                width={48}
                                                height={48}
                                                alt={post.author.node.name}
                                                className="rounded-full border-2 border-background ring-2 ring-border"
                                            />
                                        }
                                        <div className="flex flex-col">
                                            <span className="font-semibold">{post.author.node.name}</span>
                                            <span className="text-xs text-muted-foreground">Author</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-12">
                    <PostBody content={post.content || ''} />
                </div>
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
