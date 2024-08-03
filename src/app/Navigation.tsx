import Link from 'next/link';

import {
  BLOG_CATEGORIES,
  BLOG_TAGS,
  GALLERY_CATEGORIES,
  ROUTES,
} from '@/shared/config/routes';

export default function Navigation() {
  return (
    <nav className='menu w-54 mr-5 p-0'>
      <ul className='flex flex-col gap-5 font-serif font-black text-xl'>
        <li>
          <details>
            <summary className='p-0 pr-2'>BLOG</summary>
            <ul className='mt-5'>
              {BLOG_CATEGORIES.map((category) => {
                return (
                  <li key={category} className='font-medium'>
                    <Link
                      href={ROUTES.BLOG.WITH_CATEGORY(category)}
                      className='p-0'
                    >
                      {category}
                    </Link>
                  </li>
                );
              })}
              <li className='mt-5 font-normal mb-2'>TAGS</li>
              <div className='flex flex-wrap gap-1'>
                {BLOG_TAGS.map((tag) => {
                  return (
                    <Link key={tag} href={ROUTES.BLOG.WITH_TAG(tag)}>
                      <button className='btn p-0 min-h-0 min-w-0 h-6 px-2'>
                        #{tag}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className='p-0 pr-2'>GALLERY</summary>
            <ul className='mt-5'>
              {GALLERY_CATEGORIES.map((category) => (
                <li key={category} className='font-medium'>
                  <Link
                    href={ROUTES.GALLERY.WITH_CATEGORY(category)}
                    className='p-0'
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <Link href={ROUTES.PORTFOLIO.BASE} className='p-0'>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link href={ROUTES.RESUME.BASE} className='p-0'>
            RESUME
          </Link>
        </li>
        <li>
          <Link href={ROUTES.GUEST_BOOK.BASE} className='p-0'>
            GUEST BOOK
          </Link>
        </li>
      </ul>
    </nav>
  );
}
