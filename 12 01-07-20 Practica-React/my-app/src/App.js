/* 
Una pagina que muestre datos de una API (Puede ser PokeApi, Swapi, 
rick and mortyo la que quieras), usar el state
Estilizar con bootstrap
Crear 3 componentes estilizados con bootstrap que se 
llamen en el componente principal
Uno de los componentes debe recibir props 
*/

import React from 'react';
import Api from './Componentes/Api/Api'
import 'bootstrap/dist/css/bootstrap.css' 


function App() {
  return (
    <div className="App">
      <Api />
    </div>
  );
}

export default App;
