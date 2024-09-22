import { fireStore as db, FIREBASE_COLLECTION_KEYS } from '@/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const queryGuestbookList = async () => {
  const querySnapshot = await getDocs(
    collection(db, FIREBASE_COLLECTION_KEYS.GUESTBOOK)
  );

  const contents = querySnapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      content: data.content,
      email: data.email,
      name: data.name,
      image: data.image,
      date: data.date,
    };
  });

  return { contents };
};
