import React from 'react';
import {Ejercicio1, Ejercicio2} from './EjerciciosFCC';
import {MathComponent} from 'mathjax-react';
//import './FactorComun.css';


//react functional component
const FCC= ()=>{
    const ejemplo = Ejercicio1;
    const ejercicio = Ejercicio2;
    return (
        <div>
            <h2> {ejemplo.titulo} </h2>
            <hr/>
            <p>{ejemplo.pasos[0].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={ejemplo.pasos[0].expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={ejemplo.pasos[0].result_final[0]}/>
            <MathComponent tex={ejemplo.pasos[0].result_final[1]}/>
            <hr/>

            <p>{ejemplo.pasos[1].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={ejemplo.pasos[1].expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={ejemplo.pasos[1].result_final[0]+" + "+ejemplo.pasos[1].result_final[1]}/>
            <hr/>

            <p>{ejemplo.pasos[2].paso}</p>
            <p> Ejemplo:</p>
            <MathComponent tex={ejemplo.pasos[2].expresion}/>
            <p>Solución: </p> 
            <MathComponent tex={ejemplo.pasos[2].result_final[0]+ejemplo.pasos[2].result_final[1]}/>
            <hr/>

            <h2> {ejercicio.titulo} </h2>
            <p>{ejercicio.pasos[0].explicacion}</p>
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
        </div>
    )
}

export default FCC;