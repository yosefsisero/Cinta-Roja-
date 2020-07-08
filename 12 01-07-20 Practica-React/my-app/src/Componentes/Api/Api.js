import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Api.css'


function Api() {
    const [nom, setNom] = useState('')
    const [Peso, setPeso] = useState('')
    const [Genero, setGenero] = useState('')
    const [number, setNumber] = useState('');
    
   useEffect(() => {
        console.log('hubo un cambio')
        getApi()
      }, [number])

      
    const getApi = () => {
        axios.get(`https://swapi.dev/api/people/${number}/`)

        .then((response) => {
           
            let a = response.data.name
            let b = response.data.height
            let c = response.data.gender
            setNom(a)
            setPeso(b)
            setGenero(c)


        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }
    return (
        <div>
             <input id="input" placeholder="Busca un personaje de Star Wars" onChange={(event)=>{setNumber(event.target.value)}}/>
            

             <table className="table table-dark tabla">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Peso</th>
            <th scope="col">Género</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{nom}</td>
            <td>{Peso}</td>
            <td>{Genero}</td>
          </tr>
        </tbody>
      </table>
        </div>
    )
}

export default Api
