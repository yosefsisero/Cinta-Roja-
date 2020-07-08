/* 
 Crea un componente ‘Home’ donde se pinte en pantalla una 
 página personal sencilla
   donde muestres:
- Nombre
- Hobbies
- Ocupación
- Links a tus redes sociales (al menos una)
- Una imagen (puede ser de ti o de algo que te gusta)
    - Agregar 3 etiquetas html adicionales que no tengan 
    nada que ver con los puntos previos

BONUS: agregar estilos a las etiquetas para que no se vea
 pinche
*/


import React from 'react'

function Home() {
    return (
        <div>
             <h2>Yosef Sisero</h2> 
             <h3>Practico tenis y natacion</h3>
             <img src="https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?size=626&ext=jpg"
                  alt="vacaciones"
             />
        </div>
    )
}

export default Home;




