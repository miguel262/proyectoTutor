import React, { useRef } from 'react';
import {MathComponent} from 'mathjax-react';

const FCejemplo = props => {

    const {result_final} = props.ejemplo;

    return (
        <>
            <h2> {props.ejemplo.titulo} </h2>
            <p>{props.ejemplo.explicacion}</p>
            <hr/>
            <p> Ejemplo:</p>
            <MathComponent tex={props.ejemplo.expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={"("+result_final[0]+")("+result_final[1]+")"}/>
            <p> donde {result_final[0]} es el factor común </p>
            <hr/>
        </>
    )
}
export default FCejemplo;
