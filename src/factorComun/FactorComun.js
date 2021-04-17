import React from 'react';
import {Ejercicio1, Ejercicio2} from './EjerciciosFC';
import {MathComponent} from 'mathjax-react';
import './FactorComun.css';
import EjerFC from './componentes/FCpaso1';


//react functional component
const FC= ()=>{

    const ejemplo = Ejercicio1;
    const ejercicio=Ejercicio2;
    const {result_final} = ejemplo;


    return (
        <div>
            <h2> {ejemplo.titulo} </h2>
            <p>{ejemplo.explicacion}</p>
            <hr/>
            <p> Ejemplo:</p>
            <MathComponent tex={ejemplo.expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={"("+result_final[0]+")("+result_final[1]+")"}/>
            <p> donde {result_final[0]} es el factor común </p>
            <hr/>
            
            <EjerFC ejercicio={ejercicio}></EjerFC>
        </div>
    )
}

export default FC;