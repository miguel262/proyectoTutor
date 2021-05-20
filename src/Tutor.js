//react functional component
import React from 'react';

//tipo de ejercicios
import FC from './factorComun/FactorComun';
import FCC from './factorComunCompuesto/FactorComunCompuesto';
import DC from './diferenciaCuadrados/DiferenciaCuadrados';
import DSC from './diferenciaSumaCubos/DiferenciaSumaCubos';
import TC from './trinomiosCuadraticos/TrinomiosCuadraticos';

//Ejercicios
import { Ejercicio1,Ejercicio2,Ejercicio3,Ejercicio4,Ejercicio5,Ejercicio6,Ejercicio7 } from './factorComun/EjerciciosFC';

/*
Tutor que carga un ejercicio de cualquiera de estos tipos (importaciones),
será un request como función de parámetros

la idea es definir un enlace que diga para este usuario cargue este ejercicio especifico.
*/

const Principal = () =>{

    return (
        <>

            <FC ejercicio={Ejercicio1}></FC><br/>
            <FCC></FCC><br/>
            <DC></DC><br/>
            <DSC></DSC><br/>
            <TC></TC>
            <br/>
           
        </>
    )
}
export default Principal;