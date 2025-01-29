import React from "react";
import { useAppSelector } from "@store";
import TodoApp from "@features/todo";
import SEO from "@components/SEO";

const TodoAppPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <>
      <SEO
        title="Головна | Todo App"
        description="Організуйте свої завдання ефективно!"
        url="https://yourdomain.com/"
      />
      <div>{user ? <TodoApp /> : <div>You must log in</div>}</div>
    </>
  );
};

export default TodoAppPage;
