import firebaseApp from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';

const fireStore = getFirestore(firebaseApp);
export default fireStore;
