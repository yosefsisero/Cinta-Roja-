/*
Ejercicio 1
   Escribe un componente que muestre sus props y estado
   en consola. 
   */


import React, { useState } from 'react'

const OtroComp = (props) => {
    const [persona] = useState('David')
    console.log (persona);
    console.log(props);
    return (
        <div>
            <h1>Hola {props.nombre} !!!</h1>
        </div>
    )
}

export default OtroComp;
