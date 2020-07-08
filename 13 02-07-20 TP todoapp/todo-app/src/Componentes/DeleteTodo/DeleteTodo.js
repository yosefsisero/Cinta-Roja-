import React from 'react'
import axios from 'axios'

function DeleteTodo(props) {
    const URL =`https://todos-back-devf-activa.herokuapp.com/todos/${props._id}/`
    const useDelete = () => {
        axios.delete(URL)
        .then((response)=>{
            alert('Todo borrado')
            window.location.reload()
        }).catch((error)=>{
            alert(error)
        })
    }
    
    
    return (
        <>
            <button className="btn btn-dark" onClick={useDelete} >Borrar</button>
        </>
    )
}

export default DeleteTodo
