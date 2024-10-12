import { NextRequest, NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { handler, CustomError } from '@/app/api/_lib/handler';

export const POST = handler(async (req: NextRequest) => {
  const { provider, userId, content, name, image, email } = await req.json();

  if (!provider || !userId || !content || !name) throw new CustomError(400);

  const docRef = await addDoc(
    collection(db, FIREBASE_COLLECTION_KEYS.GUESTBOOK),
    {
      provider,
      userId,
      content,
      name,
      image: image ?? '',
      email: email ?? '',
      createdAt: serverTimestamp(),
    }
  );

  return NextResponse.json(
    {
      message: 'success',
      data: {
        id: docRef.id,
      },
    },
    { status: 201 }
  );
});
