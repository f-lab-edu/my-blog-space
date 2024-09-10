import './code.css';

import { queryBlogDetail } from '@/features/blog/apis';
import { getTimeDifference } from '@/shared/lib/getTimeDifference';
import Comment from '@/entities/comment/Utterances';

export default async function BlogDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { title: string };
}>) {
  const { date, title, author } = await queryBlogDetail(params.title);

  return (
    <article>
      <header className='mb-8'>
        <h2 className='pb-2 text-center font-bold text-4xl'>{title}</h2>
        <div className='flex justify-center gap-2 font-light text-sm text-slate-600'>
          <span>{getTimeDifference(date)}</span>
          <span>@{author}</span>
        </div>
      </header>
      {children}
      <div className='mt-8'>
        <Comment />
      </div>
    </article>
  );
}
