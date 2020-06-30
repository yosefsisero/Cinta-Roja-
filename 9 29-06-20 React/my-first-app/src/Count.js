import React from 'react';


function Count(props){
    return(
        <>
        <h2>La cuenta va en:</h2>
        <h3>{props.num}</h3>
        </>
    );
}

export default Count;