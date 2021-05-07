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


    return (
        <>
            <TC></TC>
            <br/>
           
        </>
    )
}
export default Principal;