import { NextRequest } from 'next/server';

import { fireStore as db } from '@/firebase/index';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const category = searchParams.get('category');

  const galleryListQuery = category
    ? query(collection(db, 'galleries'), where('category', '==', category))
    : query(collection(db, 'galleries'));

  const querySnapshot = await getDocs(galleryListQuery);

  const contents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const data = {
    contents,
  };

  return Response.json({ message: 'success', data }, { status: 200 });
}
