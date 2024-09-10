import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  Query,
  QueryConstraint,
} from 'firebase/firestore';
import { CustomError } from '@/app/api/_lib/handler';

export const queryBlogList = async (params?: {
  category?: string;
  tags?: string;
}) => {
  const category = params?.category;
  const tags = params?.tags;

  const queries: QueryConstraint[] = [];

  if (category && category !== 'ALL')
    queries.push(where('category', '==', category));
  if (tags) queries.push(where('tags', 'array-contains', tags));

  const blogListQuery: Query = query(
    collection(db, FIREBASE_COLLECTION_KEYS.BLOGS),
    ...queries
  );

  const querySnapshot = await getDocs(blogListQuery);
  if (querySnapshot.empty) throw new CustomError(404);

  const contents = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      content: data.content,
      date: data.date,
      thumbnail: data.thumbnail,
    };
  });

  return {
    contents,
  };
};
