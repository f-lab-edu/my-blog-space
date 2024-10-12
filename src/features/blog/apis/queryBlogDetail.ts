import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
} from 'firebase/firestore';
import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { CustomError } from '@/app/api/_lib/handler';

export const queryBlogDetail = async (slug: string) => {
  if (!slug) throw new CustomError(400);

  const blogListQuery = query(
    collection(db, FIREBASE_COLLECTION_KEYS.BLOGS),
    where('slug', '==', slug),
    limit(1)
  );

  const querySnapshot = await getDocs(blogListQuery);
  if (querySnapshot.empty) throw new CustomError(404);

  const doc = querySnapshot.docs[0];
  const docData = doc.data();

  const sameCategoryQuery = query(
    collection(db, FIREBASE_COLLECTION_KEYS.BLOGS),
    where('category', '==', docData.category),
    orderBy('createdAt', 'desc')
  );

  const sameCategorySnapshot = await getDocs(sameCategoryQuery);
  const sameCategoryList = sameCategorySnapshot.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      slug: docData.slug,
      title: docData.title,
      createdAt: docData.createdAt.toDate(),
    };
  });

  const currentIndex = sameCategoryList.findIndex((blog) => blog.id === doc.id);

  const prevList = sameCategoryList.slice(
    Math.max(0, currentIndex - 3),
    currentIndex
  );
  const nextList = sameCategoryList.slice(currentIndex + 1, currentIndex + 4);

  const relatedBlogList = [...prevList, ...nextList];

  const data = {
    id: doc.id,
    title: docData.title,
    date: docData.date,
    author: docData.author,
    category: docData.category,
    relatedBlogList,
  };

  return data;
};
