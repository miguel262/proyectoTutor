import React from 'react';
import {MathComponent} from 'mathjax-react';

const FCCejemplo = props => {

    //const {result_final} = props.ejemplo;

    return (
        <>
            <h2> {props.ejemplo.titulo} </h2>
            <hr/>
            <p>{props.ejemplo.pasos[0].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={props.ejemplo.pasos[0].expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={"("+props.ejemplo.pasos[0].result_final[0]+")+("+props.ejemplo.pasos[0].result_final[1]+")"}/>
            <hr/>

            <p>{props.ejemplo.pasos[1].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={props.ejemplo.pasos[1].expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={props.ejemplo.pasos[1].result_final[0]+" + "+props.ejemplo.pasos[1].result_final[1]}/>
            <hr/>

            <p>{props.ejemplo.pasos[2].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={props.ejemplo.pasos[2].expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={props.ejemplo.pasos[2].result_final[0]+props.ejemplo.pasos[2].result_final[1]}/>
            <hr/>
        </>
    )
}
export default FCCejemplo;