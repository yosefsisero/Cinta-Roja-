import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from  '../../Layout/Header/Header'
import Footer from  '../../Layout/Footer/Footer'
import TodoCard from '../../TodoCard/TodoCard'

function Home() {
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
       
        <h2>Bienvenido, esto es lo que hay por hacer:</h2>
       {/* <TodoCard priority='3' name='yosef' done={false}/>
        <TodoCard priority='2' name='yosef' done= {true}/>
        <TodoCard priority='1' name='yosef' done= {true}/> */}
        <div className="container">
            
            <h3>ALTA</h3>
            {todos.map((todo)=>{
            return todo.priority === 1 ? 
             
              <TodoCard 
              priority={todo.priority} 
              name={todo.name} 
              done={todo.done}
              _id={todo._id}
              key={todo._id}
              /> 
              
              : undefined
            ;
            })}
            
            
            <h3>MEDIA</h3>
            {todos.map((todo)=>{
            return (
              todo.priority === 2 ? 
              
              <TodoCard 
              priority={todo.priority} 
              name={todo.name} 
              done={todo.done}
              _id={todo._id}
              key={todo._id}
              /> 
              
              : undefined
            );
            })}

            
             <h3>BAJA</h3>
            {todos.map((todo)=>{
            return (
              todo.priority === 3 ? 
              
              <TodoCard 
              priority={todo.priority} 
              name={todo.name} 
              done={todo.done}
              _id={todo._id}
              key={todo._id}
              /> 
             
              : undefined
            );
            })}

        </div>
       
       <Footer/>
     </>
       
    )
}

export default Home

