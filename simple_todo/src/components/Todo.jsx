import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = ( { addTodo})=> {
    const [value, setValue] = useState('');

    return (
        <div>
            <input type="text" placeholder="Write Something...." 
            onChange={(e) =>{setValue(e.target.value)}}
            value={value}/>
            <button
             onClick={()=>{
                 addTodo(value);
                 setValue("");
             }}>+</button>      
        </div>
    )
}

export default Todo;