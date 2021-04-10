//react functional component
import React from 'react';
import FC from './factorComun/FactorComun';
import FCC from './factorComunCompuesto/FactorComunCompuesto';
import DC from './diferenciaCuadrados/DiferenciaCuadrados';

const Principal = () =>{

    const titulo = "Tutor cognitivo de matemáticas";
    return (
        <>
            <h1> {titulo} </h1>
            <DC></DC>
            <br/>
           
        </>
    )
}
export default Principal;