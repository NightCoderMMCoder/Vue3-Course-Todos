import { ref } from "vue";
import db from "@/firebase/init";

const useCollection = (collection) => {
  const isLoading = ref(false);
  const items = ref([]);

  const collectionRef = db.collection(collection);

  const addDoc = async (data) => {
    isLoading.value = true;
    await collectionRef.add({
      ...data,
      createdAt: Date.now(),
    });
    isLoading.value = false;
  };

  const getDocs = () => {
    isLoading.value = true;
    collectionRef.orderBy("createdAt").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          items.value.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
          isLoading.value = false;
        }
        if (change.type === "modified") {
          const idx = items.value.findIndex(
            (todo) => todo.id === change.doc.id
          );
          Object.assign(items.value[idx], {
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
        if (change.type === "removed") {
          const idx = items.value.findIndex(
            (todo) => todo.id === change.doc.id
          );
          items.value.splice(idx, 1);
        }
      });
    });
  };

  return { addDoc, getDocs, isLoading, items };
};

export default useCollection;
