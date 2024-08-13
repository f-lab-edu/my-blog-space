import { fetchBlogDetail } from '@/features/blog/apis';
import { getTimeDifference } from '@/shared/lib/getTimeDifference';

export default async function BlogDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { title: string };
}) {
  const { date, title, author } = await fetchBlogDetail(params.title);

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
    </article>
  );
}
