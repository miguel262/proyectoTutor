import React from 'react';
import {Ejercicio1, Ejercicio2} from './EjerciciosFC';
import './FactorComun.css';
import FCpaso1 from './ejercicio/FCpaso1';
import FCejemplo from './ejercicio/FCejemplo';



//react functional component
const FC= ()=>{

    const ejemplo = Ejercicio1;
    const ejercicio=Ejercicio2;

    return (
        <div>
            {//crear el boton para ver el ejemplo
            //<FCejemplo ejemplo={ejemplo}></FCejemplo>
            }
            <FCpaso1 ejercicio={ejercicio}></FCpaso1>
        </div>
    )
}

export default FC;