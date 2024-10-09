import Image from 'next/image';
import dayjs from 'dayjs';

import { GuestBookForm } from '@/features/guestbook/components';
import { queryGuestbookList } from '@/features/guestbook/apis';

export default async function Page() {
  const { contents } = await queryGuestbookList();

  return (
    <>
      <GuestBookForm />
      <div className='mt-4 flex flex-col gap-4'>
        {contents.map((content) => (
          <div key={content.id}>
            <div className='flex items-center mb-2'>
              <Image
                src={content.image}
                alt='user-profile'
                width={64}
                height={64}
                className='rounded-full'
              />
              <div className='ml-4'>
                <p className='font-bold'>{content.name}</p>
                <p className='text-sm text-gray-500'>
                  {dayjs(content.date).format('YYYY-MM-DD')}
                </p>
              </div>
            </div>
            <p className='whitespace-pre-wrap'>{content.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}
