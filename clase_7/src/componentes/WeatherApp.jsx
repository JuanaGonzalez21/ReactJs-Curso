import React, { useState, useEffect} from 'react';

const WeatherApp = () => {
    const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

    const [tiempo, setTiempo] = useState([]);
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Cordoba","Cordoba","AR"&limit=1&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);
    return (
        <>
            <h1>Clima:</h1>
            {tiempo}
        </>
    );
}

export default WeatherApp;
