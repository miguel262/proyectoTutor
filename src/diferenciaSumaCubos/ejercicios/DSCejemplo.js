import React from 'react'
import {MathComponent} from 'mathjax-react';

export const DSCejemplo = ({ejemplo}) => {
    return (
        <>
            <hr/>
            <h2> {ejemplo.titulo} </h2>
            <p>{ejemplo.pasos[0].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[0].expresion}`} />
            <p>Solución: </p> 
            <MathComponent tex={"("+ejemplo.pasos[0].result_final[0]+")^2-("+ejemplo.pasos[0].result_final[1]+")^2"}/>
            <p>donde {ejemplo.pasos[0].result_final[0]} y {ejemplo.pasos[0].result_final[1]} son los términos al cuadrado</p>
            
            <hr/>
            <p>{ejemplo.pasos[1].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[1].expresion}`} />
            <p>Solución: </p> 
            <MathComponent tex={ejemplo.pasos[1].result_final[0]+ejemplo.pasos[1].result_final[1]}/>
            <p>donde {ejemplo.pasos[0].result_final[0]} y {ejemplo.pasos[0].result_final[1]} son los términos al cuadrado que se ingresan en la suma por diferencia</p>

        </>
    )
}
