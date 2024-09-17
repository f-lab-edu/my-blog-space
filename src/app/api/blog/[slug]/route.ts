import { NextRequest, NextResponse } from 'next/server';
import { getDoc, doc } from 'firebase/firestore';
import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { handler, CustomError } from '@/app/api/_lib/handler';

export const GET = handler(
  async (request: NextRequest, { params }: { params: { slug: string } }) => {
    const slug = params.slug;

    if (!slug) throw new CustomError(400);

    const docRef = doc(db, FIREBASE_COLLECTION_KEYS.BLOGS, slug);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) throw new CustomError(404);

    const data = {
      id: docSnap.id,
      ...docSnap.data(),
    };

    return NextResponse.json({ message: 'success', data }, { status: 200 });
  }
);
