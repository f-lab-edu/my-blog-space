import firebaseApp from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { fireStore, storage };
