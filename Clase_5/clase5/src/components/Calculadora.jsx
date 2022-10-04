import React, {useState} from 'react';


const Calculadora = () => {
    const [variable, setvariable] = useState(0);
    
    function operaciones(operacion){
        const a = Number(prompt("variable 1"));
        const b = Number(prompt("variable 2"));
        if(operacion == "+"){
            setvariable(a + b);
        }if(operacion == "-"){
            setvariable(a - b);
        }if(operacion == "*"){
            setvariable(a * b);
        }if(operacion == "/"){
            setvariable(a / b);    
        }
    }

    return (
        <>  
            <h1>Calculadora</h1>
            <h2>{variable}</h2>
            <div className='botonesCalculadora'>
                <button onClick={() =>operaciones("+") }>Sumar</button>
                <button onClick={() =>operaciones("-") }>Restar</button>
                <button onClick={() =>operaciones("*") }>Multiplicar</button>
                <button onClick={() =>operaciones("/") }>Dividir</button>
            </div>
        </>
    );
}

export default Calculadora;
