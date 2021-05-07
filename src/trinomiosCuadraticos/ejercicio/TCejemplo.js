import React from 'react'
import {MathComponent} from 'mathjax-react';

export const TCejemplo = ({ejemplo}) => {
    return (
        <div>
            <hr/>
            <h2> {ejemplo.titulo} </h2>
            <p>{ejemplo.pasos[0].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[0].expresion}`} />
            <p>Solución: </p> 
            <p>a = {ejemplo.pasos[0].result_final[0]}, b= {ejemplo.pasos[0].result_final[1]}, c={ejemplo.pasos[0].result_final[2]}</p>
            
            <hr/>
            <p>{ejemplo.pasos[1].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[1].expresion}`} />
            <p>Solución: </p> 
            <MathComponent tex={"Δ= "+ejemplo.pasos[1].result_final}/>

            <hr/>
            <p>{ejemplo.pasos[2].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[2].expresion}`} />
            <p>Solución: </p>
            <p>{ejemplo.pasos[2].result_final[0]}</p> 

            <hr/>
            <p>{ejemplo.pasos[3].paso}</p>
            <MathComponent tex={ejemplo.pasos[3].formula[0]+","+ejemplo.pasos[3].formula[1]}/>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[3].expresion}`} />
            <p>Solución: </p>
            <MathComponent tex={"x_{1}="+ejemplo.pasos[3].result_final[0]+", x_{2}="+ejemplo.pasos[3].result_final[1]} /> 

            <hr/>
            <p>{ejemplo.pasos[4].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={String.raw`${ejemplo.pasos[4].expresion}`} />
            <p>Solución: </p>
            <MathComponent tex={"("+ejemplo.pasos[4].result_final[0]+")("+ejemplo.pasos[4].result_final[1]+")"} /> 

        </div>
    )
}
