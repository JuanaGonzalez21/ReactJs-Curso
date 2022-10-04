import React from 'react';
import Contador from './components/Contador';
import Calculadora from './components/Calculadora';
import './components/css/style.css'
import Click from './components/Click';
import EjercicioDos from './components/EjercicioDos';

const App = () => {
  return (
    <div>
      <Calculadora/>
      <EjercicioDos/>
      <h1>Sumar un numerr</h1>
      <Click/>
      <Contador/>
    </div>
  );
}

export default App;

