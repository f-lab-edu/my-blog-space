import { fetchGalleryDetail } from '@/features/gallery/apis';
import { getTimeDifference } from '@/shared/lib/getTimeDifference';

export default async function BlogDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { title: string };
}>) {
  const { date, title, artist } = await fetchGalleryDetail(params.title);

  return (
    <article>
      <header className='mb-8'>
        <h2 className='pb-2 text-center font-bold text-4xl'>{title}</h2>
        <div className='flex justify-center gap-2 font-light text-sm text-slate-600'>
          <span>{getTimeDifference(date)}</span>
          <span>@{artist}</span>
        </div>
      </header>
      {children}
    </article>
  );
}
