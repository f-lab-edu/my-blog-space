import Link from 'next/link';
import Image from 'next/image';

import { ROUTES } from '@/shared/config/routes';
import { Blog } from '@/entities/blog/types';

export default function BlogList({ contents = [] }: { contents: Blog[] }) {
  return (
    <ul className='flex flex-col gap-5'>
      {contents.map((data) => (
        <Link key={data.id} href={ROUTES.BLOG.DETAIL(data.slug)}>
          <li key={data.id} className='flex justify-between cursor-pointer'>
            <div>
              <p className='font-bold'>{data.title}</p>
              <p>{data.content}</p>
              <p className='font-light text-xs'>{data.date}</p>
            </div>
            <div className='relative w-16 h-16 bg-slate-100 overflow-clip'>
              <Image
                alt={`${data.title} thumbnail`}
                src={data.thumbnail}
                width={64}
                height={64}
                style={{ objectFit: 'cover' }}
                quality={60}
              />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
