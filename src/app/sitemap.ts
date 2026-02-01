import { getAllPosts } from '@/lib/api';
import { MetadataRoute } from 'next';

const URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL
    ? 'https://your-site-domain.com' // Replace with actual domain setup logic
    : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts();

    const postsUrls = posts.map((post) => ({
        url: `${URL}/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    const routes = [
        '',
        '/about',
    ].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date(),
    }));

    return [...routes, ...postsUrls];
}
