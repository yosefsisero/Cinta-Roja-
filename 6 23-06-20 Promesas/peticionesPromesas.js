const axios = require('axios')


function getCharacter(id){
    const URL = `https://swapi.dev/api/people/${id}/`
    axios.get(URL)
    .then((response)=>{
        console.log('Esto es un then')
         console.log(response.data)
         console.log(response.status)
    })
    .catch((error)=>{
        console.log('Esto es un catch')
        console.log(error.response.data)
        console.log(error.response.status)

    })
}

getCharacter(1)


function getPokemon(name){
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then((response)=>{
        console.log(response.data.name) 
    })
    .catch((error)=>{
        console.log(error)
    })
}

getPokemon('ditto')