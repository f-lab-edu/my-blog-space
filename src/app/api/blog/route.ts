import { NextRequest } from 'next/server';

import { fireStore as db } from '@/firebase/index';
import {
  collection,
  getDocs,
  query,
  where,
  Query,
  WhereFilterOp,
} from 'firebase/firestore';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const filters: { key: string; operation: WhereFilterOp }[] = [
    {
      key: 'category',
      operation: '==',
    },
    { key: 'tags', operation: 'array-contains' },
  ];

  let blogListQuery: Query = collection(db, 'blogs');

  filters.forEach(({ key, operation }) => {
    const value = searchParams.get(key);
    if (value) {
      blogListQuery = query(blogListQuery, where(key, operation, value));
    }
  });

  const querySnapshot = await getDocs(blogListQuery);

  const contents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const data = {
    contents,
  };

  return Response.json({ message: 'success', data }, { status: 200 });
}
