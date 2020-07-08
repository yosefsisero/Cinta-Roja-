import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Buscador() {
  const [gif, setGif] = useState('');
  const [toFind, setToFind] = useState('soccer');

   useEffect(() => {
     console.log('hubo un cambio')
     getGif()
   }, [toFind])

  const API_KEY = 'Nlebkba66THUsDknxNV19blnWBdkNEeg'

  const getGif = ()=>{
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${toFind}&limit=3`)
               .then((response)=>{
                let r = response.data.data[0].images.fixed_width.url
                   console.log(r)
                   setGif(r)
                })
                   
               .catch((error)=>{console.log(error)}) 
    }

    return (
        <div>
            <input placeholder="Busca un gif" onChange={(event)=>{setToFind(event.target.value)}}/>
            {/*<button onClick={getGif}>Busca un gif</button>*/}
            <img src ={gif} alt="gif" />
        </div>
    )
}

export default Buscador;

