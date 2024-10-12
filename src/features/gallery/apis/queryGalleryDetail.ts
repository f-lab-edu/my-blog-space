import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { CustomError } from '@/app/api/_lib/handler';

export const queryGalleryDetail = async (slug: string) => {
  if (!slug) throw new CustomError(400);

  const galleryListQuery = query(
    collection(db, FIREBASE_COLLECTION_KEYS.GALLERIES),
    where('slug', '==', slug)
  );

  const querySnapshot = await getDocs(galleryListQuery);
  if (querySnapshot.empty) throw new CustomError(404);

  const doc = querySnapshot.docs[0];
  const data = doc.data();

  return {
    id: doc.id,
    artist: data.artist,
    createdAt: data.createdAt.toDate(),
    slug: data.slug,
    title: data.title,
  };
};
