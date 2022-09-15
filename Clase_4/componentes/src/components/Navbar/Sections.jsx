import React from 'react';

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                    <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Tus Favoritos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
            </li>
        </>
    );
}

export default Sections;
