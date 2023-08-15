import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo';
import { Alert } from 'react-bootstrap';
const Home = () => {
 
  const [todos,setTodos] =useState([])

  const HandleTodo = (todo) => {
setTodos((prevTodos)=>{
  return[... prevTodos,{todo}]
})
  
 
  }
    const RemoveTodo = (id)=> {
       
        setTodos((prevTodos)=> {
          const fill = todos.filter((todo) => todo.id === !id);
          return fill;
        })
    }






  return (
    <div className='container'>
      <NewTodo onAddtodo={HandleTodo}/>
      <Todos todos={todos} onRemovetodo={RemoveTodo}/>
   <img src="" alt="" />
    </div>
  )
}

export default Home
