import React from 'react'
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputField = ({todo, setTodo, handleAdd}:Props) => {
  return (
    <div className='inputField__container'>
        <form className="input__form">
          <input value={todo} onChange={(e)=> setTodo(e.target.value) } className='input__box' type="input" placeholder='Enter a new task' />
          <button className='input__submit' type="button">Add</button>
        </form>
    </div>
  )
}

export default InputField;
