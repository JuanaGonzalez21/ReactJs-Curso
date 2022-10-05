//--------------Código de una promise--------------

/*
    const productos = [
        {
            id:1, nombre: "Papa", marca:"Pepita", precio: 230, stock:20
        },
        {
            id:2, nombre: "Te", marca:"tecito", precio: 130, stock:25
        },
        {
            id:3, nombre: "Mate", marca:"mateicto", precio: 120, stock:22
        },
        {
            id:4, nombre: "Cafe", marca:"Cafecito", precio: 140, stock:10
        },
    ]
    

    //Consulta a una base de datos asincronica
    const consultaBDD = (habilitado) => {
        return new Promise((resolve, reject) => { //resolve si se cumple - reject si rechaza
            if(habilitado){//habilitado == true
                resolve(productos);
            }else {
                reject("No habilitado");
            }
        })
    }

    consultaBDD(true).then(dolar => console.log(dolar))*/



import React, { useState, useEffect } from 'react';
//

const Dolar = () => {

    const [dolar, setdolar] = useState([]);

    //Siempre que se hagan llamados asincronicos se debe poner un UseEffect para que controle el llamado de la función
    useEffect(() => {

        const mostrarDolar = () => {
            fetch('https://criptoya.com/api/dolar')
                .then(response => response.json())
                .then(({ blue, ccb, ccl, mep, mepgd30 }) => {
                    setdolar(Object.entries({ blue, ccb, ccl, mep, mepgd30 }).map((moneda, indice) => <p key={indice}>Tipo: {moneda[0]}, Valor: ${moneda[1]}  </p>));
                })
            //blue = <p> tipo: blue, valor: $285 </p>
        }
        
        setInterval(()=>{
            mostrarDolar();
            console.log("pasar")
        }, 600000)
        mostrarDolar();

    }, []);

    console.log(dolar)
    
    return (
        <>
            {dolar}

        </>
    );
}

export default Dolar;
