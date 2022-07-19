import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState([]);

  const todoText = useRef();

  useEffect(() => {
    const oldTodos = localStorage.getItem('todos');
    setTodos(oldTodos ? JSON.parse(oldTodos) : []);
  }, [])
  

  function addTodo (event){
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>

    </div>
  );
}

export default App;
