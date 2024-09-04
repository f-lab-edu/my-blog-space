import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { handler, CustomError } from '@/app/api/_lib/handler';

export const GET = handler(
  async (request: NextRequest, { params }: { params: { slug: string } }) => {
    const slug = params.slug;

    if (!slug) throw new CustomError(400);

    const blogListQuery = query(
      collection(db, FIREBASE_COLLECTION_KEYS.BLOGS),
      where('slug', '==', slug)
    );

    const querySnapshot = await getDocs(blogListQuery);
    if (querySnapshot.empty) throw new CustomError(404);

    const doc = querySnapshot.docs[0];
    const data = {
      id: doc.id,
      ...doc.data(),
    };

    return NextResponse.json({ message: 'success', data }, { status: 200 });
  }
);
