 
import React,{useState}from 'react'
 

const Todo = (props) => {
  const {title,desc} =props.todo;
  const {id} = props;
    
const handleClear = (id)=> {
  props.onRemoveItem(id);
}

  return (
    <div> 
      <article className='main'>

        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
        <button onClick={handleClear}>delet</button>
      </article>
    </div>
  )
}

export default Todo
