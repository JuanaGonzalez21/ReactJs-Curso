import React, {useState} from 'react';

const Click = () => {
    const [state, setstate] = useState(0);

    return (
        <>  
            <div >
            <button className='buttons' onClick={() =>  setstate(state+ 1)}> sumar 1</button>
            {state}
            </div>
        </>
    );
}

export default Click;
