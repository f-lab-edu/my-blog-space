import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { CustomError } from '@/app/api/_lib/handler';

export const queryGalleryList = async (params?: { category?: string }) => {
  const category = params?.category;

  const galleryListQuery = category
    ? query(
        collection(db, FIREBASE_COLLECTION_KEYS.GALLERIES),
        where('category', '==', category)
      )
    : query(collection(db, FIREBASE_COLLECTION_KEYS.GALLERIES));

  const querySnapshot = await getDocs(galleryListQuery);
  if (querySnapshot.empty) throw new CustomError(400);

  const contents = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      date: data.date,
      thumbnail: data.thumbnail,
    };
  });

  return { contents };
};
