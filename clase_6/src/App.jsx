import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Dolar from './layouts/Dolar';
import Home from './componentes/content/Home';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <Dolar/>
      <Home/>

    </>
  );
}

export default App;
