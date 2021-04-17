import React from 'react';
import {Ejercicio1} from './EjerciciosTC';
import {MathComponent} from 'mathjax-react';
//import './DiferenciaCuadrados.css';


//react functional component
const TC= ()=>{
    const ejemplo = Ejercicio1;
    //const ejercicio = Ejercicio2;
    return(
        <div>
            {/*Ejemplo diferencia de cubos */}
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

          
            {/*Ejercicio
            <hr/>
            <h2> {ejercicio.titulo} </h2>
            <p>{ejercicio.pasos[0].paso}</p>
            <MathComponent tex={String.raw`${ejercicio.pasos[0].expresion}`} />
            <div className="input-group">
                <input
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Ingrese factor común"
                    autoComplete= "off"
                ></input>

                <button 
                    type="submit" 
                    className="btn btn-outline-success">
                    Aceptar
                </button>      
            </div>
            */} 
        </div>
    )
}

export default TC;