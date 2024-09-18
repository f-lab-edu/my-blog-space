import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { CustomError } from '@/app/api/_lib/handler';

export const queryBlogDetail = async (slug: string) => {
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
    title: doc.data().title,
    date: doc.data().date,
    author: doc.data().author,
  };

  return data;
};
