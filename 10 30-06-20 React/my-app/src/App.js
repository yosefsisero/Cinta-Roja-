import React from 'react';
import Home from './Home';
import OtroComp from './OtroComp';
import Frutas from './Frutas';

import './App.css';

function App() {
  return (
     <div className="App">
       <Home />
       <OtroComp nombre="Yosef" />
       <Frutas frutas={["Fresa", "Banana", "Manzana"]} />
     </div>

  )
}

export default App;
