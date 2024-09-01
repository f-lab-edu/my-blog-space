import { NextRequest, NextResponse } from 'next/server';
import { collection, query, Query, where, getDocs } from 'firebase/firestore';
import { fireStore as db } from '@/firebase/index';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const blogListQuery = params.slug
    ? query(collection(db, 'blogs'), where('slug', '==', params.slug))
    : collection(db, 'blogs');

  const querySnapshot = await getDocs(blogListQuery);

  if (querySnapshot.empty) {
    return NextResponse.json(
      { message: '존재하지 않는 블로그 제목입니다.' },
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
