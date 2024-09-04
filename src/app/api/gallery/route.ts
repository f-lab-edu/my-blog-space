import { NextRequest } from 'next/server';

import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { handler, CustomError } from '@/app/api/_lib/handler';

export const GET = handler(async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const category = searchParams.get('category');

  const galleryListQuery = category
    ? query(
        collection(db, FIREBASE_COLLECTION_KEYS.GALLERIES),
        where('category', '==', category)
      )
    : query(collection(db, FIREBASE_COLLECTION_KEYS.GALLERIES));

  const querySnapshot = await getDocs(galleryListQuery);
  if (querySnapshot.empty) throw new CustomError(400);

  const contents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const data = {
    contents,
  };

  return Response.json({ message: 'success', data }, { status: 200 });
});
