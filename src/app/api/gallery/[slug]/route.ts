import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { handler, CustomError } from '@/app/api/_lib/handler';

type FetchGalleryDetailResponse = {
  id: string;
  artist: string;
  date: string;
  slug: string;
  title: string;
};

const isValidResponse = (data: {
  [key: string]: string;
}): data is FetchGalleryDetailResponse => {
  if (data.id && data.artist && data.date && data.slug && data.title)
    return true;
  return false;
};

export const GET = handler(
  async (request: NextRequest, { params }: { params: { slug: string } }) => {
    const slug = params.slug;

    if (!slug) throw new CustomError(400);

    const galleryListQuery = query(
      collection(db, FIREBASE_COLLECTION_KEYS.GALLERIES),
      where('slug', '==', params.slug)
    );

    const querySnapshot = await getDocs(galleryListQuery);
    if (querySnapshot.empty) throw new CustomError(404);

    const doc = querySnapshot.docs[0];
    const data = {
      id: doc.id,
      ...doc.data(),
    };

    if (!isValidResponse(data)) throw new CustomError(500);

    return NextResponse.json({ message: 'success', data }, { status: 200 });
  }
);
