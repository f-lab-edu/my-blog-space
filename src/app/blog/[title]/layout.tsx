import './code.css';

import Link from 'next/link';
import dayjs from 'dayjs';

import { queryBlogDetail } from '@/features/blog/apis';
import { getTimeDifference } from '@/shared/lib/getTimeDifference';
import Comment from '@/entities/comment/Utterances';
import { ROUTES } from '@/shared/config/routes';

export default async function BlogDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { title: string };
}>) {
  const { createdAt, title, author, category, relatedBlogList } =
    await queryBlogDetail(params.title);

  return (
    <article>
      <header className='mb-8'>
        <h2 className='pb-2 text-center font-bold text-4xl'>{title}</h2>
        <div className='flex justify-center gap-2 font-light text-sm text-slate-600'>
          <span>{getTimeDifference(createdAt)}</span>
          <span>@{author}</span>
        </div>
      </header>
      {children}

      <div className='mockup-browser border-base-300 border mt-20'>
        <div className='mockup-browser-toolbar'>
          <div className='input border-base-300 border'>
            [{category}] 카테고리의 다른 글
          </div>
        </div>
        <div className='border-base-300 flex justify-center border-t px-4 py-4'>
          <ul className='w-full'>
            {relatedBlogList.map((blog) => (
              <li key={blog.id}>
                <Link href={ROUTES.BLOG.DETAIL(blog.slug)}>
                  <button className='btn btn-ghost btn-sm w-full text-left'>
                    <p className='flex justify-between w-full'>
                      <span>{blog.title}</span>
                      <span>{dayjs(blog.createdAt).format('YYYY-MM-DD')}</span>
                    </p>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='mt-20'>
        <Comment />
      </div>
    </article>
  );
}
