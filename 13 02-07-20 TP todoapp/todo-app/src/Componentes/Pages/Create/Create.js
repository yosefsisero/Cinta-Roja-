import React, { useState } from 'react'
import axios from 'axios'
import Header from  '../../Layout/Header/Header'
import Footer from  '../../Layout/Footer/Footer'


function Create() {
    const URL ="https://todos-back-devf-activa.herokuapp.com/todos/"

    const [name, setName] = useState('')
    const [done, setDone] = useState(false)
    const [priority, setPriority] = useState('')

    const clear = ()=>{  
        setName ('')
        setDone (false)
        setPriority('')
    }

    const saveTodo = (event)=>{
       event.preventDefault();
       console.log("Dieron click en crear")
       if(priority === 0){
           alert('Tu prioridad no es valida ')
       }else{
        axios.post(URL, {

            name,
            done,
            priority,
      
           }).then(()=>{
               alert('Creado con exito')
               clear()
    
           }).catch((error)=>{
               alert('Hubo un error, revisa que paso')
               console.log(error)
           })
       }
      
    }
    
    return (
     <>
        <Header />
        
     <div className="container" >

        <h3>Crear un To Do</h3>   

        <br></br> 

        <form onSubmit={saveTodo}>

            <div className="form-group">

            <label>¿Que tienes que hacer?</label>   
            <input 
            className="form-control" 
            type="text"  
            placeholder="Nombre"
            required 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />

            <br></br> 

            <label>¿Ya esta Hecho?</label>
            <input 
            className="form-control"  
            type="checkbox" 
            placeholder="Ya esta??"
            value={done}
            onChange={()=>{
                if(!done){
                    setDone(true)
                }else{
                    setDone(false)
                }
            }}
           />
            
             <br></br> 

             <label>Selecciona el nivel de prioridad de tu to do</label>
             <select
             className="form-control"
             value={priority}
             onChange={(e)=>{setPriority(e.target.value)}}
             >
              <option value="0">Selecciona una opción</option>    
              <option value="3">Baja</option> 
              <option value="2">Media</option> 
              <option value="1">Alta</option> 
             </select>
             
            <br></br> 

            <button type="submit" className="btn btn-success"> Crear To Do</button> 
            </div>   

        </form>
    </div>
       
        <Footer />
    </>
    )
}

export default Create
