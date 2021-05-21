import { ref } from "vue";
import db from "../firebase/init";
const useDoc = (collection, docId) => {
  const error = ref(null);
  const isLoading = ref(false);

  const docRef = db.collection(collection).doc(docId);

  const getDoc = async () => {
    isLoading.value = true;
    try {
      const doc = await docRef.get();
      if (!doc.exists) {
        throw new Error("Data not found");
      }
      return doc;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const updateDoc = async (updates) => {
    isLoading.value = true;
    try {
      await docRef.update(updates);
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const deleteDoc = async () => {
    try {
      await docRef.delete();
    } catch (err) {
      error.value = err;
    }
  };

  return { updateDoc, deleteDoc, getDoc, error, isLoading };
};

export default useDoc;
