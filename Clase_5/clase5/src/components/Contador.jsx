import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    console.log(document.getElementById("boton1"));

    function modificarContador(operacion){
      if(operacion == "+"){
        setContador(contador + 1);
      }else{
        setContador(contador - 1);
      }

    }

    return (
        <>
          <h1> {contador}</h1>
          <div className='contador1'>
            <button onClick={() => modificarContador("+")} className='buttons'> Sumar </button>
            <button onClick={() => modificarContador("-")} className="buttons">Restar</button>
          </div>
        </>
    );
}

export default Contador;
