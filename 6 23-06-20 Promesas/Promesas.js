

const numeroMenorQueCinco = new Promise((resolve, reject)=>{
    const RANDOM_NUMBER = Math.floor(Math.random()*10)
    setTimeout(
        ()=>{
            if (RANDOM_NUMBER > 5){
                resolve(RANDOM_NUMBER)
            }else if (RANDOM_NUMBER < 5){
                reject(new Error(`El numero${RANDOM_NUMBER} es menor a 5`))
            }
        }, 2000
    )
})

numeroMenorQueCinco
.then (resolve => console.log(resolve))
.catch(error => console.log(error))



function login(receivedEmail, receivedpassword){
    return new Promise (function(resolve, reject){
        setTimeout(()=>{
            let email ='yosefsisero@gmail.com';
            let password = 'jaja';
            if(receivedEmail == email && receivedpassword == password){
                resolve({
                    mensaje: "Bienvenido usuario",
                    mensaje2: "un gusto tenerte de usuario"
                });
            }else {
                reject (new Error('tu password o email estan mal, checalo!!'))
            }
        }, 1000);
    })
}

/* de este modo esta todo perfecto por lo que dara el then*/
login('yosefsisero@gmail.com', 'jaja')
    .then((response)=> console.log(response.mensaje))
    .catch(error => console.log(error))


/*de este modo hay un error por lo que va a dar el catch*/

login('yosefsisero@gmail.com', 'jejej')
    .then((response)=> console.log(response.mensaje))
    .catch(error => console.log(error))
