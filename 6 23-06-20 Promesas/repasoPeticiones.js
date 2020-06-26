const request = require('request');

// CALLBACK HELL
// function getNameMovie(){
// request.get(URL,(err,response,body) => {
//     const json = JSON.parse(body);
//     console.log(json.name);
//     request.get(json.films[0],(err,response,body) => {
//         const json2 = JSON.parse(body);
//         console.log(json2.title);
//     });
// });
// }

function getCharacterById(idChar){
    return new Promise((resolve, reject)=>{
        let Url = `https://rickandmortyapi.com/api/character/${idChar}`
        request.get(Url, (error, response, body)=>{
            const data = JSON.parse(body)
            if(response.statusCode == 200){
                resolve(data)
            }else{
                reject('Algo salio mal, status: ' + response.statusCode)
            }
        })
    })
}
let rickData
getCharacterById(1)
    .then((respuesta) =>{ rickData = respuesta.name})
    .catch(error => console.log(error))

setTimeout(()=>{
    console.log(`el personaje es: ${rickData}`)
},1000)