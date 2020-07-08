/*
Ejercicio 2
   Implementa un componente que reciba una lista de frutas
   mediante props y las despliegue en pantalla
 */


import React from 'react';

function Frutas(props) {

    return (
            <ul>
               {props.frutas.map((fruta) =>{
                 return <li key={fruta}>{fruta}</li>;
               })}
            </ul>
    )
}

export default Frutas;
