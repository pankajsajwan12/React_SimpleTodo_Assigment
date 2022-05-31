import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo([...todo,{
      id: Date.now(),
      value: newTodo
    }]);
    
  }

  const style1 = {
    width:'300px',
    margin:'auto',
    marginTop:'20px',
    backgroud:'green'
  }
  return (
    <div className="App">
      <Todo addTodo={addTodo}/>
        <TodoList/>
      <div style={style1}>
      {todo.map((todo)=>(
        <TodoItem key={todo.id}
        todo={todo}/>
      ))}
      </div>
    </div>
  );
}

export default App;
