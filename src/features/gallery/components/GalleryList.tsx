import Image from 'next/image';
import Link from 'next/link';

import { Gallery } from '@/entities/gallery/types';
import { ROUTES } from '@/shared/config/routes';

export default function GalleryList({
  contents,
}: Readonly<{ contents: Gallery[] }>) {
  return (
    <div className='flex flex-wrap gap-x-14 gap-y-14'>
      {contents.map((content) => (
        <Link key={content.id} href={ROUTES.GALLERY.DETAIL(content.slug)}>
          <div className='relative w-[198px] h-[198px] bg-slate-100 rounded overflow-hidden group '>
            <Image
              alt='gallery-post-thumbnail'
              src={content.thumbnail}
              height={198}
              width={198}
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p className='font-medium text-white text-center p-2 pointer-events-none'>
                {content.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
