import React from "react";

function Controls(props){
    return(
    <div className="">
      <button onClick={props.aumentar}>Agregar +</button>  
      <button onClick={props.disminuir}>Disminuir -</button>    
    </div>)
}


export default Controls;