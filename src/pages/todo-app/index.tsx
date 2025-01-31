import React from "react";
import { useAppSelector } from "@store";
import TodoApp from "@features/todo";
import SEO from "@components/SEO";
import AuthRequired from "@components/shared/Buttons/AuthRequired";

const TodoAppPage: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <>
      <SEO
        title="Головна | Todo App"
        description="Організуйте свої завдання ефективно!"
        url="https://yourdomain.com/"
      />
      <div>
        {user ? (
          <TodoApp />
        ) : (
          <AuthRequired message="Sign in to manage your tasks!" />
        )}
      </div>
    </>
  );
};

export default TodoAppPage;
