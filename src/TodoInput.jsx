import React from 'react'

const TodoInput = ({todo, setTodo, AddTodo}) => {
  return (
    <div>
        <div className='input-wrapper'>
        <input type="text" name='todo'
        value={todo} placeholder='Create a new todo' onChange={(e) => {
          setTodo(e.target.value);
        }} />
        <button className='add-button' onClick={AddTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoInput;