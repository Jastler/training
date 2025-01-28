import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../store";
import { fetchTodos, logoutTodos } from "../store/todosSlice";

const useAuthListener = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(fetchTodos());
      }

      if (!user) {
        dispatch(logoutTodos());
      }
    });

    return () => unsubscribe();
  }, [auth, dispatch]);
};

export default useAuthListener;
