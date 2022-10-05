import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Dolar from './layouts/Dolar';
import Home from './componentes/content/Home';
import './App.css';
import WeatherApp from './componentes/WeatherApp';

const App = () => {
  return (
    <>
      <Navbar/>
      <Dolar/>
      <Home/>
      <WeatherApp/>

    </>
  );
}

export default App;
