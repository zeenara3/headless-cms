import { GraphQLClient } from 'graphql-request';
import { Post, Page } from './types';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!API_URL) {
    console.warn('NEXT_PUBLIC_WORDPRESS_API_URL is not defined in environment variables.');
}

const client = new GraphQLClient(API_URL || 'https://example.com/graphql');

const POST_FIELDS_FRAGMENT = `
  fragment PostFields on Post {
    id
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        firstName
        lastName
        avatar {
          url
        }
      }
    }
    categories {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;

export async function getAllPosts(): Promise<Post[]> {
    const query = `
    ${POST_FIELDS_FRAGMENT}
    query GetAllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `;

    try {
        const data: any = await client.request(query);
        return data.posts.edges.map((edge: any) => edge.node);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const query = `
    ${POST_FIELDS_FRAGMENT}
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ...PostFields
        content
      }
    }
  `;

    try {
        const data: any = await client.request(query, { slug });
        return data.post;
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error);
        return null;
    }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
    const query = `
    query GetPageBySlug($slug: ID!) {
      page(id: $slug, idType: URI) {
        id
        title
        slug
        content
      }
    }
  `;

    try {
        const data: any = await client.request(query, { slug });
        return data.page;
    } catch (error) {
        console.error(`Error fetching page with slug ${slug}:`, error);
        return null;
    }
}
