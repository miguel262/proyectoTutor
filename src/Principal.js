//react functional component
import React from 'react';
import FC from './factorComun/FactorComun';
import FCC from './factorComunCompuesto/factorComunCompuesto';

const Principal = () =>{

    const titulo = "Tutor cognitivo de matemáticas";
    return (
        <>
            <h1> {titulo} </h1>
            <FCC></FCC>
            <br/>
           
        </>
    )
}

export default Principal;