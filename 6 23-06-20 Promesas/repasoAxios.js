const axios = require("axios");

function getCharacterById(id) {
  let url = `https://rickandmortyapi.com/api/character/${id}`;

  let character = axios.get(url)
    .then((response) => {
      console.log("esto esta pasando en THEN");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Estamos en el catch");
      console.log(error.response.data);
    });
    console.log(character) 
}

getCharacterById(1)


//POST CON AXIOS
axios.post(url, {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});



// PUT CON AXIOS
axios.put(url, {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});



// DELTE CON AXIOS
axios.delete(url, {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});