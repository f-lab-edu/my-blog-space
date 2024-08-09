import Image from 'next/image';

import { Blog } from '@/entities/blog/types';

export default function BlogList({ contents = [] }: { contents: Blog[] }) {
  return (
    <ul className='flex flex-col gap-5'>
      {contents.map((data: any) => (
        <li key={data.id} className='flex justify-between cursor-pointer'>
          <div>
            <p className='font-bold'>{data.title}</p>
            <p>{data.content}</p>
            <p className='font-light text-xs'>{data.date}</p>
          </div>
          <div className='relative w-16 h-16 bg-slate-100 border border-black'>
            <Image
              alt='blog-thumbnail'
              src={data.thumbnail}
              fill
              sizes='100%, 100%'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
