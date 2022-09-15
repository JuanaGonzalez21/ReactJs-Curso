import React from 'react';
import Form from './Form';
import Dropdow from './Dropdow';
import Sections from './Sections';

const Navbar = () => {
    //Las listas van fueras del return 
    const listDrowdon = ["Hombre", "Mujer", "Niños", "Bebes"]
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <Sections />
                            <Dropdow lista={listDrowdon}/>
                        </ul>
                        <Form busqueda="Buscar Producto"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
