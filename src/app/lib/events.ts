import { db } from "../lib/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export const addEvent = async (event: { title: string; date: string; description: string; priority: string; userId: string }) => {
  await addDoc(collection(db, "events"), event);
};

export const getEvents = async () => {
  const querySnapshot = await getDocs(collection(db, "events"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteEvent = async (id: string) => {
  await deleteDoc(doc(db, "events", id));
};
