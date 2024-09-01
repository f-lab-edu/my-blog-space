import { NextRequest } from 'next/server';

import { fireStore as db } from '@/firebase/index';
import {
  collection,
  getDocs,
  query,
  where,
  Query,
  QueryConstraint,
} from 'firebase/firestore';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const category = searchParams.get('category');
  const tags = searchParams.get('tags');

  const queries: QueryConstraint[] = [];

  if (category && category !== 'ALL')
    queries.push(where('category', '==', category));
  if (tags) queries.push(where('tags', 'array-contains', tags));

  const blogListQuery: Query = query(collection(db, 'blogs'), ...queries);

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
