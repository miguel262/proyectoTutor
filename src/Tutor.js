//react functional component
import React from 'react';
import FC from './factorComun/FactorComun';
import FCC from './factorComunCompuesto/FactorComunCompuesto';
import DC from './diferenciaCuadrados/DiferenciaCuadrados';
import DSC from './diferenciaSumaCubos/DiferenciaSumaCubos';
import TC from './trinomiosCuadraticos/TrinomiosCuadraticos';

const Principal = () =>{

    const titulo = "Tutor cognitivo de matemáticas";
    return (
        <>
            <h1> {titulo} </h1>
            <FC></FC>
            <br/>
           
        </>
    )
}
export default Principal;