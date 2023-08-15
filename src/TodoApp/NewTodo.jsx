 
import React, { useState } from "react";


const NewTodo = (props) => {


  const [todo, setTodo] = useState( {
    title:'',
    desc:''
  });
  // const [desc,setDesc] = useState("")
 
  const handleTodoChange = (event) => {
         const name =  event.target.name

       
         setTodo((prev) =>{
          return{ ... prev, [name]: event.target.value}
         })
 
  }
      
//   };
//   const handleChange = (event) => {
    
//     setDesc(event.target.value)
     
//  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({
      title:'',desc:''
    })
    
   props.onAddtodo(todo)
 
 
 
   
  };
 
  return (
    <form onSubmit={handleSubmit}>
    
      <input type="text" name="title" value={todo.title} onChange={handleTodoChange}/><br />
    
      <input type="text" name="desc" value={todo.desc} onChange={handleTodoChange} />
      <button   >Add Todo</button>
    </form>
  );
};

export default NewTodo;
