import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig"; // Імпортуємо Firestore
import { Todo } from "../features/todo/types";
import { getAuth } from "firebase/auth";

const todosCollection = collection(db, "todos");

// Додавання нового todo

export const addTodoToFirestore = async (todo: {
  title: string;
  checked: boolean;
}) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) throw new Error("User not authenticated");

  const todosCollection = collection(db, "users", user.uid, "todos");
  const docRef = await addDoc(todosCollection, todo);

  return docRef.id;
};

// Отримання всіх todos
export const fetchTodosFromFirestore = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) throw new Error("User not authenticated");

  const todosCollection = collection(db, "users", user.uid, "todos");
  const querySnapshot = await getDocs(todosCollection);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Todo[];
};

// Оновлення todo
export const updateTodoInFirestore = async (
  id: string,
  updatedData: Partial<{ title: string; checked: boolean }>
) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) throw new Error("User not authenticated");

  try {
    // Додаємо підколекцію користувача
    const todoDoc = doc(db, "users", user.uid, "todos", id);
    await updateDoc(todoDoc, updatedData);
    console.log("Todo updated:", id);
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Видалення todo
export const deleteTodoFromFirestore = async (id: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) throw new Error("User not authenticated");

  try {
    // Додаємо підколекцію користувача
    const todoDoc = doc(db, "users", user.uid, "todos", id);
    await deleteDoc(todoDoc);
    console.log("Todo deleted:", id);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
