import React from 'react';
import { Todo } from "../../todo-model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos}) => {
  return (
    <div>
      {
        todos.map((t) => <ul><li key={t.id}>{t.todo}</li></ul>)
      }
    </div>
  )
}

export default TodoList
