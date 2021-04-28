import React from 'react';
import {Ejercicio1, Ejercicio2} from './EjerciciosFCC';
import {MathComponent} from 'mathjax-react';
import FCCejemplo from './ejercicio/FCCejemplo';


//react functional component
const FCC= ()=>{
    const ejemplo = Ejercicio2;
    const ejercicio = Ejercicio1;
    return (
        <div>
            <FCCejemplo ejemplo={ejemplo}></FCCejemplo>

            <h2> {ejercicio.titulo} </h2>
            <p>{ejercicio.pasos[0].explicacion}</p>
            <p>{ejercicio.pasos[0].paso}</p>
            <MathComponent tex={String.raw`${ejercicio.pasos[0].expresion}`} />

            <div className="input-group">
                <input
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="Agrupe los sumandos"
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