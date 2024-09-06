import { NextRequest, NextResponse } from 'next/server';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireStore as db } from '@/firebase/index';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!slug)
    return NextResponse.json(
      { message: '잘못된 요청 정보입니다.' },
      { status: 400 }
    );

  const galleryListQuery = query(
    collection(db, 'galleries'),
    where('slug', '==', params.slug)
  );

  const querySnapshot = await getDocs(galleryListQuery);

  if (querySnapshot.empty) {
    return NextResponse.json(
      { message: '존재하지 않는 데이터입니다.' },
      { status: 404 }
    );
  }

  const doc = querySnapshot.docs[0];
  const data = {
    id: doc.id,
    ...doc.data(),
  };

  return NextResponse.json({ message: 'success', data }, { status: 200 });
}
