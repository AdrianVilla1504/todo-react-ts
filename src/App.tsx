import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from "./todo-model";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }

    console.log("alv funciona perro, mira:", todos)
  };

  return (
    <div className="App">
      My tasks
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
    </div>
  )
}

export default App;
