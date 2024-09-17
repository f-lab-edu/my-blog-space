import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import firebaseApp from './firebaseConfig';
import { FIREBASE_COLLECTION_KEYS } from './keys';

const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { fireStore, storage, FIREBASE_COLLECTION_KEYS };
