import React from 'react';
import {Ejercicio1, Ejercicio3} from './EjerciciosFC';
import {MathComponent} from 'mathjax-react';
import './FactorComun.css';


//react functional component
const FC= ()=>{

    const ejemplo = Ejercicio1;
    const ejercicio=Ejercicio3;
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
            
            <p>{ejercicio.enunciado}</p>
            <MathComponent tex={String.raw`${ejercicio.expresion}`} />

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
            <hr/>
        </div>
    )
}

export default FC;