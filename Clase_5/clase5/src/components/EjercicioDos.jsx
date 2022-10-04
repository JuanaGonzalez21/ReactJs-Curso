import React, {useState} from 'react';
import mas from './img/mas.png';
import menos from './img/menos.png';
import './css/style2.css';

const EjercicioDos = () => {
    const [cantidad, setCantidad] = useState(0);

    function resta(){
        if(cantidad <= 0){
            setCantidad(cantidad = 0);
        }else {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <h1>Ejercicio en clase</h1>
            <div className='AgregarCarrito'>
                <div className='menosMas'>
                    <img className='tamImagen izquierda' src={menos} alt="signomenos" onClick={() => resta()} />
                    {cantidad}
                    <img className='tamImagen derecha' src={mas} alt="signomas" onClick={() => setCantidad(cantidad + 1)}/>
                </div>
                <button className='buttonEjercicio'>Agregar al Carrito</button>  
            </div>
        </>
    );
}

export default EjercicioDos;
