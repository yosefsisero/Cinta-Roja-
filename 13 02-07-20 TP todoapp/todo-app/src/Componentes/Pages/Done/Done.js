/* Hacer una pagina(Ruta) que solo se vean los 
To do's terminados de Alta prioridadd*/ 
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from  '../../Layout/Header/Header'
import Footer from  '../../Layout/Footer/Footer'
import TodoCard from '../../TodoCard/TodoCard'

function Done() {
  const URL ="https://todos-back-devf-activa.herokuapp.com/todos/"
  const [todos, setTodos]= useState([])
  
  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      let allTodos = response.data
      setTodos(allTodos)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, []) 

    return (
        <>
           <Header />
        <br></br>
        <div className="container">
        <h3>ALTA</h3>
            {todos.map((todo)=>{
            return todo.priority === 1 && todo.done? 
              <TodoCard 
              priority={todo.priority} 
              name={todo.name} 
              done={todo.done}
              key={todo._id}
              /> 
              
              : undefined
            
            })}
        </div>
        <br></br>  
           <Footer />
        </>
    )
}

export default Done
