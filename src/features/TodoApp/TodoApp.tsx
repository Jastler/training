import { v4 as uuidv4 } from "uuid";

import { addTodo } from "../../store/todosSlice";
import { TextInputWithAddButton } from "../../componets/UI/TextInputWithAddButton";
import { TodosList } from "./TodosList";
import { useAppDispatch } from "../../store";

import styles from "./index.module.scss";

const TodoApp = () => {
  const dispatch = useAppDispatch();

  const handleAddTodo = (text: string) => {
    const id = uuidv4();
    dispatch(
      addTodo({
        id: id,
        title: text,
        checked: false,
      })
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodosList />
      <TextInputWithAddButton onAdd={(text) => handleAddTodo(text)} />
    </div>
  );
};

export default TodoApp;
