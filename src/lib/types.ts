export interface FeaturedImage {
    node: {
        sourceUrl: string;
        altText: string;
    };
}

export interface Author {
    node: {
        name: string;
        firstName: string;
        lastName: string;
        avatar: {
            url: string;
        };
    };
}

export interface Category {
    node: {
        name: string;
        slug: string;
    };
}

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: FeaturedImage;
    author: Author;
    categories: {
        edges: Category[];
    };
    content?: string;
}

export interface Page {
    id: string;
    title: string;
    slug: string;
    content: string;
}

export interface Menu {
    nodes: {
        id: string;
        label: string;
        path: string;
    }[]
}
