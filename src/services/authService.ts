import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  Unsubscribe,
} from "firebase/auth";
import firebaseApp from "../firebaseConfig";

const auth = getAuth(firebaseApp);

export interface LoginResponse {
  uid: string;
  email: string | null;
}

// Реєстрація нового користувача
export const registerUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  };
};

// Авторизація
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return {
    uid: userCredential.user.uid,
    email: userCredential.user.email,
  };
};

// Вихід із системи
export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};

// Відстеження змін авторизації
export const subscribeToAuthChanges = (
  callback: (user: LoginResponse | null) => void
): Unsubscribe => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({ uid: user.uid, email: user.email });
    } else {
      callback(null);
    }
  });

  return unsubscribe; // Коректний тип для функції `unsubscribe`
};
