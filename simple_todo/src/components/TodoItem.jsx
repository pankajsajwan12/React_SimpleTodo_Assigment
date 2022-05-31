import React from 'react'

const style1 = {
    display:'flex',
    alignItems:'Center',
    justifyContent:'space-Between',
    width:'300px',
    marginTop:"10px",
    width:'280px',
    height:'25px',
    background:'#eeeeee',
    color:'black',
}

const style2 = {
    width:'26px',
    borderRadius:'50%',
    background:'green',
    border:'1px solid red'
}

const TodoItem = ({ todo}) => {
    return (
      <div style={style1} >
        {todo.value}
        <div style={style2}><input type="radio" /></div>
      </div>
    )
  }

export default TodoItem
