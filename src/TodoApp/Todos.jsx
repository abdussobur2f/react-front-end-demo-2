import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
     
  return (
    <div>
       <section className='hero'>
        {
            props.todos.map((todo)=> <Todo todo={todo.todo} key={todo} id={todo.id} onRemoveItem={props.onRemovetodo}/>)
        }
       </section>
    </div>
  )
}

export default Todos
