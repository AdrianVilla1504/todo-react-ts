import React, {useRef} from 'react';
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}:Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='inputField__container'>
        <form
          className="input__form"
          onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
          }}
        >
          <input
            type="input"
            value={todo}
            onChange={(e)=> setTodo(e.target.value) }
            placeholder='Enter a new task'
            className='input__box'
          />
          <button
            className='input__submit'
            type="submit">
              Add
          </button>
        </form>
    </div>
  )
}

export default InputField;
