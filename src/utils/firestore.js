import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveUserData = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true });
    console.log("Дані успішно збережено!");
  } catch (error) {
    console.error("Помилка при збереженні даних:", error);
  }
};

export const getUserData = async (uid) => {
  try {
    const docSnap = await getDoc(doc(db, "users", uid));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Дані не знайдено!");
      return null;
    }
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
  }
};