import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {

    let myStyle = {
        minHeight : "50vh"
    }

    return (
        <div className='container my-3' style={myStyle}>
           <h3 className='text-center my-3'>My Todos List</h3> 
           {props.todos.length===0?"Empty Todo List":props.todos.map((todo) => {
               return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> )
           })
           }
           
          
        </div>
    )
}

export default Todos
