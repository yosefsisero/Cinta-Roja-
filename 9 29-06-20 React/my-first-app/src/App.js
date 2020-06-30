import React, { useState } from 'react';
/*
import useState from "react"  como se importa del mismo lugar podemos
importarlo de la forma que esta en la  linea 1
*/
import Count from './Count';
import Controls from './Controls';


import './App.css';

 


function App(){

  const [count, setCount] = useState(0);//Hooks, recibe como parametro

  return (
    <div className="">
      <Count num={count} />  {/* num es el prop que recibe los datos*/}
      <Controls 
       aumentar= { ()=> setCount(count + 1)} 
       disminuir= { ()=> setCount(count - 1)}
      /> {/*Funcion que va sumando y restando desde state*/}
    </div>
  );
}

export default App;
