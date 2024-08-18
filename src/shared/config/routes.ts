export const BLOG_CATEGORIES = ['ALL', '2024', '2023'] as const;
export const BLOG_TAGS = [
  'JAVASCRIPT',
  'HTML',
  'CSS',
  'NEXT.JS',
  'REACT',
] as const;

export const GALLERY_CATEGORIES = ['TECH', 'ARTS'] as const;

export const ROUTES = {
  BLOG: {
    BASE: '/blog',
    WITH_CATEGORY: (category: string) => `/blog?category=${category}`,
    WITH_TAG: (tag: string) => `/blog?tags=${tag}`,
    DETAIL: (slug: string) => `/blog/${slug}`,
  },
  GALLERY: {
    BASE: '/gallery',
    WITH_CATEGORY: (category: string) => `/gallery?category=${category}`,
  },
  PORTFOLIO: {
    BASE: '/portfolio',
  },
  RESUME: {
    BASE: '/resume',
  },
  GUEST_BOOK: {
    BASE: '/guest',
  },
};

export default ROUTES;
