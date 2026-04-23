import type { FC } from "react";
import { fetchTodos, useIsLoading, useTodos } from "../store/use-todos-store";
import { completeTodo, deleteTodo } from "../store/use-todos-store";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const TodoList: FC = () => {
  const { t, i18n } = useTranslation();
  const todos = useTodos();
  const isLoading = useIsLoading();

  return (
    <>
    

      <div className='todos flex flex-col gap-4 justify-center items-center border border-gray-300 p-4 rounded-lg'>
        <h1 className="text-3xl font-bold text-gray-100">{t("todo.title")}</h1>
        <Button onClick={fetchTodos} variant="link">{t("todo.load")}</Button>
        {
          !isLoading ? (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <span
                    className={`todo-text ${todo.completed ? 'completed-text' : ''}`}
                  >{todo.todo}</span>
                  <div className="todo-actions">
                    <button onClick={() => completeTodo(todo.id)}>{todo.completed ? '✅' : '↩'}</button>
                    <button onClick={() => deleteTodo(todo.id)}>❌</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>{t("todo.loading")}</p>
          )
        }
      </div>

    </>
  );
};

export default TodoList;