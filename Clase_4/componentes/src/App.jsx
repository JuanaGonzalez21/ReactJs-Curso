import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Navbar/Form';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Form busqueda="Buscar Personas"/>
        </div>
    );
}

export default App;

