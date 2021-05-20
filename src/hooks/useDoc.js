import db from "../firebase/init";
const useDoc = (collection, docId) => {
  const docRef = db.collection(collection).doc(docId);
  const updateDoc = async (updates) => {
    await docRef.update(updates);
  };

  return { updateDoc };
};

export default useDoc;
