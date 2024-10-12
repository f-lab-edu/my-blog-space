'use server';

import { revalidatePath } from 'next/cache';

import { request } from '@/shared/apis';

type PostGuestbookRequest = {
  provider: string;
  userId: string;
  content: string;
  name: string;
  image?: string;
  email?: string;
};

export const postGuestbook = async (
  formData: Omit<PostGuestbookRequest, 'date'>
) => {
  await request<{ id: string }, PostGuestbookRequest>('/api/guestbook', {
    method: 'POST',
    body: {
      ...formData,
    },
  });

  revalidatePath('/guestbook');
};
