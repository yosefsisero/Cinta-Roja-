const axios = require ('axios')


function get(){
  let URL = 'https://swapi.dev/api/people/3/'
  
  axios.get(URL)

  .then((response) => {
      console.log(response.statusCode)
      
  })

  .catch ((error) => {
      console.log(error.response.data)
  })
}


get()