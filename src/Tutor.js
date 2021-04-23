//react functional component
import React from 'react';
import FC from './factorComun/FactorComun';
import FCC from './factorComunCompuesto/FactorComunCompuesto';
import DC from './diferenciaCuadrados/DiferenciaCuadrados';
import DSC from './diferenciaSumaCubos/DiferenciaSumaCubos';
import TC from './trinomiosCuadraticos/TrinomiosCuadraticos';

/*
Tutor que carga un ejercicio de cualquiera de estos tipos (importaciones),
será un request como función de parámetros

la idea es definir un enlace que diga para este usuario cargue este ejercicio especifico.
*/
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