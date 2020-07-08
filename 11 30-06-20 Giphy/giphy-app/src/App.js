import React from 'react';
import Buscador from './Componentes/Buscador';
import EffectExample from './Componentes/EffectExample/EffectExample';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App container">
      <Buscador />
      <EffectExample />
    </div>
  );
}

export default App;
