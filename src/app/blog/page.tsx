import Image from 'next/image';
import { fetchBlogList } from '@/features/blog/apis';

export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string };
}) {
  const { tag, category } = searchParams;
  const { contents } = await fetchBlogList({ tag, category });

  return (
    <div>
      {contents.map((data: any) => (
        <div key={data.id} className='flex justify-between cursor-pointer'>
          <div>
            <p className='font-bold'>{data.title}</p>
            <p>{data.content}</p>
            <p className='font-light text-xs'>{data.date}</p>
          </div>
          <div className='relative w-16 h-16 bg-slate-100'>
            <Image alt='blog-thumbnail' src={data.thumbnail} fill={true} />
          </div>
        </div>
      ))}
      <div>{searchParams.category}</div>
      <div>{searchParams.tag}</div>
    </div>
  );
}
